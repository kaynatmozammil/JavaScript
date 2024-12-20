// Date and time 
// ++++++++++++++++++++++Theory++++++++++++++++++++++
// // Date : Date is an object in javascript. 
// // JavaScript stores dates as number of milliseconds since January 01, 1970
// const myDate = new Date();
// console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// // We can use various methods to convert this date into more readable value.
// console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
// console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
// console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

// console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
// console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
// console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z









let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof(myDate))

// let myCreatedDate = new Date(2024 , 0 ,23,5,9,98)
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2024-01-12")
let myCreatedDate = new Date("11-14-2024")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now() 
// console.log(myTimeStamp)

// console.log(myCreatedDate.getDate())

// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ""
})