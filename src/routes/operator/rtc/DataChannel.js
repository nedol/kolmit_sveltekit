
export  class DataChannel {
    constructor(rtc,pc){
        this.rtc = rtc;
        this.pc = pc;
        this.call_num = 3;
        this.forward;
    }

    CreateDC(){
        this.dc = pc.con.createDataChannel(pc.pc_key+" data channel");
    }

}
