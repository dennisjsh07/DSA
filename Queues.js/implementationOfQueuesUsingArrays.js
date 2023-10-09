class Queue {
    constructor(){
      this.q = [];
      this.f = -1;
      this.r = -1;
    }
    
    push(ele){
      if(this.f === -1){ 
        this.f = 0;
        this.r = 0;
      }
      this.q[this.r] = (ele);
      this.r++;
    }
    
    pop(){
      if(this.f <= this.r){
      this.f++
      }
    }
    
    top(){
      return this.q[this.f];
    }
    
    display(){
      for(let i = this.f; i < this.r; i++){
        console.log(this.q[i])
      }
    }
    
    isEmpty(){
      if(this.f >= this.r){
        return ('is empty');
      } 
      
      return ('not empty');
    }
  }
  
  let a = new Queue();
  
  console.log(a.isEmpty());
  
  a.push(6);
  a.push(7);
  a.push(8);
  a.push(9);
  a.push(10);
  
  a.display();
  console.log(a);
  
  console.log(a.isEmpty());
  
  console.log(a.top());
  a.pop();
  console.log(a.top());
  a.pop();
  console.log(a.top());
  a.pop();
  console.log(a.top());
  a.pop();
  console.log(a.top());
  a.pop();
  console.log(a.top());
  
  console.log(a.isEmpty());
  