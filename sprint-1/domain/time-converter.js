class TimeConverter {
  constructor(input) {
    this.data = input.split(" ")[0];
    this.ans_type = input.split(" ")[1];
    this.n_data = [0,0,0,0]  // day, hour, minute, second
    this.n_type = [24,60,60,1] // day_toHour, hour_toMinute, minute_toSecond, seocnd_toSecond
    let error=true;
  }

  isError(){
    // 서버 포멧하고 와서 추가할 예정
  }
  isType(){
    let type = ["d","h","m","s"]
    for(let i=0;i<type.length;i++){
      if (this.data.split("").includes(type[i])){
        this.n_data[i] = parseInt(this.data.split(type[i])[0]);
        this.data = this.data.split(type[i])[1];
      }
    }
  }
  
  cvt(){ 
    let type = ["s","m","h","d"]
    let cnt = type.indexOf(this.ans_type);// 0 toSecond, 1 toMinute, 2 toHour, 3 toDay

    let len = this.n_data.length;
    for(let i=0;i<len-cnt-1;i++){
      this.n_data[i+1] += this.n_data[i]*this.n_type[i];
      this.n_data[i]=0;
    }
    if (cnt!=0){
      for(let i=len-1;i>cnt-1;i--){
        this.n_data[i-1] += parseInt(this.n_data[i]/this.n_type[i-1]);
        this.n_data[i] = this.n_data[i]%this.n_type[i-1];
      }
    }
  }
}

module.exports = TimeConverter;


