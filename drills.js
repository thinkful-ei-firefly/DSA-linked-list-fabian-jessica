'use strict';
const LinkedList = require('./list');
const DoubleLinkedList = require('./doubleList');
const { display, size, isEmpty, reverseList } = require('./listFns');

function main () {
  let SLL = new LinkedList();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');

  SLL.remove('squirrel');

  SLL.insertBefore('Athena', 'Boomer');

  SLL.insertAfter('Hotdog', 'Helo');

  SLL.insertAt('Kat', 2);

  SLL.remove('Tauhida');

  display(SLL);
}

function mainDLL () {
  const DLL = new DoubleLinkedList();
  DLL.insertFirst('Sagittaron');
  DLL.insertFirst('Picon');
  DLL.insertFirst('Gemenon');
  DLL.insertFirst('Caprica');
  DLL.insertFirst('Aquaria');

  DLL.insertLast('Tauron');
  DLL.remove('Picon');
  display(DLL);
}

mainDLL();

// Analyze the following function (without running it in an IDE)
// to determine what problem it is trying to solve.
// What is the time complexity of this algorithm?

// function WhatDoesThisProgramDo(lst) {
//     let current = lst.head;
//     while (current !== null) {
//         let newNode = current;
//         while (newNode.next !== null) {
//             if (newNode.next.value === current.value) {
//                 newNode.next = newNode.next.next;
//             }
//             else {
//                 newNode = newNode.next;
//             }
//         }
//         current = current.next;
//     }
// }

//This algorithm removes duplicate values from a given linked list.
//It has time complexity O(n^2)