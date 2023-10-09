// 1) using two queues...
class Queue {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
  
    push(ele) {
    // step-1 (push ele to q2)
    this.q2.push(ele);
    // step-2 (push all ele from q1 to q2 from top of q1)
    while (this.q1.length > 0) {
      this.q2.push(this.q1.pop());
    }
    // step-3 (swap q1 and q2)
    [this.q1, this.q2] = [this.q2, this.q1];
    }
  
  
    top() {
      return this.q1[0];
    }
  
    pop() {
      this.q1.shift();
    }
  }
  
let a = new Queue();
a.push(5);
a.push(6);
a.push(7);

console.log(a);

console.log(a.top());
a.pop();
console.log(a.top());
a.pop();
console.log(a.top());

// 2) using a single queue...
class Queue {
    constructor() {
      this.q1 = [];
    }
  
    push(ele) {
      this.q1.push(ele);
      if(this.q1.length > 1){ // if there are 2 ele
        for(let i = 0; i<this.q1.length-1; i++){
          this.q1.push(this.q1.shift())
        }
      }
    }
  
  
    top() {
      return this.q1[0];
    }
  
    pop() {
      this.q1.shift();
    }
  }
  
let b = new Queue();
b.push(5);
b.push(6);
b.push(7);

console.log(b);

console.log(b.top());
a.pop();
console.log(b.top());
a.pop();
console.log(b.top());
  
  
  
  