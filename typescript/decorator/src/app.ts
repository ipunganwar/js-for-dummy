function Logger (logString: string) {
  return function (constructor: Function) {
    console.log(logString)
  console.log(constructor)
  }
}

function withTemplate (template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId)

    if (hookEl) {
      hookEl.innerHTML = template
    }
  }
}

@Logger('LOGGIN - PERSON')
@withTemplate('<h1>My person object</h1>', 'app')
class Person {
  name = 'Max'

  constructor () {
    console.log('creating Object person ...')
  }
}

const person = new Person()
console.log(person)
