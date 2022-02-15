const person: {
  name: string,
  age: number,
  hobbies: string[],
} = {
  name: "jhon doe",
  age: 30,
  hobbies: ['running', 'eat'],
}

for (const hobby of person.hobbies) {
  console.log(hobby)
}
