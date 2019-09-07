function Person(name, dob) {
    this.name = name
    // this.age = age
    this.birthday = new Date(dob)
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

const vonds = new Person('Vonds', '9/21/87')
const john = new Person('John', '04/15/1997')
console.log(vonds)
console.log(vonds.calculateAge())
console.log(john)
console.log(john.calculateAge())