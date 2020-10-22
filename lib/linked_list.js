// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) {
            return undefined;
        }

        let current = this.head;
        let previous = this.head;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = previous;
            previous.next = null;
        }
        // current.next = null;
        this.length--;
        return current;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val);
        if (this.length ==0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let current = this.head;
        if (this.length ==0){
            return undefined;
        }
        if (this.length==1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return current;
    }

    // TODO: Implement the contains method here
    contains(target) {
        // forEach(el => if el == target)
        // Also current is equal to a node;
        // this means that a node has  this.value = val;

        /* 
         while (current.next) {
            current = current.next;
        }
        */
        this.next = null;
        let current = this.head;
        let returnedValue =false;
   
        while (current) {
            if (current.value == target){
                returnedValue= true;
            } 
            current = current.next;
        }
        return returnedValue;
    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {
        this.length++;
    }

    // TODO: Implement the remove method here
    remove(index) {
        this.length--;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

// let list = new LinkedList();
// list.addToTail(1);
// list.addToTail(2);
// list.addToTail(3);
// list.addToTail(4);
// list.addToTail(5);
// list.removeTail();
// console.log(list);

exports.Node = Node;
exports.LinkedList = LinkedList;
