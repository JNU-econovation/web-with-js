class Log {
  static log(something, something2) {
    if (typeof something === Error)
      console.log(something.message);
    console.log(`${something}: ${something2}`);
  }
}

module.exports = Log;
