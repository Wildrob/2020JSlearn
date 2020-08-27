import{expect} from 'chai';  //expect is a type within chai
import jsdom from 'jsdom';
import fs from 'fs';  //fs comes along with node, allows access to node file system


//this is the first test; a test that says true should equal true
describe('Our first test', () => {
    it('should pass', () => {
      expect(true).to.equal(true);

    });
});


//this is a second test 
//this is testing in the dom without actuallly open a browser 
//let linlin = "sexy"; me messing it up
//describe -- so you know what text is for 
// index -- moving contents of html file to do some testing
//const hr -- grabbing the content on the page which you want to test against
//expect is the assertion and test
//window.close - just clearing the memory
//without done bit it doesnt work... dont fully know why, need to pass parameter and then add it again

/*   -old test before data added 
describe('index.html', () => {
  it('should say hello', (done) => {
     const index = fs.readFileSync('./src/index.html',"utf-8");
     jsdom.env(index, function(err, window) {
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Rob love Linlin 2 ");
        done();
        window.close();
     });
  });
});
*/


describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
     const index = fs.readFileSync('./src/index.html',"utf-8");
     jsdom.env(index, function(err, window) {
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Users");
        done();
        window.close();
     });
  });
});


