class Department {
  // private id: string
  // private name: string

  protected employees: string[] = []

  // shorthand
  constructor(private readonly id: string, private name: string) {
    // this.id = id
    // this.name = name
  }

  describe(this: Department) {
    // this.id = 'd2'
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReport() {
    console.log(this.reports)
  }

  addEmployee (employee: string) {
    this.employees.push(employee)
  }
}

const it = new ITDepartment('d1', ['Billy'])
it.describe()

it.addEmployee('Max')
it.addEmployee('Jhon')

it.printEmployeeInformation()
console.log(it)

const accounting = new AccountingDepartment('d2', [])
accounting.addReport('Something went wrong ...')
accounting.printReport()

