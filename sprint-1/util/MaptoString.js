function toString(map) {
    let str = "";
    for (let [key, value] of map) {
        if (value != 0) str += `${value}${key}`;
    }
    return str;
}

module.exports = toString;