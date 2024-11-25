
const accountId = 12345
// Keyword 'const' is constant keyword it does not change if it declared once
let accountPassword = "@kkk123"
var accountMail = "asde@gmail.com"
/*Prefer not to use var
because of issue in block scope and Functional Scope
*/
accountCity = "Bhilwara"
let userName; 
//If we do not provide any value to the keyword then it is 'undefined to the complier




//accountId = 4546// is not allowed 
accountPassword = "Password@"
 accountMail = "1astec@gmail.com"
accountCity = "Udaipur" 

console.table([accountId,accountPassword,accountMail,accountCity,userName]);  
//'console.table' is used to create table in Nodejs 
