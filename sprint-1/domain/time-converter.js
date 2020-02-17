const D_to_S = 86400;
const H_to_s = 3600;
const M_to_s = 60;
class TimeConverter {
  constructor(input) {
    this.input_time_string = input.split(" ")[0];
    this.unit = input.split(" ")[1];
    this.output_time = new Map();
  }

  convertTime() {
    this.handleInputParamsNumberError();
    let unitIndex = this.unitParser();
    let total_sec = this.toToTalSecond(unitIndex);
    if (this.unit === 's') this.output_time.set('s', total_sec);
    if (this.unit === 'm') this.toMinute(total_sec);
    if (this.unit === 'h') this.toHour(total_sec);
    if (this.unit === 'd') this.toDay(total_sec);

    let output_time_string = this.timeToString(this.output_time);

    return output_time_string;
  }

  unitParser() {
    let unitArray = ['d', 'h', 'm', 's'];
    let unitIndex = new Map(), input_time = new Map();
    unitArray.forEach(unit => {
      if (this.input_time_string.indexOf(unit) !== -1)
        unitIndex.set(unit, this.input_time_string.indexOf(unit))
    });

    let start = 0;
    for (let [key, value] of unitIndex) {
      input_time.set(key, this.input_time_string.substring(start, value));
      start = value + 1;
    }

    this.handleInputFormatError(input_time);
    return input_time;
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

  timeToString(time) {
    let str = "";
    for (let [key, value] of time) {
      if (value != 0) str += `${value}${key}`;
    }

    return str;
  }

  handleInputParamsNumberError() {
    if (this.unit === undefined)
      throw new Error("에러: 입력이 올바르지 않습니다.");
  }

  handleInputFormatError(input_time) {
    if (input_time.size === 0)
      throw new Error("에러: 허용하지 않는 단어가 존재합니다.");
  }
}

module.exports = TimeConverter;
