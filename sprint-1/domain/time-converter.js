class TimeConverter {
  #result = {};

  constructor(beforeConvertTime) {
    this.beforeConvertTime = beforeConvertTime;
  }

  splitByUnit(unit) {
    let afterSplit = [];

    if (this.beforeConvertTime.indexOf(unit) != -1) {
      afterSplit = this.beforeConvertTime.split(unit);
      this.beforeConvertTime = afterSplit[1];
      this.#result[unit] = Number(afterSplit[0]);
    }
  }

  converter() {
    const timeUnits = ["d", "h", "m", "s"];

    for (let key of timeUnits) {
      this.splitByUnit(key);
    }
    return this.#result;
  }
}

module.exports = TimeConverter;
