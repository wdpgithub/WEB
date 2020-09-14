define(function () {
    var PI = 3.1415926;

    function multiple(num1, num2) {
        return num1 * num2
    }

    function square(n) {
        return Math.pow(n,2)
    }
    return {
        PI: PI,
        multiple: multiple,
        square: square
    }
})