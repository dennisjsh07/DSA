// QUEUES //
// 1) It is a linear data structure that is similar to the stack. i.e, elements are arranged in sequential manner.
// 2) It follows (FIFO) i.e, first in first out. eg- standing in the line to buy ticket.
// 3) In queues the operations are:-
//    a) push is called as ENQUEUE.
//    b) POP is called as DEQUEUE.
// 4) There are 2 conditions to be checked while performing these operations.
//    a) OVERFLOW : insertion into the queue that is full.
//    b) UNDERFLOW : Deletion from empty queue.
// 5) There are 2 ends for a queue.
//    a) front end : DEQUEUE is performed.
//    b) Rear end : ENQUEUE is performed.
// 6) Initially front and Rear =-1;


// initialise a QUEUE.

class queue
{
  constructor()
  {
    this.q=[];
    this.front=-1;
    this.rear=-1;
  }
}
var a=new queue();
console.log(a);



// insert elements inside the QUEUE.

class queue
{
  constructor()
  {
    this.q=[];
    this.front=-1;
    this.rear=-1;
  }
  
  enqueue(ele)
  {
    if(this.front==-1) // empty condition
    {
      this.front=this.front+1;
      this.rear=this.rear+1;
    }
    else
    {
      this.rear=this.rear+1;
    }
    this.q[this.rear]=ele;
  }
}
var a=new queue();
a.enqueue(10);
a.enqueue(20);
a.enqueue(30);
a.enqueue(40);
console.log(a);



// REMOVING ELEMENTS FROM THE QUEUE;

class queue
{
  constructor()
  {
    this.q=[];
    this.front=-1;
    this.rear=-1;
  }
  
  enqueue(ele)
  {
    if(this.front==-1) // empty condition
    {
      this.front=this.front+1;
      this.rear=this.rear+1;
    }
    else
    {
      this.rear=this.rear+1;
    }
    this.q[this.rear]=ele;
  }
  
  dequeue()
  {
    if(this.front>this.rear) //if there are no elements to pop. 
    {
      this.front=-1;
      this.rear=-1;
    }
    else
    {
      this.front=this.front+1;
    }
  }
}
var a=new queue();
a.enqueue(10);
a.enqueue(20);
a.enqueue(30);
a.enqueue(40);
a.dequeue();
console.log(a);


// FIND IF THE QUEUE IS isEMPTY();

class queue
{
  constructor()
  {
    this.q=[];
    this.front=-1;
    this.rear=-1;
  }
  
  enqueue(ele)
  {
    if(this.front==-1) // empty condition
    {
      this.front=this.front+1;
      this.rear=this.rear+1;
    }
    else
    {
      this.rear=this.rear+1;
    }
    this.q[this.rear]=ele;
  }
  
  dequeue()
  {
    if(this.front==this.rear) //if there are no elements to pop. 
    {
      this.front=-1;
      this.rear=-1;
    }
    else
    {
      this.front=this.front+1;
    }
  }
  
  isEmpty()
  {
    if(this.front>this.rear || this.rear==-1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
}
var a=new queue();
a.enqueue(10);
a.enqueue(20);
a.enqueue(30);
a.enqueue(40);
a.dequeue();

console.log(a);
console.log(a.isEmpty()); // checking if empty.
console.log(a.q[0]); // finding the first element
console.log(a.q); // viewing only the queue;
console.log(a.q,a.front,a.rear); //viewing the queue, front pointer,last paonter.
// front pointer=1 since dequeue=1;