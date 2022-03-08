class TimeConverter {
  #objectSplitTime = {};
  #result = "";
  #resultOfConvertingToSeconds = 0;
  #timeUnits = ["d", "h", "m", "s"];
  #multiplyValues = [86400, 3600, 60, 1];

  constructor(beforeConvertTime, afterConvertTime) {
    this.beforeConvertTime = beforeConvertTime;
    this.afterConvertTime = afterConvertTime;
  }

  #splitInputTimeByUnit(unit) {
    let afterSplit = [];

    if (this.beforeConvertTime.indexOf(unit) != -1) {
      afterSplit = this.beforeConvertTime.split(unit);
      this.beforeConvertTime = afterSplit[1];
      this.#objectSplitTime[unit] = Number(afterSplit[0]);
    }
  }

  splitInputTimeByAllUnit() {
    for (let key of this.#timeUnits) {
      this.#splitInputTimeByUnit(key);
    }
  }

  convertToSeconds() {
    for (let [index, unit] of this.#timeUnits.entries()) {
      this.#makeResultOfConvertingToSeconds(index, unit);
    }
  }

  #makeResultOfConvertingToSeconds(index, unit) {
    if (unit in this.#objectSplitTime) {
      this.#resultOfConvertingToSeconds += this.#objectSplitTime[unit] * this.#multiplyValues[index];
    }
  }

  convertToTargetUnit() {
    let targetIndex = this.#timeUnits.findIndex(value => value === this.afterConvertTime);
    this.#makeAfterUnit(targetIndex);
  }

  #makeAfterUnit(targetIdx) {
    let value;
    let rest;

    if(targetIdx != -1) {
      for (let idx = targetIdx; idx < 4; idx++) {
        value = parseInt(this.#resultOfConvertingToSeconds / this.#multiplyValues[idx]);
        rest = this.#resultOfConvertingToSeconds - (value * this.#multiplyValues[idx]);
        this.#result += value + this.#timeUnits[idx];
        this.#resultOfConvertingToSeconds = rest
        if (!rest) {
          break
        }
      }
    }
  }

  getResult() {
    return this.#result;
  }
}

module.exports = TimeConverter;
