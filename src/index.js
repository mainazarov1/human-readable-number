module.exports = function toReadable(number) {
    let ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number === 0) {
        return "zero";
    }
    if (number < 20) {
        return less20(number);
    }
    if (number >= 20 && number < 100) {
        return less100(number);
    }
    if (number >= 100 && number < 1000) {
        return less1000(number);
    }
    function less20(number) {
        return ones[+number];
    }
    function less100(number) {
        if (number < 20) {
            return less20(number);
        } else {
            return (tens[String(number)[0]] + " " + ones[number % 10]).trim();
        }
    }
    function less1000(number) {
        return (
            ones[String(number)[0]] +
            " hundred " +
            less100(String(number).slice(1))
        ).trim();
    }
};
