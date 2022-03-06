class Log {
  #result = "";
  #resultOfConvertingToSeconds = 0;
  #timeUnits = ["d", "h", "m", "s"];
  #multiplyValues = [86400, 3600, 60, 1];

  constructor(converted, targetUnit) {
    this.converted = converted;
    this.targetUnit = targetUnit;
  }

  convertToSeconds() {
    for (let [index, unit] of this.#timeUnits.entries()) {
      this.makeResultOfConvertingToSeconds(index, unit);
    }
  }

  makeResultOfConvertingToSeconds(index, unit) {
    if (unit in this.converted) {
      this.#resultOfConvertingToSeconds += this.converted[unit] * this.#multiplyValues[index];
    }
  }

  convertToTargetUnit() {
    let targetIndex = this.#timeUnits.findIndex(value => value === this.targetUnit);
    this.makeAfterUnit(targetIndex);
  }

  makeAfterUnit(targetIdx) {
    let value;
    let rest;

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

  print() {
    this.convertToSeconds();
    this.converToTargetUnit();
    console.log(this.#result);
  }
}

module.exports = Log;
