/**
 * Created by marina on 12.09.16.
 */
                                    // PROMPT    CONFIRM    ALERT
/*
var userName = prompt('What is your name?', name);
var isUserName = confirm('Is your name ' + userName + '?');
alert('Hello ' + userName + '!');
*/
/*
var year = prompt('Which year Mike was born?', '');
if (year != 2006) {
    alert('It\'s not correct!');
}
*//*
var year = prompt('Which year Mike was born?', '');
if (year == 2011) {
    alert('You are right!');
} else {
    alert('it\'s not correct!' );
}*/
                                    // IF    ELSE IF     ELSE
/*
var year = prompt('Which year Nina was born?');
if (year<2011) {
    alert('it\'s too early.. ');
} else if (year>2011) {
    alert('It\'s too late..');
} else {
    alert('You are right!');
}*/
/*var access;
var age = prompt('How old are you?', '');*/
/*if (age > 14) {
    access = true;
} else {
    access = false;
}
alert(access);*/
                                               // ' ? '
//  with " ? " it's could be done shoter:
/*
access = (age> 14) ? true : false;*/
/*var officialJsName = prompt('What is official JS name?', '');
if (officialJsName == 'ECMAScript') {
    alert('You are right!');
} else {
    alert('Don\'t you know? ECMAScript!');
}*/
/*
var inputedNumber = prompt('Please write your favorite number.', 0);
if (inputedNumber > 0) {
    alert(1);
} else if (inputedNumber < 0) {
    alert(-1)
} else {
    alert(0);
}*/
/*
var userName = prompt('Please write your login:', '');
 if (userName == 'Admin') {
    var parole = prompt('Please write your parole:', '');
     if (parole == "Dark Lord") {
         alert('You are welcome!');
     }
     else if (parole == null) {
        alert('Entry canceled');
     }
     else {
        alert('Parole is not correct!');
    }
}
 else if (userName == null) {
    alert('Entry canceled');
}

 else {
    alert('I don\'t know you.');
}
*/
/*
var login = prompt('Please write your login:', '');
if (login == null) {
    alert('Entry canceled');
}
else if (login != 'Admin') {
    alert('I don\'t know you.');
}
else if (login == 'Admin') {
    var parole = prompt('Please write your parole:', '');
    var message;
    if (parole == null) {
        message = 'Entry canceled';
    }
    else if (parole == "Dark Lord") {
        message = 'You are welcome!';
    }
    else {
        message = 'Parole is not correct!';
    }
    alert(message)
}*/
/*var a, b;
if (a + b < 4) {
    result = 'Small';
    } else {
    result = 'Large';
}*/  // The same with " ? " :

/*result = (a + b < 4) ?  'Small': 'Large';*/

/*var message;
var login;
if (login == 'Vasya') {
    message = 'Hello!';
} else if (login == 'Director') {
    message = 'God afternoon';
} else if (login =='') {
    message = 'No login';
} else {
    message ='';
}*/
/*var login;
var message = (login == 'Vasya') ? 'Hello!':
    (login == 'Director') ? 'God afternoon':
    (login =='') ? 'No login':
    '';*/
/*
                                              //  && ||
var hour = 12 ;
isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {alert( 'Not working!!');}*/
/*var age = 15;
if (age >= 14 && age <= 90) {
    alert('Between 14 and 90');
}
var age1 = 2;
if (age1 < 14 || age1 > 90) {
    alert('Not between 14 and 90');
}*/
/*var age2 = 80;
if (!(age2 >= 14) || !(age2 <= 90)) {
    alert('Not between 14 and 90');
}*/
                                               //FOR WHILE
    /*
    for (var i =2; i <10; i++) {
        if (i % 2 == 0) {
            alert('Only even numbers from 2 to 10 - ' + i);
        }
    }*/
    /*
    for (var i=0; i < 3; i++) {
        alert( 'number ' + i + '!'); // rewrite with WHILE:
    }*/
    /*
    var i = 0;
    while (i <3) {
        alert( 'number ' + i + '!');
        i++;
    }*/

//My variant:
/*for ( var num = prompt('Please write number larger than 100', 0); num <= 100 && num != null;) {
    num = prompt('Please write number larger than 100', 0);
}*/
// Correct variant:
/*
var num;
do{
    num = prompt('Please write number larger than 100', 0);
} while (num <= 100 && num != null);
*/
// Вывести простые числа от 2 до 10:
/*
nextPrime:
for (var i =2; i < 10; i++){
    for( var j =2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert ('Prime numbers: ' + i);
}
*/
                                               // SWITCH
// Task is rewrite next to "if" :
/*var browser = prompt('What is your brouser?', '')
switch (browser) {
    case 'IE':
        alert('Oh, yea you have IE' );
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Yes, we support this browsers as well' );
        break;
    default:
        alert('We hope everything is good in your browser as well!' );
}*/
/*
var browser = prompt('What is your browser?', '');
if (browser == 'IE' ) {
    alert('Oh, yea you have IE' );
} else if (browser == 'Chrome'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera') {
    alert('Yes, we support this browsers as well' );
} else {
    alert('We hope everything is good in your browser as well!' );
}*/
// Task is rewrite next to "SWITCH" :
/*
var a = +prompt('a?', '');
if (a == 0) {
    alert(0);
}
if (a == 1) {
    alert(1);
}
if (a == 2 || a == 3) {
    alert( '2,3');
}*/
/*
var a = +prompt('a?', 0);
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}*/
                                          // FUNCTIONs names
