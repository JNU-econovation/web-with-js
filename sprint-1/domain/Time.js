const MaptoString = require("../util/MaptoString.js");
const UnitParser = require("../util/UnitParser.js");

const units = ['d', 'h', 'm', 's'];

class Time {
    constructor(String) {
        this.input_time_string = String;
        this.setTime();
    }

    setTime() {
        this.time = UnitParser(this.input_time_string, units);

        // sprint1 문제 해결에는 필요 없지만 Time클래스라면 객체명.time.h, 객체명.time.m 등 말고 객체명.hour, 객체명.min 등으로 바로 쓸 수 있는 필드가 있으면 좋겠다는 생각에 추가해봄, syntax 확인 필요
        this.day = this.time[0];
        this.hour = this.time[1];
        this.min = this.time[2];
        this.sec = this.time[3];
    }

    toString() {
        return MaptoString(this.time);
    }
}

module.exports = Time;