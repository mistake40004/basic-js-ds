const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(data = null){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.top = null;
  }
  root() {
    return this === null ? undefined : this.top;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.top === null)
      this.top = newNode;
    else
      this.insertNode(this.top, newNode); // helper method below
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data)
      if (node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode);
  else
    if (node.right === null)
        node.right = newNode;
    else
        this.insertNode(node.right, newNode);
}

  has(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};