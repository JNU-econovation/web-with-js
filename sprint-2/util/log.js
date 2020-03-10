class Log {
  static log(command, result, err) {
    if (err) {
      console.log(err.message);
    } else {
      console.log(`${command}:${result}`);
    }
  }
}

module.exports = Log;
