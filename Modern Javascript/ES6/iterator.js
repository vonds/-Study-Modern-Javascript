const nameIterator = names => {
    let nextIndex = 0
    return {
        next: () => {
            return nextIndex < names.length ?
                { value: names[nextIndex++], done: false } :
                { done: true }
        }
    }
}

function* createIds() {
    let index = 1
    while (true) {
        yield index++
    }
}


const ids = createIds()
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)

const namesArr = ['Jack', 'Jill', 'John']
const names = nameIterator(namesArr)

console.log(names.next().value)
console.log(names.next().value)
console.log(names.next().value)
console.log(names.next())