class TimeConverter {
  #result = {};

  constructor(beforeConvert) {
    this.beforeConvert = beforeConvert;
  }

  splitByUnit(unit) {
    let afterSplit = [];

    if (this.beforeConvert.indexOf(unit) != -1) {
      afterSplit = this.beforeConvert.split(unit);
      this.beforeConvert = afterSplit[1];
      this.#result[unit] = Number(afterSplit[0]);
    }
  }

  converter() {
    const timeKeys = ["d", "h", "m", "s"];

    for (let key of timeKeys) {
      this.splitByUnit(key);
    }
    return this.#result;
  }
}

module.exports = TimeConverter;
