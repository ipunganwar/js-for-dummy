class Department {
  // private id: string
  // private name: string

  private employees: string[] = []

  // shorthand
  constructor(private id: string, private name: string) {
    // this.id = id
    // this.name = name
  }

  describe(this: Department) {
    console.log('Department' + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('d1', 'Accounting')
accounting.describe()

accounting.addEmployee('Max')
accounting.addEmployee('Jhon')

accounting.printEmployeeInformation()
