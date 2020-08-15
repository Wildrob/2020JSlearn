//This file isnt transpiled 

//register babil to transpile before our tests run. 
require('babel-register')();

//disable webpack features that Mocha doesnt understand. 
require.extensions['.css'] = function(){};

