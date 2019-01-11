var list = [2, 4, 6, 7, 1, 1999, 23]

function getNum(number) {
    for (i = 0; i < number.length; i++) {
        list.push(number);
    }
}

module.exports = {
    sortNum: function () {
        return list.sort(function (a, b) { return a - b })
    },
    getNum: getNum
}

