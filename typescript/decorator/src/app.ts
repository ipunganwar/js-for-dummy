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

// --
// PROPERTY DECORATOR 
function Log (target: any, propertyName: string | Symbol) {
  console.log('Property decorator!')
  console.log(target)
  console.log(propertyName)
}

// ACCESSOR DECORATOR 
function Log2 (target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// METHOD DECORATOR 
function Log3 (target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// PARAMETER DECORATOR 
function Log4 (target: any, name: string | Symbol, parameterIndex: number) {
  console.log('Parameter decorator!')
  console.log(target)
  console.log(name)
  console.log(parameterIndex)
}
class Product {
  @Log
  title: string
  @Log
  private _price: number

  @Log2
  set price (val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('invalid price - should be positive')
    }
  }

  constructor (t: string, p: number) {
    this.title = t
    this._price = p
  }

  @Log3
  getPriceWithTax (@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}