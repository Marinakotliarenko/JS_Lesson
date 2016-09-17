/**
 * Created by marina on 12.09.16.
 */
/*
a = 25;//find usages
function () {
    k = 4;
} //  Code -> Surround with
*/
// Ctrl+Shift+N -> navigate
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
alert(access);*/ //  with " ? " it's could be done shoter:
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
var hour = 12 ;
isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {alert( 'Not working!!');}*/
var age = 15;
if (age >= 14 && age <= 90) {
    alert('Between 14 and 90');
}
var age1 = 2;
if (age1 <= 14 || age1 >= 90) {
    alert('Not between 14 and 90');
}
var age2 = 2;
if (age2 <= 14 || age2 >= 90) {
    alert('Not between 14 and 90');
}