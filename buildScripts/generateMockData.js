

//this needs populating still!!!


import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("/.src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }

});


/*
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

// With latest version of json-schema-faker, must explicitly extend JSF with the fake libs you want to use.
//jsf.extend("faker", () => require("faker"));

const json = JSON.stringify(jsf.generate(schema));




fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
*/

/*
jsf.resolve(schema).then(function(result) {
  fs.writeFile("./src/api/db.json", JSON.stringify(result, null, 2), function(err){
      if (err) {
          return (console.log((err)));
      } else {
          console.log(`Mock Data Generated Here:`)
      }
    });
  });*/
