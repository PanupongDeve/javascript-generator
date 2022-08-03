//functions

function sayHi() {
    return 'hi'
    return 'world'
}


const result = sayHi();
// console.log(result)

function* sayHiGenerator() {
    yield 'hey'
    yield () => { console.log('555')}
    // statements
    // console.log('call in function')
    return 'hi'
}

const resultGenerator = sayHiGenerator();
// console.log(resultGenerator.next())
// console.log(resultGenerator.next())
// console.log(resultGenerator.next())


const resultGeneratorForOf = sayHiGenerator()

for(const iterator of resultGeneratorForOf) {
    // console.log(iterator)
}


function* newGenerator() {
    yield 'something'
    const final = yield 'give me value'
    console.log('final', final)
    return final
}

const newGeneratorIt = newGenerator()

console.log(newGeneratorIt.next())
console.log(newGeneratorIt.next())
console.log(newGeneratorIt.next())