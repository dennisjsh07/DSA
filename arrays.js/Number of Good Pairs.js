///----leet code link----///
//https://leetcode.com/problems/number-of-good-pairs/

var a=[1,2,3,1,1,3];
var max_count=0;
for(i=0;i<a.length;i++)
{
  var count=0;
  for(j=0;j<a.length;j++)
  {
    if((a[i]===a[j]) && (i<j)) //i<j so that i should nog pair with previous number.
    {
      count=count+1;
      console.log([i],[j]);
    }
  }
max_count=max_count+count;

}
console.log(max_count);