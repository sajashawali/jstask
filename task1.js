let firstName = "Saja";
let lastName = "Shawali";
let age = 22;

console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Age: " + age);

var name = "Saja";
console.log(name);
name = "Mohammad";
console.log(name);

let Age = 22;
console.log(Age);
Age = 23;
console.log(Age);


const country = "Syria";
console.log(country); //ما بنقدر نغير قيمتها رح يعطي Error

let str = "2002";
let num = Number(str);
console.log(num);

let Num = 2002;
let Str = String(Num) ;
console.log(Str);

let NUM = 0;
let bool = Boolean(NUM);
console.log(bool); // رح يطبع false


function calculateArea(radius) {
    const PI = Math.PI;
    let area = PI * radius * radius;
    return area;
}

let radius = 3 ;
let area = calculateArea(radius);
console.log(`  The area of a circle is : ${area}`);
