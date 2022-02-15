function add(n1:number, n2:number, showResult: boolean, phrase: string) {
  if (!showResult) return 0
  let result = n1 + n2
  return phrase + result
}

let number1
number1 = 'a'
const number2 = 5
const printResult = true
const resultPhrase = 'Result is '

const result = add(number1, number2, printResult, resultPhrase)
console.log(result)