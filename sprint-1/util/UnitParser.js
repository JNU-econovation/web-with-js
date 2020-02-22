function unitParser(string, unitArray) {
    // let unitArray = ['d', 'h', 'm', 's'];
    let unitIndex = new Map(), unit_value_map = new Map();
    unitArray.forEach(unit => {
        if (string.indexOf(unit) !== -1)
            unitIndex.set(unit, string.indexOf(unit))
    });

    let start = 0;
    for (let [key, value] of unitIndex) {
        unit_value_map.set(key, string.substring(start, value));
        start = value + 1;
    }

    handleInputFormatError(unit_value_map);
    return unit_value_map;
}

function handleInputFormatError(input_time) {
    if (input_time.size === 0)
        throw new Error("에러: 허용하지 않는 단어가 존재합니다.");
}
module.exports = unitParser;