class Log {
  static log(something) {
    console.log(`결과 "${something}"`);
  }

  static err(message) {
    console.log(`에러: ${message}`)
  }
}

module.exports = Log;
