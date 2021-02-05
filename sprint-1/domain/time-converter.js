const D_to_S = 86400;
const H_to_s = 3600;
const M_to_s = 60;
const MaptoString = require("../util/MaptoString.js");

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

    return MaptoString(this.output_time);
  }

  toToTalSecond(input_time) {
    return input_time.s + (input_time.m * M_to_s) + (input_time.h * H_to_s) + (input_time.d * D_to_S);
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
      throw new Error("입력이 올바르지 않습니다.");
  }

}

module.exports = TimeConverter;
