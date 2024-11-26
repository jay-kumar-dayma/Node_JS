/*Js is dynamically typed language. It is weakly typed language,
which means it allows implicit type conversion when an operation involves mismatch types, instead of throwing type errors.
there two types of data types are present.

(i) Primitive datatypes / call by value : They are build-in data type provides by all programming languages.
primitive datatype contain 7 types:-  
~ String : It is a datatype that stores textvalues assigned by using double (" ") or single (" ")quotes.
~ Number : The number datatype represents numeric values either floting or integer value.
~ Boolean : It is decisional value either it is True or False 
~ Null : Null is a special type value which only contains space not contain any value in it.
~ Undefiend : this datatype means that the variable is declared but not yet intialized with the value.
~ BigInt : It is used to operate and store big integer values.
~ Symbol : It is used as uniquly identifies the values.

(ii) Non Primitive datatype / call by reference : They can store collection of more values or complex entities.
It has 3Types :-
~ Array : An array can hold multiple values in a single name.
~ Object : It is used to store key-value pair.
~ Functions : A Functions is a block of reusable code designed to perform some specific task. 
In javascript we can treated function as a variable

*/

const herosarry = ["Shaktiman", "SonPari", "Hatim"]
let myobj = {
    name : "jay Kumar",
    age : 21
}
const myfunction = function(){
    console.log("Hello jay");
    
}

/*
***********************************************************************************************************************************
Stack :- All primitive datatypes.
heap :- All non primitive datatypes.
*/
let myName = "Jay Kumar Dayma"

anotherName = "Jatin Dayma"

anotherName = myName  
console.log(anotherName);

console.log(myName);


let userOne = {
email : "jaykumardayma@gmail.com",
address : "patelNagar"
}

let userTwo = {
    email : "jaykhatik472@gmail.com",
    address: "Bapunagar"
}

userTwo = userOne

console.log(userTwo);
console.log(userTwo);

