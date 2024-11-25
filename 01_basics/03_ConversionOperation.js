let score = "42"
console.log(score);
console.log(typeof score);
let IntNumber = Number(score)
console.log(typeof IntNumber);
console.log(IntNumber);


let score1 = "42abc"
console.log(score1);

console.log(typeof score1);
let IntNumber1 = Number(score1)
console.log(typeof IntNumber1);
console.log(IntNumber1);

let score2 = null
console.log(score2);
console.log(typeof score2);
let IntNumber2 = Number(score2)
console.log(typeof IntNumber2);
console.log(IntNumber2);

let score3 = undefined
console.log(score3);
console.log(typeof score3);
let IntNumber3 = Number(score3)
console.log(typeof IntNumber3);
console.log(IntNumber3)

let score4 = false
console.log(score4);
console.log(typeof score4);
let IntNumber4 = Number(score4)
console.log(typeof IntNumber4);
console.log(IntNumber4)

let score5 = "Jay"
console.log(score5);
console.log(typeof score5);
let IntNumber5 = Number(score5)
console.log(typeof IntNumber5);
console.log(IntNumber5)

/*
"42" => 42
"42abc" => NaN
null => 0
undefined => undefined
False => 0
"Jay" => NaN
*/

let Logged = "1"
let  LoggedBool = Boolean(Logged)
console.log(LoggedBool);

/*
"1" => True
"0" => Falesh
"" => False
"Jay" => True
*/


