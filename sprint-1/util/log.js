class Log {
  constructor() {}

  err(error) {
    console.log(`${error.name}: ${error.message}`);
  }

  time(time) {}
}

module.exports = Log;
