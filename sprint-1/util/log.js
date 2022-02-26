class Log {
  #result = "";
  #totalSeconds = 0;
  #timeKeys = ["d", "h", "m", "s"];
  #multiplyValues = [86400, 3600, 60, 1];

  constructor(converted, afterConvertUnit) {
    this.converted = converted;
    this.afterConvertUnit = afterConvertUnit;
  }

  convertToSeconds() {
    for (let [index, key] of this.#timeKeys.entries()) {
      if (key in this.converted) {
        this.#totalSeconds += this.converted[key] * this.#multiplyValues[index];
      }
    }
  }

  convertToAfterUnit() {
    let targetIndex = this.#timeKeys.findIndex(value => value === this.afterConvertUnit);
    this.makeAfterUnit(targetIndex);
  }

  makeAfterUnit(targetIdx) {
    let value;
    let rest;

    for (let idx = targetIdx; idx < 4; idx++) {
      value = parseInt(this.#totalSeconds / this.#multiplyValues[idx]);
      rest = this.#totalSeconds - (value * this.#multiplyValues[idx]);
      this.#result += value + this.#timeKeys[idx];
      this.#totalSeconds = rest
      if (!rest) {
        break
      }
    }
  }

  print() {
    this.convertToSeconds();
    this.convertToAfterUnit();
    console.log(this.#result);
  }
}

module.exports = Log;
