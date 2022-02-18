type Combine = number | string
type TypeConversion = 'as-number' | 'as-text'

function combine(
  input1: Combine,
  input2: Combine,
  resultConversion: TypeConversion
  ) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);


// WITH OBJECT
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

const u1: User = { name: 'Max', age: 30 };
greet(u1)
isOlder(u1, 20)
