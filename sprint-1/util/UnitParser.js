function unitParser(string, unitArray) {
    handleInputFormatError(string, unitArray);

    let unit_value = {};
    unitArray.forEach(unit => {
        let value = 0;
        if (string.includes(unit)) {
            value = parseInt(string.split(unit)[0]);
            string = string.split(unit)[1];
        }
        unit_value[unit] = value
    });

    return unit_value;
}

function handleInputFormatError(string, unitArray) {
    const charset = [...string]
    charset.forEach(c => {
        if (isNaN(c) && !unitArray.includes(c))
            throw new Error("허용하지 않는 단어가 존재합니다.");
    });
}
module.exports = unitParser;