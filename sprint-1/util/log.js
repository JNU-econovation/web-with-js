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
    for (let [index, key] of this.#timeKeys.entries()) {
      if (this.convertToAfterUnit === key) {
        this.#result += this.#totalSeconds / this.#multiplyValues[index];
        this.#result += key;
        this.#totalSeconds % this.#multiplyValues[index];
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
