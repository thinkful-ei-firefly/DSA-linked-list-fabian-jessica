'use strict';
class _Node {
  constructor (data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst (data) {
    this.head = new _Node(data, this.head);
  }

  insertLast (data) {
    if (this.head === null) this.insertFirst(data);
    else {
      let crawler = this.head;
      while (crawler.next !== null) {
        crawler = crawler.next;
      }
      crawler.next = new _Node(data, null);
    }
  }

  remove () {}

  find () {}
}

module.exports = LinkedList;