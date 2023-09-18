var n = 7;
var sum=0;
while(n>1)
{
  if(n%2==0)
  {
    n=n/2;
    sum=sum+n;
  }
  else
  {
    n=(n-1)/2;
    sum=sum+(n+1);
  }
}
console.log(sum);

///----leet code link----///
// https://leetcode.com/problems/count-of-matches-in-tournament/