class Log {
  #result;
  constructor(result) {
    this.#result = result;
  }

  print() {
    console.log(this.#result);
  }
}

module.exports = Log;
