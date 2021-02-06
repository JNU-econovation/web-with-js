const Time = require("./Time");

const D_to_S = 86400;
const H_to_s = 3600;
const M_to_s = 60;

class TimeConverter {
  constructor(time, unit) {
    this.time = time;
    this.unit = unit;
    this.converted_time = new Time();
  }

  convertTime() {
    this.handleInputParamsNumberError();
    let total_sec = this.toToTalSecond(this.time);

    if (this.unit === 's') this.converted_time.set('s', total_sec);
    if (this.unit === 'm') this.toMinute(total_sec);
    if (this.unit === 'h') this.toHour(total_sec);
    if (this.unit === 'd') this.toDay(total_sec);

    return this.converted_time;
  }

  toToTalSecond(time) {
    return time.sec + (time.min * M_to_s) + (time.hour * H_to_s) + (time.day * D_to_S);
  }

  toMinute(total_sec) {
    let min = parseInt(total_sec / M_to_s);
    this.converted_time.set("m", min);
    this.converted_time.set("s", total_sec % M_to_s);
  }

  toHour(total_sec) {
    let hour = parseInt(total_sec / H_to_s);
    this.converted_time.set("h", hour);
    this.toMinute(total_sec % H_to_s);
  }

  toDay(total_sec) {
    let day = parseInt(total_sec / D_to_S);
    this.converted_time.set("d", day);
    this.toHour(total_sec % D_to_S);
  }

  handleInputParamsNumberError() {
    if (this.unit === undefined)
      throw new Error("입력이 올바르지 않습니다.");
  }

}

module.exports = TimeConverter;
