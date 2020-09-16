let info = [ {
    name: "Arun",
    age: 23,
    country: "India",
    hobbies: ["playing football", "Watching Tv"]
 },
 {
     name: "Jack",
    age: 21,
    country: "America",
    hobbies: ["playing football", "video game"]
 },
 {
     name: "Kumar",
    age: 32,
    country: "India",
    hobbies: ["Drawing", "reading"]},
 ];
    
console.log("Obect with age less than 30 here");
function displaybelow30() {
    for(let i=0;i<info.length;i++){
        if(info[i].age<30) 
        {
            console.log(info[i]);
        }
    }
}
displaybelow30();

console.log("object with country india");

function countryIndia(){

    for(let i=0;i<info.length;i++) {
        if(info[i].country.search("India") == 0)
        {
            console.log(info[i]);
        }
    }
}
countryIndia();