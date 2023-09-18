// Return the index of sentence that contain maximum number of alphabet 'a' in a single sentence.

var a=  ["ananya loves sharpener", "apple is a very healthy fruit", "this is great thanks very much"];
var max_count=0;
var index=0;
for(i=0;i<a.length;i++)
{
  var count=0;
  for(j=0;j<a[i].length;j++)
  {
    if(a[i][j]=="a")
    {
      count=count+1;
    }
  }
   if(count>max_count)
   {
     max_count=count;
     index=i;
   }
}
console.log(max_count);
console.log(index);
