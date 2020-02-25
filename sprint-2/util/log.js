class Log {
  static log(something) {
    console.log(`${something.command}: ${something.run()}`);
  }
}

module.exports = Log;
