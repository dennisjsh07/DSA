class node 
{
  static i=0;
  constructor(value)
  {
    this.value=value;
    this.next=undefined;
    node.i=node.i+1;
  }
}

insert_start=function(head,value)
{
  new_node=new node(value);
  new_node.next=head;
  return new_node;
}

insert_end=function(head,value)
{
 new_node=new node(value)
 temp=head;
 while(temp.next!=null)
 {
   temp=temp.next; // giving  the increment  to the loop to reach the last node.
 }
 temp.next=new_node
}

insert_middle=function(head,n,value)
{
  new_node=new node(value);
  temp=head;
  while(n-1>0)
  {
    temp=temp.next;
    n=n-1;
  }
  x=temp.next;
  temp.next=new_node;
  new_node.next=x;
}

delete_end=function(head)
{
  temp=head;
  while(temp.next.next!=null) //in linked list we cannot go to the previous value one we find the last value,hence we use temp.next.next.
  {
    temp=temp.next;
  }
  temp.next=undefined;
}

delete_mid=function(head,n)
{
  temp=head;
  while(n-2!=0)
  {
    temp=temp.next
    n=n-1;
  }
  temp.next=temp.next.next;
}

display=function(head)
{
  temp=head;
  while(temp!=null )
  {
    console.log(temp.value)
    temp=temp.next;
  }
 
}


head=new node(5);

head=insert_start(head,4);
head=insert_start(head,3);
head=insert_start(head,2);
head=insert_start(head,1);
insert_end(head,7);
insert_end(head,8);
insert_end(head,9);
insert_end(head,10);
insert_middle(head,5,6);
insert_middle(head,6,11);
insert_middle(head,6,12);
head=head.next;
head=head.next;
head=head.next;
delete_end(head);
delete_end(head);
delete_end(head);
delete_mid(head,3);
display(head);
console.log( );

//also find the size of linked list.
console.log(node.i); //length before deletion.

var curr=head; //length after deletion.
var a=0;
while(curr)
{
  a=a+1;
  curr=curr.next;
}
console.log(a);




