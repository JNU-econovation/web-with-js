class Parser {
  constructor() {
    this.baseUnit = "";
    this.convertTargetTime = "";
  }

  checkUsingVaildWord(command) {
    const vaildCharList = ["s", "d", "m", "h", " "];
    for (let i = 0; i < 10; i++) {
      vaildCharList.push(i + "");
    }

    try {
      for (const element of command) {
        if (vaildCharList.includes(element) === false) {
          throw new Error("에러: 허용하지 않는 단어가 존재합니다.");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  checkReliableInput(command) {
    try {
    } catch (error) {}
  }

  parseCommand(command) {
    this.checkReliableInput(command);
  }

  parseBaseUnit() {}

  parseConvertTargetTime() {}
}

module.exports = Parser;
