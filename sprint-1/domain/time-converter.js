class TimeConverter {
  #result = {};

  constructor(beforeConvert) {
    this.beforeConvert = beforeConvert;
  }

  converter() {
    let afterSplit = [];
    const timeKeys = ["d", "h", "m", "s"];

    for (let key of timeKeys) {
      if (this.beforeConvert.indexOf(key) != -1) {
        afterSplit = this.beforeConvert.split(key);
        this.beforeConvert = afterSplit[1];
        this.#result[key] = Number(afterSplit[0]);
      }
    }
    return this.#result;
  }
}

module.exports = TimeConverter;
