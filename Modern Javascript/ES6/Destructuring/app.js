// let a, b
// [a, b] = [100, 200]

// console.log(a)
// console.log(b)

// [a, b, ...rest] = [100, 200, 300, 400, 500]

// console.log(rest)

// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 })

// console.log(rest)

// Array Destructuring
// const people = ['John', 'Beth', 'Mike']

// const [person1, person2, person3] = people

// console.log(person1)
// console.log(person2)
// console.log(person3)

// Parse array return from funtion
// function getPeople() {
//     return ['John', 'Beth', 'Mike']
// }

// let person1, person2, person3
// [person1, person2, person3] = getPeople()

// console.log(person1)
// console.log(person2)
// console.log(person3)

// Object Destructuring
const person = {
    name: 'Mik Boi',
    age: 32,
    city: 'Miami',
    gender: 'Moo',
    sayHello: () => {
        return 'Hello'
    }
}

// Old Es5
// const name = person.name,
//     age = person.age,
//     city = person.city,

// New Es6
const { name, age, city, sayHello } = person

// 1
const { name, age, city, sayHello } = person

// 2
const { name, age, city, sayHello } = person

// 3

// 4

// 5

// 6

// 7

// 8

// 9

// 10

console.log(name)
console.log(age)
console.log(city)
console.log(sayHello())

