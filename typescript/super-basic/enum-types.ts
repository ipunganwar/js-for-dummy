
enum ROLE { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'author'}

const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: any,
} = {
  name: "jhon doe",
  age: 30,
  hobbies: ['running', 'eat'],
  role: ROLE.ADMIN
}

if (person.role === ROLE.ADMIN) {
  console.log('is Admin')
}
