function add(n1, n2, showResult, phrase) {
    if (!showResult)
        return 0;
    var result = n1 + n2;
    return phrase + result;
}
var number1 = 2;
var number2 = 5;
var printResult = true;
var resultPhrase = 'Result is ';
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
