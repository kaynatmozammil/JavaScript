const name = "kaynat"
const repoCount = 20

// console.log(name+repoCount+" Value")

console.log(`Hellow my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('kay-nat')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newStirng =  gameName.substring(0,4)
console.log(newStirng)

const anotherSrting = gameName.slice(-8,4)
console.log(anotherSrting)

const newStirngOne  = "    kaynat     "
console.log(newStirngOne)
console.log(newStirngOne.trim())

const url = "https://hitesh.com/kaynat%20mozammil"

console.log(url.replace('%20','-'))

console.log(url.includes('np'))

console.log(gameName.split('-'))
