// 1) swap two variables using a third variable.
var a=3;
var b=2;
var temp=a;
a=b;
b=temp;
console.log(a,b);
console.log( );

// 2) swap two variables without using a third variable.
var a=3;
var b=2;
a=a+b;
b=a-b;
a=a-b;
console.log(a,b);
console.log( );

// 3) write a program to find the largest among 2 numbers.
var a=25;
var b=20;
if(a>b)
{
    console.log(a);
}
else
{
    console.log(b);
}
console.log( );

// (or) terinary operator.
var a=30;
var b=25;
x=a>b ? a : b;
console.log(x);
console.log( );

// 4) write a program to find out the smallest among two numbers.
var a=30;
var b=50;
if(a<b)
{
    console.log(a);
}
else
{
    console.log(b);
}
console.log( );

// (or) terinary operator.
var a=15;
var b=20;
x=a<b ? a:b;
console.log(x);
console.log( );

// 5) write a program to findout the largest among three numbers.
var a=1;
var b=2;
var c=3;
if(a>b && a>c)
{
    console.log(a);
}
else if(b>c)
{
    console.log(b);
}
else{
    console.log(c);
}
console.log( );

// 6) write a program to determine the cost for given distance.
// a) 0-100        - 5.
// b) >100 & <500  - 8.
// c) >500 & <1000 -10.
// d) >1000        -12.
var d=2000;
if(d>0 && d<=100)
{
    console.log(5);
}
else if(d>100 && d<=500)
{
    console.log(8);
}
else if(d>500 && d<=1000)
{
    console.log(10);
}
else
{
console.log(12);
}
console.log( );

// 7) Find the hour
// a) If hour is in between 6am & 12pm :-good morning.
// b) If hour is in between 12pm & 6pm :-good afternoon.
// c) Otherwise                        :-good evening.
var h=15;
if(h>0 && h<=12)
{
    console.log("good morning");
}
else if(h>12 && h<=18)
{
    console.log("good afternoon");
}
else if(h>18 && h<=24)
{
    console.log("good evening");
}
else
{
    console.log("invalid");
}
console.log( );


// 8) Write a program to find if the given number is even or odd.
var num=10;
if(num%2==0)
{
    console.log(" even");
}
else{
    console.log("odd");
}
console.log( );

//(or) using terinary operator.
var num=23;
x=num%2==0 ? "even" : "odd";
console.log(x);
console.log( );

// 9) Write a program to find if a person has passed or failed.
var x=100;
if(x>=40)
{
    console.log("pass");
} 
else
{
    console.log("fail");
}
console.log( );

//(or) using terinary operator.
var x=100;
y=x>=40 ? "pass" : "fail";
console.log(y);
console.log( );

// 10) Write a program to find out the time to wake up at a particular day (switch case).
// a) mon     = '7am'.
// b) tue-thu = '4am'.
// c) fri     = '9am'.
// d) sat-sun = '8am'.

var day="tuesday";
switch(day)
{
    case "monday":console.log("7 am");
    break;
    case "tuesday":console.log("4 am");
    break;
    case "wednesday":console.log("4 am");
    break;
    case "thursday":console.log("4 am");
    break;
    case "friday":console.log("4 am");
    break;
    case "saturday":console.log("8 am");
    break;
    case "sunday":console.log("8 am");
    break;
    default : console.log("invalid input");
}
console.log( );


// eg:- day 1 = "monday"
var day=1;
switch (day)
{
    case 1 : console.log("monday");
    break;
    case 2 : console.log("tuesday");
    break;
    case 3 : console.log("wednesday");
    break;
    case 4 : console.log("thursday");
    break;
    case 5 : console.log("friday");
    break;
    case 6 : console.log("saturday");
    break;
    case 7 : console.log("sunday");
    break;
    default : console.log("invalid input");

}