/*showMessage()
getAge()
calcD()
createForm()
checkPermission()*/
/*
function showMessage() {
    var message = 'Hello, I am Vasya'; // local variable
    alert( message);
}
showMessage();
alert( message); // error*/
/*function count() {
    for ( var i = 0; i < 3; i++) {
        var j = i * 2;
    }
    alert( i ); //3
    alert( j ); //4
}
count();*/
/*
function showMessage(from, text) {
    from = '**' + from + '**';
    text = text || 'text aren\'t present';
    alert( from + ': ' + text);
}
var from = 'Masha';
showMessage(from, 'Hello!');
alert( from);
showMessage('Daniil', 'Hello!');
showMessage('Luba');*/
/*
                                                  // RETURN
function checkAge(age) {
    if (age > 18) {
        return true;
    }
        return confirm('Do you parents allow?');  // without 'else' works the same
    }
var age = prompt('How old are you?');
if (checkAge(age)) {
    alert( 'Access granted.');
} else {
    alert('Access denied');
}
*/
// rewrite with " ? " and " || " :
/*function checkAge(age) {
    if ( age > 18) {
        return true;
    } else {
        return confirm('Do you parents allow?');
    }
}*/
//var age = prompt('How old are you?');
/*function checkAge(age) {
    return (age > 18) ? true: confirm('Do you parents allow?');
}*/
/*
function checkAge(age) {
    return (age > 18) || confirm('Do you parents allow?');
}
if (checkAge(age)) {
    alert( 'Access granted.');
} else {
    alert('Access denied');
}*/
/*function min(a,b) {
    if (a < b) {
        alert (a);
    } else {
        return b;
    }
}
min(2,5);*/
/*
function min(a,b) {
    return (a < b ) ? a : b;
}
min(a,b);*/

/*
                                    // X^n^m
/!*function pow( x, n, m) {
    var result1 = x;
    for (var i = 1; i < n; i++){
        result1 *= x;
        var result2 = result1;
        for ( var j = 1; j < m; j++) {
            result2 *= result1;
        }
    }
    return result2;
}
var x = prompt('Please enter number x:', '' );
var n = prompt('Please enter degree n:', '');
var m = prompt('Please enter degree m:', '');
if (n <= 1) {
    alert('Degree ' + n + ' isn\'t supported, please enter integer degree grater than 1');
} else if (m <= 1) {
    alert('Degree ' + m + ' isn\'t supported, please enter integer degree grater than 1');
} else {
    alert( pow(x, n, m));
}*!/
alert ( pow ); // will show a code of function pow
*/

/*function sayHi () {               // crete function and put in variable sayHi
    alert('Hi!');
}
var func = sayHi; // copy function in variable func
                  // ( sayHi() would put it's results in func - undefined
                  // ( undefined - because  inside sayHi there are no return) !!!
func(); // Hi
sayHi (); // Hi
alert(sayHi);
sayHi = null; // value of variable could be changed
sayHi();*/

/*
 sayHi('Kolya');        // DOESN'T work BEFORE Function Expression
var sayHi = function(person) {
    alert('Hello, ' + person );
} ;
sayHi('Kolya');*/
/*
                                               //Function Expression
 var sum = function(a,b) {
 return a +b;
 }
// Function Declaration
 sum(a,b)              // works
function sum(a,b) {
    return a + b;
}
*/
                                                  //new Function
/*
var sum = new Function('a,b', ' return a+b; ');
alert(sum(1,2));
*/
/*
var age = prompt('How old are you?');
var sayHi;                // if Function Declaration -> error because it would be inner variable of function
if (age >= 18) {
    sayHi = function () { // Function Declaration -> function sayHi(){
        alert('You are welcom!');
    }
} else {
    sayHi = function () {
        alert('Not allowed before 18!');
    }
}
sayHi();
*/
/*
function ask(guestion, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    'Do you agree?',
    function () {alert('You agreed.'); },          //anonymous function
    function () { alert('You diclaim'); }
);*/
                                               //Recursion
/*function pow(x, n) {
    if (n != 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}
alert( pow(2, 3));*/
/*function sumTo(n) {               //with FOR
    var result = n;
    for( var i = 1; i < n; i++) {
        result += i;
    } return result;
}
alert( sumTo(100));   */


/*function sumTo(n) {                   // with Recursion
    if(n == 1) return 1;
    return n + sumTo(n -1);
   }
alert( sumTo(100));*/


/*function sumTo(n) {           //with formula sum of arithmetic progression
       return n * (n +1) / 2;
}
alert( sumTo(100)); */
                                 // NAMED FUNCTION EXPRESSION
// var f = function() {};  ->
//   var f = function sayHy() {}
/*
var f = function sayHi(name) {
    sayHi = 'test';            // impossible to rewrite
    alert( sayHi);            // works inside function
}
alert( sayHi); // error outside func*/
                     //1   using with Recursion
/*function f(n) {
    return n ? n * f(n - 1) : 1; // trying find f, but it's g now!!
}
var g = f;
f = null;
alert( g(5));   // ERROR !!*/
                    //2
/*
var f = function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
var g = f;
f = null;
alert( g(5)); // 120, WORKS !!*/
