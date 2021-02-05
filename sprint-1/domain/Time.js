const MaptoString = require("../util/MaptoString.js");
const UnitParser = require("../util/UnitParser.js");

class Time {
    static units = ['d', 'h', 'm', 's'];
    constructor(String) {
        this.input_time_string = String;
        this.initTime();
    }

    initTime() {
        this.time = UnitParser(this.input_time_string, Time.units);

        // sprint1 문제 해결에는 필요 없지만 Time클래스라면 객체명.time.h, 객체명.time.m 등 말고 객체명.hour, 객체명.min 등으로 바로 쓸 수 있는 필드가 있으면 좋겠다는 생각에 추가해봄, syntax 확인 필요
        this.day = this.time.d;
        this.hour = this.time.h;
        this.min = this.time.m;
        this.sec = this.time.s;
    }

    toString() {
        return MaptoString(this.time);
    }
}

module.exports = Time;