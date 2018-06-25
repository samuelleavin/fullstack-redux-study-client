// import chai from 'chai';
// import chaiImmutable from 'chai-immutable';

// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;

// const { win } = new JSDOM('<!doctype html><html><body></body></html>');
// const { doc } = (new JSDOM('<!doctype html><html><body></body></html>')).window;

// global.document = doc;
// global.window = win;

// Object.keys(window).forEach((key) => {
//   if (!(key in global)) {
//     global[key] = window[key];
//   }
// });

// chai.use(chaiImmutable);



const jsdom = require('jsdom');
const { JSDOM } = jsdom;
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
const win = dom.window;
const doc = win.document;

global.document = doc;
global.window = win;

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
      global[key] = window[key];
  }
});


chai.use(chaiImmutable);
