

import {getUsers} from './api/userApi';


//this is the part in future that you would do in react
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