class Log {
  static timelog(Time) {
    console.log(`결과: "${Time.toString()}"`)
  }

  static err(message) {
    console.log(`에러: ${message}`)
  }
}

module.exports = Log;
