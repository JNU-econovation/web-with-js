const isSplittableBy = (pattern, value) => {
  if (typeof value !== "string") {
    return false;
  }
  if (value.split(pattern).length <= 1) {
    return false;
  }
  return true;
};

module.exports = {
  isSplittableBy,
};
