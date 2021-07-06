const UnitParser = require("../util/UnitParser.js");

class Time {
    static units = ['d', 'h', 'm', 's'];
    constructor(string) {
        this.day = 0;
        this.hour = 0;
        this.min = 0;
        this.sec = 0;
        this.initTime(string);
    }

    initTime(string) {
        if (string) {
            const unit_value = UnitParser(string, Time.units);
            this.day = unit_value.d;
            this.hour = unit_value.h;
            this.min = unit_value.m;
            this.sec = unit_value.s;
        }
    }

    set(unit, value) {
        if (unit === 'd')
            this.day = value;
        if (unit === 'h')
            this.hour = value;
        if (unit === 'm')
            this.min = value;
        if (unit === 's')
            this.sec = value;
    }

    toString() {
        const daystr = this.day ? this.day + 'm' : "";
        const hourstr = this.hour ? this.hour + 'h' : "";
        const minstr = this.min ? this.min + 'm' : "";
        const secstr = this.sec ? this.sec + 's' : "'";
        return daystr + hourstr + minstr + secstr;
    }
}

module.exports = Time;