class Node{
  static i = 0;
  constructor(val){
    this.val = val;
    this.next = undefined;
    Node.i = Node.i + 1;
  }
}

function insertStart(head, val){
  const newNode = new Node(val);
  newNode.next = head;
  return newNode
}

function insertEnd(head,val){
  const newNode = new Node(val)
  let temp = head;
  while(temp.next){
    temp = temp.next
  }
  temp.next = newNode;
}

function insertMid(head, n, val){
  let newNode = new Node(val);
  let temp = head;
  while(n-1 > 0 && temp.next){
    temp = temp.next;
    n = n-1;
  }
  let x = temp.next;
  temp.next = newNode;
  newNode.next = x;
}

function display(head){
  let temp = head
  while(temp){
    console.log(temp.val);
    temp = temp.next;
  }
}

function deleteEnd(head){
  let temp = head;
  while(temp.next.next){
    temp = temp.next
  }
  temp.next = undefined;
}

function deleteMid(head,n){
  let temp = head;
  while(n-2 > 0 && temp.next){
    temp = temp.next;
    n = n-1;
  }
  temp.next = temp.next.next;
}

// inserting...
let head = new Node(5);

head = insertStart(head, 4)
head = insertStart(head, 3)
head = insertStart(head, 2)
head = insertStart(head, 1)

insertMid(head,6,6);
insertMid(head,7,7);

insertEnd(head, 8);
insertEnd(head, 9);
insertEnd(head, 10);

// deleting...
head = head.next;
head = head.next;

deleteEnd(head);
deleteEnd(head);

deleteMid(head,5);
deleteMid(head,5);


display(head);
// console.log(head);

console.log('before deletion -->',Node.i);
let curr = head;
let count = 0;
while(curr){
  count++
  curr = curr.next;
}
console.log('afetr deletion -->',count);