
<div style="display:flex; min-height:120px; flex-wrap: nowrap;justify-content: space-between;">

        <div style="flex:1">
                <VideoRemote {...remote.video}>
                        <!-- <i class="fa fa-spinner fa-spin" style="position:relative; top:50%;left:50%;font-size:44px;"></i> -->
                </VideoRemote>

                <CallButton on:click={OnClickCallButton} bind:status={status} {OnLongPress}>
                        <!-- <i class="video icofont-ui-video-chat" on:click = {OnClickVideoButton}
                                style="display:{video_button_display};position:absolute;right:0px;top:0;color:lightgrey;font-size: 40px;z-index:20">
                        </i> -->
                        <!-- <b style="position: absolute;left:22px;top:10px;color:#0e0cff;font-size: 12px;" >{call_cnt}</b> -->
                        <b class="call_cnt"  style="display:none;position: absolute;left:22px;top:10px;color:#0e0cff;font-size: 12px;" >100</b>
                        <span class="badge badge-primary badge-pill call-queue"
                                style="display:none;position: absolute;right:0px;bottom:0px;color:#0e0cff;font-size: 12px;opacity:1">0</span>
                </CallButton>
                <div style="display:{remote.text.display};
                                position: absolute;
                                z-index: 10;
                                background-color: rgba(125, 125, 125, 0.8);
                                top: 90px;
                                left: 2px;">
                        <p style="font-size: .7em; white-space: nowrap; color:white;margin:auto;text-align: center;">{remote.text.msg} <br> {remote.text.name}</p>
                        <!-- <p style="font-size: .7em; white-space: nowrap;">{remote.text.name}</p> -->
                </div> 
        </div>

        <div style="position:absolute;flex:1 1 0%"> 
 
                <VideoLocal {...local.video}>
                        <svelte:fragment slot="footer">
                                <div bind:this={container}></div>                                        
                        </svelte:fragment>
                </VideoLocal>

                {#if video_button_display}
                <div class="video" style="position: absolute;top: 0;width: 100px; height:100px;">
                <svg height="30" width="30" 
                        style="position: absolute;
                        bottom: 70px;
                        right: 0px;
                        z-index: 30;"
                        on:click = {OnClickVideoButton}>
                        <glyph glyph-name="ui-video-chat" unicode="&#xec90;" horiz-adv-x="50" />
                        <g class="currentLayer" style=" position: absolute; right: 0; top: 0; stroke:grey; stroke-width:2px;fill:lightgrey;font-size: 30px;">
                        <path d="M891.5 23h-783c-59.7 0-108.5 48.8-108.5 108.5v466.20000000000005c0 59.59999999999991 48.8 108.5 108.5 108.5h222.39999999999998v270.5999999999999l270.70000000000005-270.5999999999999h289.9c59.700000000000045 0 108.5-48.90000000000009 108.5-108.5v-466.20000000000005c0-59.7-48.799999999999955-108.5-108.5-108.5z m-223.5 370l-252.8 134.70000000000005c-26.30000000000001 14-47.89999999999998 1.099999999999909-47.89999999999998-28.700000000000045v-262.9c0-29.900000000000034 21.599999999999966-42.80000000000001 47.89999999999998-28.80000000000001l252.8 134.7c26.299999999999955 14 26.299999999999955 37 0 51z"
                                transform="scale(.03)"
                                style="fill:lightgrey; stroke:black; stroke-width:20px"
                        />
                        </g>
                </svg>

                        <!-- <i class="video icofont-ui-video-chat"  on:click = {OnClickVideoButton}
                        style="position: absolute; right: 0; top: 0; stroke:black; stroke-width: 2px; color: lightgrey; font-size: 30px; z-index: 20;"></i>  -->
                </div>
                {/if}

        </div>
     
        <div style="flex:3">
                <AudioLocal  {...local.audio} bind:paused = {local.audio.paused}/>
                <AudioRemote  {...remote.audio}  bind:srcObject={remote.audio.srcObject}/>

                <RecordedVideo />
                <Download />
        </div>
   
        <BurgerMenu padding={'25px'}>
                <!-- {@debug dict} -->
                <!-- {#if dict.dict['Language Select'][lang]} -->
                        {dict['Language Select'][lang]}:
                <!-- {/if} -->
                <div style="display: flex; margin-bottom:20px">
                        <label style="flex:1">
                                <input type=radio bind:group={lang} name="lang" value={'en'} on:change={OnSelected}>
                                <img src="https://www.sic-info.org/wp-content/uploads/2014/01/gb.png" alt="English">
                        </label>
                
                        <label style="flex:1">
                                <input type=radio bind:group={lang} name="lang" value={'fr'} on:change={OnSelected}>
                                <img src="https://www.sic-info.org/wp-content/uploads/2014/01/fr.png" alt="French">
                        </label>
                
                        <label style="flex:1">
                                <input type=radio bind:group={lang} name="lang" value={'ru'} on:change={OnSelected}>
                                <img src="https://www.sic-info.org/wp-content/uploads/2014/01/ru.png" alt="Russian">
                        </label>
                </div>
                {#if operator}      
                        {#if !edited_display}                          
                                <h5 on:click="{()=>editable.set(true)}">{dict['Edit Call Center'][lang]}</h5>                 
                        {:else}
                                <h5 on:click="{()=>editable.set(false)}">{dict['Cancel Edit Call Center'][lang]}</h5>
                        {/if}   
                {/if}
                
                {#if operator.email!==operator.abonent } 
                        <h5 on:click="{()=>{window.location = '/'}}">{dict['Create my own net'][lang]}</h5> 
                {/if}   

        </BurgerMenu>
     
</div>

<progress id="dataProgress"  value={progress.value}  max="100"  duration='200' style="display:{progress.display};top:100px;width:98%;z-index:10"></progress>

{#if (!tarif || tarif.name==='free') && !operator.abonent}
        <Landpage {tarif}></Landpage> 
{:else}
        <Callcenter bind:this={callcenter} bind:status={status} bind:operator={operator} {tarif} {psw}/>
{/if}

<script>

import { onDestroy } from 'svelte';
import { onMount, getContext, setContext } from 'svelte';
import "../assets/icofont/icofont.min.css";

// import {Dict} from '$lib/js/dict'
import Callcenter from './callcenter/Callcenter.svelte';
let callcenter;
import Landpage from './callcenter/Landpage.svelte';
import {RTCOperator} from '../../lib/rtc/RTCOperator.js';
import * as cookie from 'cookie';

import CallButton from './callbutton/CallButtonOperator.svelte'
import BurgerMenu from './menu/BurgerMenu.svelte';
import VideoLocal from './Video.local.svelte';
import VideoRemote from './Video.remote.svelte';

import Download from './Download.svelte';
import AudioLocal from './Audio.local.svelte';
import AudioRemote from './Audio.remote.svelte';

import RecordedVideo from './RecordedVideo.svelte';

let window = globalThis;

export let data_dict;// +page.js ->
let dict = data_dict;
setContext('dict', dict);

// console.log(globalThis.location)

let url  = '', isPaid = false;

export let tarif;

if(tarif && tarif.paid){
        isPaid = new Date(tarif.paid)>Date.now();
}

let selected;
let call_cnt, status, inter;
let video_button_display = false;
let edited_display = false;

import {statust} from '$lib/js/stores.js'
$:statust.set(status);

import {editable} from '$lib/js/stores.js'
const us_edit = editable.subscribe((data) => {
        edited_display = data;
});

export let operator = {}

import {langs} from '$lib/js/stores.js'
operator.lang = $langs;
let lang = $langs;

import {SignalingChannel}  from '../../lib/rtc/signalingChannel.js'

import {msg_1} from '$lib/js/stores.js'
const us_msg_1 = msg_1.subscribe((data) => {
        console.log();
        // if(window.rtc .&& window.rtc .OnMessage)
        //         window.rtc .OnMessage(data);
        if(data)
                OnMessage(data);
});


import {dc_msg} from '../../lib/rtc/DataChannelOperator.js'
const us_dcmsg = dc_msg.subscribe((data) => {
        if(data)
                OnMessage(data);
});


import {posterst} from '$lib/js/stores.js'
let container;
let us_post = '';
let host = {};

import {pswd} from '$lib/js/stores.js'
let psw = operator.psw;
pswd.set(psw);

onMount(async () => {  

        url = new URL(window.location.href);

        // host  = (await (await fetch('https://nedol.ru/assets/host.json')).json());
        host  = (await (await fetch('https://nedol.ru/kolmit/host.json')).json());

        let sch = new SignalingChannel(host);    

        us_post = posterst.subscribe((child) => {
        if(container && child)
                container.appendChild(child);      
        });
});


import {signal} from '$lib/js/stores.js'
const us_signal = signal.subscribe((signalch) => {
        if(signalch){
                window.rtc = new RTCOperator("operator", operator, signalch);
                initRTC(signalch);  
        };
});

onDestroy(us_signal,us_msg_1,us_dcmsg,us_edit);

let progress ={
        display:'block',
        value:0
}

let local = {
        video:{
                display:'none',
                srcObject : '',
                poster:''
        },
        audio:{
                paused:true,
                src : ''  
        }
}

let  remote = {
        text:{
                display:'none',
                msg :'You have a call from:',
                name:'',
                email:''
        },
        video:{
                display:'none',
                srcObject : '',
                poster:''
        },
        audio:{
                muted:true,
                srcObject : ''
        }
}

let profile = {
        display:'none'
}



function onTransFile(params) {
        let event =  new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window,
        });
        document.getElementById('files').dispatchEvent(event);
}

$:if(selected)
switch(selected){

        case 1:          
                break;
        case 2:
                edited_display = true;
                break;
   
        case 10:

                break;

        }


setContext('operator',{getOperator:()=>this});

const SendToComponent = OnMessage;


function OnSelected(ev){        
        langs.set(ev.target.attributes[2].nodeValue);
        let kolmit = JSON.parse(cookie.parse(document.cookie)['kolmit'])
        kolmit['lang'] = ev.target.attributes[2].nodeValue;
        document.cookie = 'kolmit='+JSON.stringify({session:kolmit.session,email:kolmit.email,abonent:kolmit.abonent,psw:kolmit.psw,lang:ev.target.attributes[2].nodeValue})
}
        
async function initRTC(){

        // window.rtc ..set(window.rtc .;
        //window.rtc .type = "operator";

        window.rtc .PlayCallCnt = ()=>{    
                        
                call_cnt = 10;

                local.audio.paused = false;

                inter = setInterval(function () {
                        call_cnt--;

                        if (call_cnt === 0) {
                                clearInterval(inter);
                                local.audio.paused = true;
                        }

                },2000);
        }
        // window.rtc .SendToComponent = OnMessage; 
        window.rtc .GetRemoteAudio =()=>{
                return remote.audio.srcObject;
        }  
        window.rtc .SetRemoteAudio = (src)=>{
                if(src)
                        remote.audio.srcObject = src;
        }
        window.rtc .GetRemoteVideo =()=>{
                return remote.video.srcObject;
        }  
        window.rtc .SetLocalVideo = (src)=>{
                if(src)
                        local.video.srcObject = src; 
        }

        window.rtc .SetRemoteVideo = (src)=>{
                if(status==='talk'){
                        remote.video.poster = ''
                        remote.video.srcObject = src;
                        remote.video.display = 'block';
                        local.audio.paused = true;
                }
        }             
}; 


function OnLongPress(){
        select.display = true
}


function OnClickCallButton(){
try {
        // Fix up for prefixing
        if (!window.AudioContext) {
                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                let audioCtx = new AudioContext();
                window.rtc .localSoundSrc = audioCtx.createMediaElementSource(window.user.localSound);
                window.rtc .localSoundSrc.connect(audioCtx.destination);
        }
}
catch (ex) {
        log('Web Audio API is not supported in this browser');
}

        console.log();

        switch(status){

        case'inactive':
                window.rtc .Offer();
                status='active'
                break;

        case 'active':  
                status = 'inactive';
                window.rtc .OnInactive();              
        
                break;
        case 'call':
                status = 'talk'
                clearInterval(inter);
                local.audio.paused = true;
                remote.audio.muted = false;
                window.rtc .OnTalk();
                video_button_display = true;
                remote.text.display = 'block';
                const event = new Event('talk');
                document.getElementsByTagName('body')[0].dispatchEvent(event);
                break;
        case 'talk':          
                window.rtc .OnInactive();  
                remote.audio.muted = true;
                local.video.display = 'none';
                video_button_display = false;
                remote.video.display = 'none';
                remote.video.srcObject = '';
                remote.video.poster = '';  
                remote.text.display = 'none';
                remote.text.name = '';
                remote.text.email = '';  
                status='inactive';
                // local.video.poster = UserSvg;    
                break;
        case 'muted':
                status = 'inactive'

                local.video.srcObject = '';
                remote.audio.muted = true;
                remote.video.display = 'none';
                remote.video.srcObject = '';
                remote.video.poster = '';
                remote.text.display = 'none';
                // local.video.poster = UserSvg;
                window.rtc .OnInactive();  
                break;  
        default:
                return;
        }
}

function openProfile(id) {
        profile.display = 'block';
}


function OnClickVideoButton(){

        status = 'talk';
        local.audio.paused = true;
        local.video.display = 'block';  

        if(window.rtc .DC.dc.readyState === 'open') {
                window.rtc .GetUserMedia({audio:1,video:1}, function () {
                        window.rtc .SendVideoOffer(window.rtc .main_pc);
                });
        }
}

function OnMessage(data, resolve) {

        if (data.func === 'mute') {
                local.audio.paused = true;
                remote.audio.muted = true;
                video_button_display = false;
                local.video.display = 'none';
                local.video.srcObject = '';
                // local.video.display = 'block';
                remote.video.srcObject = '';
                remote.video.poster = '';
                remote.video.display = 'none'
                remote.text.name = '';
                remote.text.email = '';
                remote.text.display = 'none';
                 // local.video.poster = UserSvg;
                window.rtc .OnInactive();
                if(status==='talk'){
                        status ='inactive';
                        // window.rtc .OnInactive();
                }else if(status==='call'){
                        status='inactive';
                        window.rtc .OnMute();
                        // callcenter.GetUsers();
                        OnClickCallButton();
                        
                }
                if(resolve)
                        resolve();
        }

        if (data.call || data.func === 'call') {
                status ='call';

                window.rtc .OnCall();

                remote.text.display = 'block';

                if(data.profile) {
                        let profile = JSON.parse(data.profile)
                        let avatar = profile.src;
                        remote.video.poster = avatar;
                        if(avatar)
                                remote.video.display = 'block';
                      
                        remote.text.name = profile.name;
                        remote.text.email = profile.email;
                }
        }


        if (data.desc) {
        // $('.callObject').css('cb_display', 'block');
                //status ='call';
        }

        if (data.camera) {
                local.video.src =  that.localStream;
        }

        if(data.status ==='wait'){
                remote.text.display ='block',
                remote.text.msg = 'You have a waiting call'
        }        
}

</script>






