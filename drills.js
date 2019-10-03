'use strict';
const LinkedList = require('./list');

let LL = new LinkedList();

LL.insertFirst('ABC');
LL.insertLast('DEF');
console.log(LL.head);