const ERROR_INVALID_WORD_MESSAGE = "에러: 허용하지 않는 단어가 존재합니다.";
const ERROR_INVALID_INPUT_MESSAGE = "에러 : 입력이 올바르지 않습니다.";
const STATUS_OK = true;
const STATUS_FAIL = false;

class Parser {
  constructor(command) {
    this.command = command;
    this.baseUnit = "";
    this.convertTargetTime = "";
  }

  // 유효한 단어를 사용하였는지 검증
  isUsingValidWord = (command) => {
    const validCharList = ["s", "d", "m", "h", " "];
    for (let i = 0; i < 10; i++) {
      validCharList.push(i + "");
    }

    try {
      for (let i = 0; i < command.length; i++) {
        if (validCharList.includes(command[i]) === false) {
          throw new Error(
            ERROR_INVALID_WORD_MESSAGE + `: not allow this word : ${command[i]}`
          );
        }
      }
      return STATUS_OK;
    } catch (error) {
      console.log(error.message);
      return STATUS_FAIL;
    }
  };

  // 입력이 유효한지 검증
  isValidInput = (command) => {
    try {
      const splitCommand = command.split(" ");
      if (!this.isSplitCommandValid(splitCommand)) {
        throw new Error(ERROR_INVALID_INPUT_MESSAGE);
      }
      return STATUS_OK;
    } catch (error) {
      console.log(error.message);
      return STATUS_FAIL;
    }
  };

  // 쪼갠 명령어가 유효한지 검증
  isSplitCommandValid = (splitCommand) => {
    return (
      splitCommand.length == 2 &&
      splitCommand[1].length == 1 &&
      !(true && this.filterInt(splitCommand[0])) &&
      !(true && this.filterInt(splitCommand[1]))
    );
  };

  //정수형인지 엄격한 검증
  filterInt = (value) => {
    if (/^[-+]?(\d+|Infinity)$/.test(value)) {
      return Number(value);
    } else {
      return NaN;
    }
  };

  // 입력 파싱
  parseCommand = () => {
    // 유효하지 않다면 Null 반환
    if (
      !(this.isValidInput(this.command) && this.isUsingValidWord(this.command))
    ) {
      return null;
    }

    const splitCommand = this.command.split(" ");
    this.convertTargetTime = splitCommand[0];
    this.baseUnit = splitCommand[1];

    return [this.baseUnit, this.convertTargetTime];
  };
}

module.exports = Parser;
