const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string] // tuple type
} = {
  name: "Jhon Doe",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

person.role.push('admin')
// person.role[1] = 1 // cant assign new value with structure like this
console.log(person.role)