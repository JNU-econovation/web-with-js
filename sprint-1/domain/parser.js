const ERROR_INVALID_WORD_MESSAGE = "에러: 허용하지 않는 단어가 존재합니다.";
const ERROR_INVALID_INPUT_MESSAGE = "에러 : 입력이 올바르지 않습니다.";

class Parser {
  constructor() {
    this.baseUnit = "";
    this.convertTargetTime = "";
  }

  checkUsingValidWord = (command) => {
    const validCharList = ["s", "d", "m", "h", " "];
    for (let i = 0; i < 10; i++) {
      validCharList.push(i + "");
    }

    try {
      for (const element of command) {
        if (validCharList.includes(element) === false) {
          throw new Error(ERROR_INVALID_WORD_MESSAGE);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  checkReliableInput = (command) => {
    try {
      const splitCommand = command.split();
      if (!this.isSplitCommandValid(splitCommand)) {
        throw new Error(ERROR_INVALID_INPUT_MESSAGE);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  isSplitCommandValid = (splitCommand) => {
    return !(splitCommand.length != 2 || splitCommand[1].length != 1);
  };

  parseCommand = (command) => {
    this.checkReliableInput(command);
    this.checkUsingValidWord(command);

    const splitCommand = command.split();
    this.convertTargetTime = splitCommand[0];
    this.baseUnit = splitCommand[1];
  };

  getConvertTargetTime = () => {};
}

module.exports = Parser;
