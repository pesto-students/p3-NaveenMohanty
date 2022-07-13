function Person() {
  this.name = undefined
}

Person.prototype.initial = function (name) {
  this.name = name
}

function Teacher() {
  this.teach = function (subject) {
    return `${this.name} is now teaching ${subject}`
  }
}

// In heritance took place
Teacher.prototype = Person.prototype
// OR
// Object.setPrototypeOf(Teacher.prototype, Person.prototype)

let him = new Teacher()

him.initial('Naveen')
console.log(him.teach('Inheritance'))