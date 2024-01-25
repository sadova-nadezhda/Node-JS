import "./index.html";
import "./index.scss";

import $ from 'jquery';
import some from './modules/some.js';

$('.title').html('Heading123');

console.log(some.avg(1, 2, 3, 7));
console.log(some.merge({ a: 1 }, { b: 2 }));
