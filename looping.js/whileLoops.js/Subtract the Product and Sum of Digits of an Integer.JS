var n=n = 234;
var sum=0;
var pro=1;
  while(n>0)
  {
    x=n%10;
    sum=sum+x;
    pro=pro*x;
    n=Math.floor(n/10);
  } 
  console.log(pro-sum); 