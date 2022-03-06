const TIME_UNIT = ["d", "h", "m", "s"];
const DIGIT = { HOUR: 24, MIN: 60, SEC: 60 };

const DAY_TO = {
  DAY: 1,
  HOUR: DIGIT.HOUR,
  MIN: DIGIT.HOUR * DIGIT.MIN,
  SEC: DIGIT.HOUR * DIGIT.MIN * DIGIT.SEC,
};
const HOUR_TO = {
  HOUR: 1,
  MIN: DIGIT.MIN,
  SEC: DIGIT.MIN * DIGIT.SEC,
};
const MIN_TO = {
  MIN: 1,
  SEC: DIGIT.SEC,
};

const TIME_TO_FORMAT = { day: "d", hour: "h", minute: "m", second: "s" };
const FORMAT_TO_TIME = { d: "day", h: "hour", m: "minute", s: "second" };

const DELIMITER = " ";

const ERR_MSG = {
  UNCOMPLETE_INPUT: "입력이 올바르지 않습니다.",
  INVALID_UNIT: "변환 단위가 기준 시간보다 큽니다.",
  INVALID_VALUE: "허용되지 않는 단어가 존재합니다.",
};

module.exports = {
  TIME_UNIT,
  DIGIT,
  DAY_TO,
  HOUR_TO,
  MIN_TO,
  TIME_TO_FORMAT,
  FORMAT_TO_TIME,
  DELIMITER,
  ERR_MSG,
};
