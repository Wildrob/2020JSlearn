

import {getUsers} from './api/userApi';
//import { random } from 'json-schema-faker';



//"building a jaavascript evelopment enviroment" module
//this is the part in future that you would do in react - here trying to show you pulling data from the internet/ well a database over to 
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a> </td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>

    </tr>`

  });
global.document.getElementById('users').innerHTML = usersBody;
});



//learning 1: putting in to the DOM 
//below is rob just learning to use the DOM and JS with html really - simple text first! 
let newtest = "test3";
global.document.getElementById('firstworking').innerHTML = newtest;
//interesting... if you put 'let number = random();' above the above the code doesnt work... not sure why


//learning 2: putting a random number into the browser... this was just me playing again
//below is rob just learning to use the DOM and JS with html really - simple text first! 
/*
let xxx = Math.random();
let yyy = xxx.toString();
//let newtest = "test3";
global.document.getElementById('firstworking').innerHTML = yyy;
*/


//[NOT WORKING] learning 3: putting in to the DOM but with random number generation 
//below is rob just learning to use the DOM and JS with html really - simple text first! 
/*
let number2 = random();
let newtest2 = "I would pay" + `${number2}` + "for this awesome course!";
global.document.getElementById('firstworking').innerHTML = newtest2;
*/







/*
//NEW Some of it is part for sure -- OLD i am not sure this is even part of "building a jaavascript evelopment enviroment module - it is instead you doing someting else
//This at least shows you some functionality working within the browser
import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//debugger; //no longer in use with linting

console.log(`I would pay ${courseValue} for this awesome course!`); //eslint-disable-line no-console
// you need to make sure you use `` - backticks - these allow it to see the courseValue in the string
//let rob = "test"; was me playing by myself..
*/