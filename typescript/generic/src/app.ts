function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB)
// }

const mergedObj = merge({name: 'Max', hobbies: ['Sport']}, {age: 30})
console.log(mergedObj)


interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy> (element: T): [T, string] {
  let descriptionText = 'Got no value.'

  if (element.length > 0) {
    descriptionText = 'Got ' + element.length + ' elements'
  }
  return [element, descriptionText]
}

console.log(countAndDescribe('Hi there !'))


function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U) {
  return 'Value ' + obj[key]
}
extractAndConvert({name: 'Max'}, 'name')


class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem (item: T) {
    this.data.push(item)
  }

  removeItem (item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems () {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Max')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

// const objStorage = new DataStorage<object>()
// objStorage.addItem({ name: 'Max' })
// objStorage.addItem({ name: 'Manu' })
// objStorage.removeItem({ name: 'Max' })
// console.log(objStorage.getItems())


// UTILITY TYPES
// --- Partial
interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal (title: string, description: string, date: Date)
: CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}

function createCourseGoal2 (fields: Partial<CourseGoal>) {
  return { ...fields }
}

console.log('Partial utility ', createCourseGoal2({ description: 'coba aja masuk sini'}))

// -- Required
interface Props {
  name: string
  age: number
  desc: string
}

const obj: Partial<Props> = { name: 'Max', age: 30}
const obj2: Required<Props> = { name: 'Min', age: 20, desc: 'Humamn'}