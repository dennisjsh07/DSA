var a=[1,2,4,1,5,6];
var highest=a[0];
var sec_highest=a[0];
 for(i=0;i<a.length;i++)
 {
   if(a[i]>highest)
   {
     sec_highest=highest;
     highest=a[i];
   }
 } 
 console.log(sec_highest);