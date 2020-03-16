
////////translating system
const D_to_S = 86400;
const H_to_s = 3600;
const M_to_s = 60;
class TimeConverter {
  constructor(Time, unit) {
    this.time = Time;
    this.unit = unit;
    this.output_time = new Map();
  }

  convertTime() {
    this.handleInputParamsNumberError();
    let total_sec = this.toToTalSecond(this.time);

    if (this.unit === 's') this.output_time.set('s', total_sec);
    if (this.unit === 'm') this.toMinute(total_sec);
    if (this.unit === 'h') this.toHour(total_sec);
    if (this.unit === 'd') this.toDay(total_sec);

    return toString(this.output_time);
  }

  toToTalSecond(input_time) {
    let total_sec = 0;
    for (let [key, value] of input_time) {
      if (key === 's') total_sec += value;
      if (key === 'm') total_sec += value * M_to_s;
      if (key === 'h') total_sec += value * H_to_s;
      if (key === 'd') total_sec += value * D_to_S;
    }

    return total_sec;
  }

  toMinute(total_sec) {
    let min = parseInt(total_sec / M_to_s);
    this.output_time.set("m", min);
    this.output_time.set("s", total_sec % M_to_s);
  }

  toHour(total_sec) {
    let hour = parseInt(total_sec / H_to_s);
    this.output_time.set("h", hour);
    this.toMinute(total_sec % H_to_s);
  }

  toDay(total_sec) {
    let day = parseInt(total_sec / D_to_S);
    this.output_time.set("d", day);
    this.toHour(total_sec % D_to_S);
  }

  handleInputParamsNumberError() {
    if (this.unit === undefined)
      throw new Error("에러: 입력이 올바르지 않습니다.");
  }

}

module.exports = TimeConverter;



// ///////////////////////////////////////
// let parsing = ()
// const unit = ['s','m','h','d'];
// let TimeConverting = (inputTime,convertUnit) => {
   
//    return result  
// }

// class TimeConverter {
//   constructor(inputTIme,convertUnit){
//     let result =TimeConverting(inputTime,convertUnit)
//     return result
//   }
// }

//단위변환기(시간)
