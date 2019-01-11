var list = [2, 4, 6, 7, 1, 110, 261]

function getNum(number) {
    list.push(number);
}

module.exports = {
    sortNum:
        list.sort(function (a, b) { return a - b }),

}

console.log(list);