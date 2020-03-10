const unit_array = ['d', 'h', 'm', 's'];

function unitParser(string , unit_array) {
  let unit_index = new Map();
  let unit_value= new Map();
  //변환 전 단위와 단위의 위치를 잘라내보자
  unit_array.forEach(unit => {
      if (string.indexOf(unit) !== -1)
          unit_index.set(unit, string.indexOf(unit));
  });

  let i = 0;
  for (let [unit, ind_unit] of unit_index) {
      unit_value.set(unit, string.substring(i, ind_unit));
      i = ind_unit + 1;
  }
  return unit_value;
}


function toString(map) {
  let str = "";
  for (let [key, value] of map) {
      if (value != 0) {str += `${value}${key}`};
  }
  return str;
}

class Time {
  constructor(string) {
      this.input_time_string = string;
      this.setTime();
  }

  setTime() {
      this.time = unitParser(this.input_time_string, unit_array);

      // sprint1 문제 해결에는 필요 없지만 Time클래스라면 객체명.time.h, 객체명.time.m 등 말고 객체명.hour, 객체명.min 등으로 바로 쓸 수 있는 필드가 있으면 좋겠다는 생각에 추가해봄, syntax 확인 필요
      this.day = this.time[0];
      this.hour = this.time[1];
      this.min = this.time[2];
      this.sec = this.time[3];
  }
   String() {
      return toString(this.time);
  }
}
module.exports = Time ; 