class Employee {
    constructor (firstName, lastName) {
        this.firstName = firstName ;
        this.lastName = lastName;
        this.fullName = firstName +" "+ lastName
        this.email = firstName +"."+ lastName + "@company.com";
    }
   
}

const emp1 = new Employee("John", "Smith")
console.log(emp1.fullName)

const emp2 = new Employee("Mary",  "Sue")
console.log(emp2.email.toLowerCase()) // "mary.sue@company.com"

const emp3 = new Employee("Antony", "Walker")
console.log(emp3.firstName) // "Antony"