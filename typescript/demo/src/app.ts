// Validation
interface Validation {
  value: string | number,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  min?: number,
  max?: number,
}

function validate (validateInput: Validation) {
  let isValid = true

  if (validateInput.required) {
    isValid = isValid && validateInput.value.toString().trim().length !== 0
  }

  if (validateInput.minLength != null && typeof validateInput.value === 'string') {
    isValid = isValid && validateInput.value.length > validateInput.minLength
  }

  if (validateInput.maxLength != null && typeof validateInput.value === 'string') {
    isValid = isValid && validateInput.value.length < validateInput.maxLength
  }

  if (validateInput.min != null && typeof validateInput.value === 'number') {
    isValid = isValid && validateInput.value > validateInput.min
  }

  if (validateInput.max != null && typeof validateInput.value === 'number') {
    isValid = isValid && validateInput.value < validateInput.max
  }

  return isValid
}

// autobind decorator
function autobind (
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    }
  }
  return adjDescriptor
}

// Project Input Class
class ProjectInput {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLFormElement
  titleInputElement: HTMLInputElement
  descriptionInputElement: HTMLInputElement
  peopleInputElement: HTMLInputElement

  constructor () {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement
    this.hostElement = document.getElementById('app')! as HTMLDivElement

    // https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode
    const importedNode = document.importNode(this.templateElement.content, true)
    this.element = importedNode.firstElementChild as HTMLFormElement
    this.element.id = 'user-input'

    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement

    this.configure()
    this.attach()
  }

  private clearInput () {
    this.titleInputElement.value = ''
    this.descriptionInputElement.value = ''
    this.peopleInputElement.value = ''
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value
    const enteredDescription = this.descriptionInputElement.value
    const enteredPeople = this.peopleInputElement.value

    if (
      !validate({ value: enteredTitle, required: true, minLength: 5 }) ||
      !validate({ value: enteredDescription, required: true, minLength: 5 }) ||
      !validate({ value: enteredDescription, required: true, min: 1, max: 5 })
    ) {
      alert('Invalid input, please try again later')
      return
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople]
    }
  }

  @autobind
  private submitHandler (event: Event) {
    event.preventDefault()
    const userInput = this.gatherUserInput()
    
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput
      console.log(title, desc, people)
      this.clearInput()
    }
  }

  private configure () {
    this.element.addEventListener('submit', this.submitHandler)
  }

  private attach () {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
    this.hostElement.insertAdjacentElement('afterbegin', this.element)
  }
}

const prjInput = new ProjectInput()