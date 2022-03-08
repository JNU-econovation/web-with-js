const isSplittableBy = (pattern, value) => {
  if (typeof value !== "string") {
    return false;
  }
  if (value.split(pattern).length <= 1) {
    return false;
  }

  return true;
};

const consistOfNumAnd = (chars, value) => {
  // 공백 제거
  for (const char of value.replace(/ /gi, "")) {
    if (!chars.includes(char) && isNaN(char)) {
      return false;
    }
  }

  return true;
};

module.exports = {
  isSplittableBy,
  consistOfNumAnd,
};
