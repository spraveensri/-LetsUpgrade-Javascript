//Question 1-Program to search for a particular character in a string

let str = "Javascript";
let index = str.indexOf("p");
console.log(index);

//Question 2-Program to convert minutes to seconds

let minutes = 60;
let seconds = minutes*60;
console.log(minutes+" minutes"+" to seconds is "+seconds);

//Question 3-Program to search for a element in a array of strings

let arr = ["Captain","Ironman","Thor","Hulk"];
let find = "Thor";
let ave = arr.filter(s => s.includes(find));
console.log(ave);

//Question 4-Program to display only elements containing 'a' in them from a array

let array = ["Captain","Ironman","Thor","Hulk","Antman","Spiderman"];
let search = 'a';
let aven = array.filter(n => n.includes(search));
console.log(aven);

//Question 5-Print an array in reverse order

let org=["BlackWidow","CaptainMarvel","Pepper","Scarlet","Wasp"];
let rev= org.reverse();
console.log(rev);