function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB)
// }

const mergedObj = merge({name: 'Max', hobbies: ['Sport']}, {age: 30})
console.log(mergedObj.hobbies)