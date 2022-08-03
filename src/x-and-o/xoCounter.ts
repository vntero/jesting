function xo(str) {
    let x = 0,
        o = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") {
            x++;
        } else if (str[i].toLowerCase() === "o") {
            o++;
        }
    }
    return x === o;
}

module.exports = xo