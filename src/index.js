// i am not sure this is even part of "building a jaavascript evelopment enviroment module - it is instead you doing someting else

import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//debugger; //no longer in use with linting

console.log(`I would pay ${courseValue} for this awesome course!`); //eslint-disable-line no-console
// you need to make sure you use `` - backticks - these allow it to see the courseValue in the string

//let rob = "test"; was me playing by myself..

