import { writable } from 'svelte/store';

import { RTCBase } from './RTCBase';

// import {log} from './utils'

import { langs, msg_signal_oper } from '$lib/js/stores.js';

// export const msg = writable('');

export class RTCOperator extends RTCBase {
	constructor(operator, uid, signal) {
		// rtc.localSound.src = "./assets/call.mp3"
		super(operator, uid, signal);

		this.checking_tmr;

		msg_signal_oper.subscribe((data) => {
			try {
				if (data) this.OnMessage(data);
			} catch (ex) {
				console.log(ex);
			}
		});
	}

	Init(cb) {
		let that = this;

		this.mode = '';
		let transAr = [that.abonent];
		that.main_pc = '';
		for (let i in transAr) {
			that.InitRTC(transAr[i], function () {
				cb();
			});
		}
	}

	SendOffer(key) {
		let that = this;

		that.pcPull[key].params['loc_desc'] = '';
		that.pcPull[key].params['loc_cand'] = '';

		//log('pcPull createOffer start', that);
		that.pcPull[key].con
			.createOffer(
				(this.mode = {
					offerToReceiveAudio: 1,
					offerToReceiveVideo: 1, // test 0
					iceRestart: 1
				})
			)
			.then(
				(desc) => that.pcPull[key].onCreateOfferSuccess(desc),
				that.pcPull[key].onCreateOfferError
			);
	}

	ChooseTarif(tarif) {
		let par = {};
		par.proj = 'kolmit';
		par.func = 'tarif';
		par.em = this.em;
		par.tarif = tarif;
		par.psw = this.psw;

		return new Promise((resolve, reject) => {
			this.signal.SendMessage(par, (data) => {
				resolve(data);
			});
		});
	}

	SendStatus(status) {
		let par = {};
		par.proj = 'kolmit';
		par.func = 'status';
		par.type = this.type;
		par.abonent = this.abonent;
		par.uid = this.uid;
		par.em = this.em;
		par.status = status;
		this.status = status;
		return new Promise((resolve, reject) => {
			this.signal.SendMessage(par, (data) => {
				resolve(data);
			});
		});
	}

	SendVideoOffer(key) {
		let that = this;
		that.pcPull[key].params['loc_desc'] = '';
		that.pcPull[key].params['loc_cand'] = '';

		that.pcPull[key].con
			.createOffer(
				(that.mode = {
					offerToReceiveAudio: 1,
					offerToReceiveVideo: 1,
					iceRestart: 1
				})
			)
			.then(
				(desc) => that.pcPull[key].onCreateVideoOfferSuccess(desc),
				that.pcPull[key].onCreateOfferError
			);
	}

	async Offer() {
		this.Init(async () => {
			if (this.pcPull[this.abonent].con.signalingState !== 'closed') {
				this.GetUserMedia({ audio: 1, video: 0 }, () => {
					this.SendOffer(this.abonent);
				});
			}
		});
	}

	OnActive() {
		this.Init(() => {
			if (this.pcPull[this.abonent].con.signalingState !== 'closed') {
				this.GetUserMedia({ audio: 1, video: 0 }, (res) => {
					if (res) {
						this.SendOffer(this.abonent);
					}
				});
			}
		});
	}

	OnCall() {
		if (this.DC) {
			//this.DC.SendDCTalk();
			clearInterval(this.DC.inter);
		}

		this.SendStatus('call');

		// $('i.video').on('click', () => {
		//     $('i.video').off('click');
		//     that.localSound.muted = 'true';
		//     $(that.localVideo).css('display', 'inline-block');
		//     if (that.DC.dc.readyState === 'open') {
		//         that.GetUserMedia({video: 1}, function () {
		//             that.SendVideoOffer(that.main_pc);
		//         });
		//     }
		// });
	}

	OnTalk() {
		if (this.DC.dc) {
			this.DC.SendDCTalk();
		}

		this.SendStatus('talk');
		console.log();

		// $('i.video').css('display', 'inline-block');

		// $('i.video').on('click', () => {
		//     $('i.video').off('click');
		//     that.localSound.muted = 'true';
		//     $(that.localVideo).css('display', 'inline-block');
		//     if (that.DC.dc.readyState === 'open') {
		//         that.GetUserMedia({video: 1}, function () {
		//             that.SendVideoOffer(that.main_pc);
		//         });
		//     }
		// });
	}

	OnMute() {
		this.RemoveTracks();
		if (this.DC)
			this.DC.SendDCHangup(() => {
				//this.OnInit();
			});

		// $(ev.target).trigger('click');
	}

	OnInactive() {
		this.RemoveTracks();

		if (this.DC.dc.readyState === 'open' || this.DC.dc.readyState === 'connecting') {
			this.DC.SendDCHangup(() => {
				this.DC.dc.close();
				this.SendStatus('close');
			});
		}

		// });
	}

	OnMessage(data) {
		let that = this;

		if (data.func === 'call') {
		}

		if (data.func === 'mute') {
			this.RemoveTracks();
			// this.OnInit();
		}

		if (data.func === 'talk') {
			clearInterval(that.DC.inter);
		}

		if (data.func === 'redirect') {
		}

		if (data.func === 'video') {
		}

		if (data.desc && that.pcPull[data.abonent]) {
			if (
				that.pcPull[data.abonent].con &&
				(that.pcPull[data.abonent].con.connectionState === 'failed' ||
					that.pcPull[data.abonent].con.connectionState === 'disconnected')
			)
				that.pcPull[data.abonent].con.restartIce();

			if (that.pcPull[data.abonent]) {
				that.pcPull[data.abonent].params['rem_desc'] = data.desc;
				that.pcPull[data.abonent].setRemoteDesc(data.desc);

				that.PlayCallCnt();
			}
		}
		if (data.cand && that.pcPull[data.abonent]) {
			if (that.pcPull[data.abonent]) {
				if (
					!that.pcPull[data.abonent].con ||
					that.pcPull[data.abonent].con.signalingState === 'closed'
				) {
					return;
				}
				try {
					that.pcPull[data.abonent].params['rem_cand'] = data.cand;
					if (Array.isArray(data.cand)) {
						for (let c in data.cand) {
							that.pcPull[data.abonent].con.addIceCandidate(data.cand[c]);
							//log(' Remote ICE candidate: \n' + (data.cand[c] ? JSON.stringify(data.cand[c]) : '(null)'), that);
						}
					} else {
						that.pcPull[data.abonent].con.addIceCandidate(data.cand);
						//log(' Remote ICE candidate: \n' + (data.cand ? JSON.stringify(data.cand) : '(null)'), that);
					}
				} catch (ex) {
					log(ex);
				}
			}
		}
	}
}
