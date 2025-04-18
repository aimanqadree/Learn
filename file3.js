//Q1: creat a varaible of type string and try to add a number to it.
let a = "Aiman"
let b = 4
console.log(a+b)

//Q2: Use typeof operator to find the datatype of the string in last question
let c= "Aiman"
let d = 4
console.log(c+d)
console.log(typeof (c+d))

//Q3: Create a const object in javascript. Can you change it to hold a number later?
const item = {
    Name: "Aiman",
    Age: 21,
    Gender: "Female",
    Height: 5.5
}
// item = a         //no we cant change a number later
// console.log(item)

//Q4: Try to add a new key to  the const object in Q3 were you able to do it.
const items = {
    Name: "Aiman",
    Age: 21,
    Gender: "Female",
    Height: 5.5
}
// items = {}        //  This would throw an error
// items = 45          //  This would also throw an error
items ["Friend"] = "Shubham"
console.log(items)

//Q5: Write a J.S Program to create a word-meaning dictionery of 5 words.
const dict ={
Ephemeral:	"Lasting for a very short time; fleeting",
Lucid:	"Expressed clearly; easy to understand",
Benevolent:	"Kind and well-meaning",
Melancholy:	"A deep, long-lasting sadness",
Meticulous:	"Showing great attention to detail; very careful and precise"
}
console.log(dict.Lucid)



