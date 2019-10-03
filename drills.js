'use strict';
const LinkedList = require('./list');

let SLL = new LinkedList();

SLL.insertLast('Apollo');
SLL.insertLast('Boomer');
SLL.insertLast('Helo');
SLL.insertLast('Husker');
SLL.insertLast('Starbuck');

console.log(SLL.head);
console.log(SLL.head.next);
console.log(SLL.head.next.next);
console.log(SLL.head.next.next.next);
console.log(SLL.head.next.next.next.next);

SLL.insertLast('Tauhida');
console.log(SLL.head.next.next.next.next.next);

SLL.remove('squirrel');

SLL.insertBefore('Athena', 'Boomer');
console.log(SLL.head);
console.log(SLL.head.next);
console.log(SLL.head.next.next);

SLL.insertAfter('Hotdog', 'Helo');
console.log(SLL.head.next.next);
console.log(SLL.head.next.next.next);
console.log(SLL.head.next.next.next.next);

SLL.insertAt('Kat', 2);
console.log(SLL.head);
console.log(SLL.head.next);
console.log(SLL.head.next.next);
console.log(SLL.head.next.next.next);

SLL.remove('Tauhida');