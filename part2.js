//question link: https://www.codewars.com/kata/55be95786abade3c71000079/train/javascript
//solution:
function Node(data) {
    this.data = data;
    this.next = null;
}

function push(head, data) {
    // Go.
    let node = new Node(data)
    if (!head) head = node
    else {
        let ll = head
        while (head) {
            if (head.next === null) {
                node.next = head
                head = node
                break
            }
        }
    }
    return head
}

function buildOneTwoThree() {
    // Go.
    const head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)

    return head
}
//end

//question link: https://www.codewars.com/kata/linked-lists-get-nth-node/train/javascript
//solution:
function Node(data) {
    this.data = data;
    this.next = null;
}

function getNth(node, index) {
    // Your code goes here.
    if (!node) throw ('error')
    let indexCounter = -1
    let current = node

    while (current) {
        indexCounter++
        if (index === indexCounter) return current
        current = current.next
    }
    throw ('error')
}
//end

//question link: https://www.codewars.com/kata/linked-lists-length-and-count
//solution:
function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    // Your code goes here.
    if (!head) return 0
    let ll = head
    let length = 0
    while (ll) {
        length++
        ll = ll.next
    }
    return length
}

function count(head, data) {
    // Your code goes here.
    if (!head) return 0
    let count = 0
    let ll = head
    while (ll) {
        if (ll.data === data) count++
        ll = ll.next
    }
    return count
}
//end

//question link: https://www.codewars.com/kata/55cc33e97259667a08000044/train/javascript
//solution:
function Node(data) {
    this.data = data;
    this.next = null;
}

function sortedInsert(head, data) {
    // Your code goes here.
    let node = new Node(data)
    let count = 0
    if (!head) return node
    let prev = null
    let ll = head

    while (ll) {
        if (ll.data > data) {
            node.next = ll
            break
            prev = ll
            ll = ll.next
        }
        else {
            node.next = null
        }
    }

    // Remember to return the head of the list.
    if (prev) prev.next = ll
    return (prev) ? head : node
}
//end

//question link: https://www.codewars.com/kata/583615f52fb0badde30000fe/train/javascript
//solution:
DoublyLinkedList.prototype.remove = function (index) {
    // Your code goes here
    let indexCounter = -1
    let current = this.head

    while (current) {
        indexCounter++
        if (indexCounter === 0 && index === indexCounter) {
            current.next.prev = null
            this.head = current.next
            this.length--
            return true
        }
        if (index === indexCounter) {
            current.prev.next = current.next
            current.next.prev = current.prev
            return true
        }
        current = current.next
    }
    this.length--
    return false
}
//The End