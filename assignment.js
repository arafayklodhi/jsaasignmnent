// alert("welcome");
// alert("Error!Plaease enter a valid password");
// alert("Welcome to JS Land\nHappy Coding!");

// Q4 : //
// alert("Welcome to JS Land");
// alert("Happy coding!");
// ---------
// Q5:
// Q6:





//////////CHAPTER NO 2///////////
//q1:
//var username;
////////////
////q2////
////var myname="Abdul Rafay lodhi";
////////
///q3
// var greetings="Hello World"
// alert(greetings);
///////
//q4////
// var name=prompt("Enter your full name");
// alert(name);
// var age=prompt("Enter your age");
// alert(age + " years old");

// alert("Certified Mobile Application development ");
//////
// q5
// var a="pizza";
// alert(a);
// a = a.substring(0, a.length - 1);
// alert(a);
// a = a.substring(0, a.length - 1);
// alert(a)
// a = a.substring(0, a.length - 1);
// alert(a)
// a = a.substring(0, a.length - 1);
// alert(a)
// var le=1;
// for ( ; a.length >= le; a.substring(0, a.length - 1)) 
//     {
//         alert(a);
//         // a = a.substring(0, a.length - 1);
//     }
// alert(a.length);    
/////////////
// q6:
// var a = prompt("enter email")
// alert("My email address is "+a)
// q7
// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the Book "+book)
// q8
// document.write("asdas");
// q9
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
    // ============Ch3==============
// q1
// var age=prompt("Enter your age");
// alert("I am "+age + " years old");
// q2
// for (let index = 1;  ; index++){
//     // const element = array[index];
//    alert("you visited"+index+"times")
// }
// q3
// var by=+prompt("enter birth year")

// var byt=typeof(by)
// document.write("My birth year is "+by+ "data type of my declared variable is "+byt)
// q4
// var pname;
// var vname;
// var qt;
// vname = prompt("Enter your name")
// pname = prompt("Enter product")
// qt = prompt("Quantity")
// document.write(vname+" ordered "+qt +" "+ pname + " on XYZ Clothing stor")
// Chapter 4
// -----------Task 1---------------
// var a,b,c;
// var a="abdul"
// var b="rafay"
// var c="lodhi"
// document.write(a+b+c)
// -----------Task 2---------------
// var l1;
// var L2;
// var n_1;
// var n$;
// var $n;
// var _na;

// // ------------ illegal--------
// var 1n;
// var @d;
// var &n;
// var m.;
// var %b; 
// -------------Task3----------------

// var x = document.createElement("H1");
// var t = document.createTextNode("Rules for naming JS variable");
// x.appendChild(t);
// document.body.appendChild(x);
// document.write("Variable names can only contain Number, $, and _ .For example $my_1stVariable")
// document.write("Variables must begin with a $, _ or_____. For example $name, _name or name")
// document.write("Variables names are case sensitive")
// document.write("Variable names should not be JS keywords")

// ============Chapter 4===========
// --------------Task 1-------
// var n1,n2,n3
// n1=+prompt("Enter First Num")
// n2=+prompt("Enter Second Num")
// n3=n1+n2;

// document.write("Sum of "+n1+" And " + n2 + " is "+ n3)
// --------------Task 2-------
// var sr=n1 - n2;
// document.write("Sum of "+n1+" And " + n2 + " is "+ sr)
// var mr=n1 * n2;
// document.write("Sum of "+n1+" And " + n2 + " is "+ mr)
// var dr=n1 / n2;
// document.write("Sum of "+n1+" And " + n2 + " is "+ dr)
// --------------Task 3-------------
// var n1;
// document.write("Value after variable declaration is: ? \n")
// n1=5;
// document.write("Initial value is "+n1+"\n")
// n1++;
// document.write("Initial value after increment is "+n1+"\n")
// n1=n1+7;
// document.write("Value after addition is "+n1+"\n")
// n1--;
// document.write("Value after decrement is "+n1+"\n")
// n1=n1%3;
// document.write("The remainder is: "+n1)
// ---------------Task 4--------------
// var tp=Number(600)
// var qu=+prompt("How many tickets you want to buy")
// var total = tp * qu
// document.write("Total cost to buy "+qu+" tickets to a movies is "+total )
// ---------------Task 5--------------

// var n1 =+prompt("Enter number of required  Table")
// for(i=1;i<=10;i++)
//     {
//         var fn=n1*i
//         document.write(n1+"x"+i+"="+fn + " \n")

//     }   
// ---------------Task 6--------------
// var cel = Number(25);
// var cfr,fc;
// cfr=(cel*9/5)+32
// document.write(cel+"C is "+cfr+"F \n")
// var fel=Number(70);
// fc=(fel-32)*5/9;
// document.write(fel+"F is "+fc+"C is ")
// ------------Task 7------------
// var item1=+650;
// var item2=+100;
// var iquan=+prompt("Enter the quantity of item 1 \n")
// var iq2=+prompt("Enter the quantity of item 2 \n")
// document.write("Price of item 1 is "+item1+" \n")
// document.write("Quantity of item 1 is "+iquan+" \n")
// document.write("Price of item 1 is "+item2+" \n")
// document.write("Quantity of item 1 is "+iq2+" \n")
// var ir1=item1*iquan;
// var ir2=item2*iq2;
// var total=+ir1+ir2+100
// document.writeln("Shipping charges is 100 \n")
// document.write("Total cost of your order is "+ total + "\n")
// ------------Task 8------------
// var tnum=+980
// var bnum=+prompt("Enter marks obtained ")
// document.write("Total number is: "+tnum+" \n")
// document.write("Marks Obtained is: "+bnum+" \n")
// var per=bnum/tnum*100
// document.write("Total number is : "+ per)
// ------------Task 9--------------
// var pkr=Number((10*104.80)+(25*28))
// document.write("Total currency is "+ pkr)
// ------------Task 10--------------
// var n1=+5;
// document.write((n1+5*10)/2);
// ------------Task 11----------
// var byear=Number(prompt("Enter Birth Year"))
// var cyear=Number(prompt("Enter Current Year"))
// var age=byear-cyear
// var age1=byear-cyear-1
// document.write("They are either "age +" or " +age1 +" years old")
// ------------Task 13---------------

// var sname=prompt("Enter Your favourite Snacks")
// var cage=+prompt("Enter your current age")
// var mage=+prompt("Enter your maximum age")
// var qu=+prompt("Enter Quantity per day")

// var far1=(mage-cage)*365
// var far2=far1*qu
// document.write("Favourite Snack is: "+sname+"<br>")
// document.write("Current age is: "+cage+"<br>")
// document.write("Estimated Age is: "+mage+"<br>")
// document.write("Amounts of snacks per day:"+qu+"<br>")
// document.write("You will need "+far2+" "+sname+" to last you until the ripe old age of "+mage+ "\n"
// ------------Chapter6-9---------------
// ------------Task 1---------------
// var a=+10
// document.write("Result: <br> The value of a is:"+a+"<br>----------------------------------------------<br>")
// ++a;
// document.write("The Value of ++a is:"+a+"<br>")
// document.write("NOw the value of ++a is:"+a+"<br>")

// document.write("The Value of a++ is:"+a+"<br>")
// a++;
// document.write("NOw the value of a++ is:"+a+"<br>")


// document.write("The Value of --a is:"+a+"<br>")
// --a;
// document.write("NOw the value of --a is:"+a+"<br>")

// document.write("The Value of a-- is:"+a+"<br>")
// a--;
// document.write("NOw the value of a-- is:"+a+"<br>")
// ------------Task 2---------------
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("The value of a is "+a+"<br>")
// document.write("The value of b is"+b+"<br>")
// document.write("Result is "+result)
// document.write("--a is This is pre increment")
// document.write("--a - --b means 1-0")
// document.write("--a - --b + ++b means 1+0+1")
// document.write("--a - --b + ++b + b-- ")
// ------------Task 3---------------
// var a=prompt("What is your Name")
// document.write("ASSALAM O ALAIKUM<br>"+a+" how may I help you")
// ------------Task 4---------------
// var a =+prompt("ENter number which you want a taable")
// if(a==="")
//     {
        
//         for(i=1;i<=10;i++)
//             {
//                 var fn=5*i
//                 document.write("5"+"x"+i+"="+fn + "<br>")

//             } 
//     }else{
//         for(i=1;i<=10;i++)
//     {
//         var fn=a*i
//         document.write(a+"x"+i+"="+fn + "<br>")
//     }
// }
// -----------------Chapter 9-11--------------------
// -----------------Task 1--------------------
// var a=prompt("Enter city name")
// if(a==="Karachi"){
//     document.write("Welcome to the City of LIGHTS")
// }else{
//     document.write("Welcome to "+a+" Singham")
// }
// -----------------Task 2--------------------
// var a=prompt("Enter your gender ")
// if(a==="male"||"Male"||"MALE"){
//     document.write("Good Morning Sir")
// }else{
//     document.write("Good Morning Mam")
// }
// -----------------Task 3--------------------
// var a = prompt("Enter liight Color")
// if(a==="Red"){
//     document.write("Must Stop")
// }
// else if(a==="Yellow"){
//     document.write("Ready to move")
// }
// else if(a==="Green"){
//     document.write("Move Now")
// }else{
//     document.write("invalid credientional")
// }
// -------------Task 4------------------
// var a = prompt(parseFloat("Enter litres "))
// if(a<0.25){
//     document.write("Refill the tank")
// }else{
//     document.write("Fuel is enough")
// }
// -------------Task 5--------------------
// var a = 4;if (++a === 5){alert("given condition for variable a is true");} its True
// var b = 82;if (b++ === 83){alert("given condition for variable b is true");} Its not running beacuse of condiotion is false
// var c = 12;if (c++ === 13){alert("condition 1 is true");}if(c === 13){alert("condition 2 is true");}if (++c < 14){alert("condition 3 is true");}if(c === 14){alert("condition 4 is true");} running c2 c4 is correct
// var materialCost = 20000;var laborCost = 2000;var totalCost = materialCost + laborCost;if (totalCost === laborCost + materialCost){alert("The cost equals");} ITs works The costs are equal
// if (true){alert("True");}if (false){alert("False");} its shows true
// if("car" < "cat"){alert("car is smaller than cat");} its working
// -----------------Task 6-------------------
// var total = 300;
// var omarks =+prompt("Enter obtained marks")
// var fr=omarks/total*100
// var grade,remarks
// if(fr>=80){
//     grade = "A1"
//     remarks ="Excellent"
// }
// else if(fr>=70){
//     grade = "A"
//     remarks="Good"
// }
// else if(fr>=60){
//     grade = "B"
//     remarks="You need to improve"
// }
// else {
//     grade = "F"
//     remarks="Sorry"
// }
// document.write("MARKS SHEET <br>")
// document.write("Total Marks: "+total+"<br>")
// document.write("MArks Obtained: "+omarks+"<br>")
// document.write("Percentage: "+fr+"% <br>")
// document.write("Grade: "+grade +"<br>")
// document.write("Remarks: "+ remarks+"<br>" )
// ------------------Task 7---------------------
// var a = +prompt("Enter number to try your luck")
// if(a===10){
//     document.write("Bingo! you won")
// }else if(a+1===10){
//     document.write("You are too close")
// }else{
//     document.write("You lose")
// }
// ------------------Task 8---------------------
// var i =+prompt("Enter num to check is this is divisible by 3 or not");
// if (i % 3 == 0) {
//  alert("divisible by 3");
// } else {
//     alert("divisible not by 3");
// }
// ----------------Task 9----------------------------
// var i =+prompt("Enter num to check is even or odd")
// if(i%2===0){
//     document.write("Even Number")
// }else{
//     document.write("Odd Number")
// }
// ----------------Task 10----------------------------
// var t=+prompt("Enter Temperature")
// if(t>40){
//     document.write("Its too hot outside")
// }else if(t>30){
//     document.write("The Weather today is Normal.")
// }
// else if(t>20){
//     document.write("Today’s Weather is cool.")
// }
// else if(t>10){
//     document.write("OMG! Today’s weather is so Cool.")
// }else{
//     document.write("Out of range")
// }
// ----------------Task 11----------------------------
// var num1=+prompt("ENter First num")
// var num2=+prompt("ENter Second num")
// var op=prompt("ENter Operator")
// if(op==="+"){
//     var result=num1+num2
//     document.write(result) 
// }else if(op==="-"){
//     var result=num1-num2
//     document.write(result) 
// }
// else if(op==="*"){
//     var result=num1*num2
//     document.write(result) 
// }
// else if(op==="/"){
//     var result=num1/num2
//     document.write(result) 
// }
// else if(op==="%"){
//     var result=num1/num2*100
//     document.write(result) 
// }else{
//     document.write("wrong input")
// }
// ----------------Chapter 12-13----------------------------
// ---------Task 1--------------
// var a =prompt("Enter Alphabetic character")
// if (a == a.toLowerCase())
// {
//   document.write(" The character is lowercase")
// }
// else
// {
//     document.write(" The character is Uppercase")
// }
// ---------Task 2--------------
// var num1=+prompt("Enter num 1")
// var num2=+prompt("Enter num 2")
// if(num1>num2){
//     document.write(num1) 
// }else if(num1<num2){
//     document.write(num2) 
// }
// else if(num1===num2){
//     document.write("Equal") 
// }else{
//     document.write("Wrong Input")
// }
// ---------Task 3--------------
// var num1=+prompt("Enter num")
// if(num1>0){
//     document.write("Number is Positve") 
// }else if(num1<0){
//     document.write("Number is Negetive") 
// } else if(num1==0){
//      document.write("Zero") 
//      }else{
//          document.write("wrong")
//      }
// ---------Task 4--------------
// function isVowel(argument){

// 	var text;
// 	var argument = argument.toLowerCase();

//     var vowels = (['a', 'e', 'i', 'o', 'u']);

//     for (var i = 0; i <= vowels.length; i++){
//         if (argument != vowels[i]) {
//             continue;
//         }
//         return true;
//     }
//     return false;
// }

// // See if "A" is a vowel
// var char = prompt("Enter Character");

// if (isVowel(char)) {
// 	document.write(char + " is a vowel");
// } else {
// 	document.write(char + " is not a vowel");
// }
// ---------Task 5--------------
// var inpass=prompt("Enter Password")
// var pass="lion"
// if(inpass===pass){
//     document.write("Correct! The password you entered matches the original password")
// }else{
//     document.write("Wrong password")
// }
// ---------Task 6--------------
// var greeting;var hour = 13;
// if (hour < 18) {greeting = "Good day";}
// else{greeting = "Good evening";}
// ---------Task 7--------------
// var time=+prompt("Enter timein 24 hour format");
// if(time>=0000&&time<1200){
//     document.write("Good Morning")
// }
// else if(time>=1200&&time<1700){
//     document.write("Good Afternoon")
// }
// else if(time>=1700&&time<2100){
//     document.write("Good Evening")
// }
// else if(time>=2100&&time<=2359){
//     document.write("Good Night")
// }
// -----------------------Chapter 14-16-------------------
// -----------Task 1--------------
// var emptyArray = new Array(100);
// -----------Task 2--------------
// var emptyArray = new Array();
// -----------Task 3--------------
// var string;
// string=["hjhg","hgjhg","hjg"]
// -----------Task 4--------------
// var num;
// num=[12,55,54]
// -----------Task 5--------------
// var boo;
// boo=[true,false]
// -----------Task 6--------------
// var mix;
// mix=["asd",54,true,false]
// -----------Task 7--------------
// var qual;
// qual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]

// for (let index = 0; index < qual.length; index++) {
//     document.write(index+1+") "+qual[index]+"<br>");
    
// }
// -----------Task 8--------------
// document.writeln('<br><br>')
// var stdNames = ['Rafay','Masab','Gul']
// var stdScore = [320,230,480]
// var totalMarks = 500;
// document.writeln('Score of '+stdNames[0]+' is '+stdScore[0]+'. Percentage: '+stdScore[0]/totalMarks*100+'%<br>')
// document.writeln('Score of '+stdNames[1]+' is '+stdScore[1]+'. Percentage: '+stdScore[1]/totalMarks*100+'%<br>')
// document.writeln('Score of '+stdNames[2]+' is '+stdScore[2]+'. Percentage: '+stdScore[2]/totalMarks*100+'%<br>')
// -------------Task 9---------------
// document.writeln('<br><br>')
// var colorNames = ['Black','Yellow','Red']
// document.writeln('<h3>My Colors</h3>')
// document.writeln(colorNames+'<br>')

// Task 9a

// colorNames.unshift('White')
// document.writeln('<h3>Add one color in the begining</h3>')
// document.writeln(colorNames+'<br>')

// Task 9b

// colorNames.push('Green')
// document.writeln('<h3>Add one color in the end</h3>')
// document.writeln(colorNames+'<br>')

// Task 9c

// colorNames.unshift('Oranger','Blue','Purple')
// document.writeln('<h3>Add two or more colors in the begining</h3>')
// document.writeln(colorNames+'<br>')

// Task 9d

// colorNames.shift();
// document.writeln('<h3>Delete one color from the begining</h3>')
// document.writeln(colorNames+'<br>')

// Task 9e

// colorNames.pop();
// document.writeln('<h3>Delete one color from the end</h3>')
// document.writeln(colorNames+'<br>')

// Task 9f

// colorNames.splice(2, 0, "Pink", "Voilet", "Grey");
// document.writeln('<h3>Add two or more colors in anywhere</h3>')
// document.writeln(colorNames+'<br>')

// Task 9g

// colorNames.splice(4,6);
// document.writeln('<h3>Delete two or more colors from anywhere</h3>')
// document.writeln(colorNames+'<br>')
// -------------Task 10---------------
// var arr=[320,230,480,120];
// document.write("Scored of Students : "+arr+"<br>")
// var arr1=arr.sort();
// document.write("Ordered Scores of Students : "+arr1)
// -------------Task 11---------------
// var citynames=["Karachi","Lahore","Islamabad","Quetta","Peshawer"]
// var selcities=citynames.slice(2,4);
// // selcities=append.citynames.slice(2,4)
// document.write("Cities List: <br>"+citynames+"<br>")
// document.write("Selected cities List: <br>"+selcities)
// -------------Task 12---------------
// var arr = ["This ", " is ", " my ", " cat"];
// // document.write(arr.join())
// var a=arr.join();
// // var b = a.replace(","," ")
// // document.write(b)
// for (let index = 0; index < a.length; index++) {
//     var b = a.replace(","," ")
//     // document.write(b)
// }
// document.write(b)
// -------------Task 13---------------
// document.writeln('<br><br>')
// var devices = new Array('Keyboard','Mouse','Monitor','Printer')
// document.writeln('Devices:<br>'+devices)
// document.writeln('<br><br>Out:<br>'+devices[0])
// document.writeln('<br>Out:<br>'+devices[1])
// document.writeln('<br>Out:<br>'+devices[2])
// document.writeln('<br>Out:<br>'+devices[3])
// -------------Task14----------------
// document.writeln('<br><br>')
// var devices = new Array('Keyboard','Mouse','Monitor','Printer')
// document.writeln('Devices:<br>'+devices)
// document.writeln('<br><br>Out:<br>'+devices[3])
// document.writeln('<br>Out:<br>'+devices[2])
// document.writeln('<br>Out:<br>'+devices[1])
// document.writeln('<br>Out:<br>'+devices[0])

// Task 15

// document.writeln('<br><br>')
// var phoneManufacturers = ['Apple','Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
// document.writeln('Phone Manufacturers:<br>'+phoneManufacturers+'<br><br>')
// document.writeln('Phone Manufacturers in Dropdown: <br>'+phoneManufacturers[0]+'<br>')
// document.writeln(phoneManufacturers[1]+'<br>')
// document.writeln(phoneManufacturers[2]+'<br>')
// document.writeln(phoneManufacturers[3]+'<br>')
// document.writeln(phoneManufacturers[4]+'<br>')
// document.writeln(phoneManufacturers[5])
// ----------------Chapter 17-20---------------
// Task 1

var aNum1 = [ 
    [], 
    [], 
    [], 
 ];  
 for(var i = 0; i < aNum1.length; i++) { 
     document.write(aNum1[i] + "<br>"); 
}

// Task 2

document.writeln('<br><br>')
var aNum2 = [ 
    [0,1,2,3], 
    [1,0,1,2], 
    [2,1,0,1], 
 ];  
 for(var i = 0; i < aNum2.length; i++) { 
     document.write(aNum2[i] + "<br>"); 
}

// Task 3

document.writeln('<br><br>')
var aNum3 = [1,2,3,4,5,6,7,8,9,10];  
 for(var i = 0; i < aNum3.length; i++) { 
     document.write(aNum3[i] + "<br>"); 
}

// Task 4

document.writeln('<br><br>')
var table = parseInt(prompt('Enter a number to show its multiplication table'))
var lengthOfTable = parseInt(prompt('Enter length multiplication table'))
document.writeln('Multiplication table of '+table)
document.writeln('<br>Length '+lengthOfTable+'<br><br>')
for(var i=1;i<=lengthOfTable;i++){
    document.writeln(table+' * '+i+' = '+table*i+'<br>')
}

// Task 5

document.writeln('<br><br>')
var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
for(var i=0;i<fruits.length;i++){
    document.writeln(fruits[i]+'<br>')
}
document.writeln('<br>')
var number = [0,1,2,3,4]
for(var j=0;j<fruits.length && number.length;j++){
    document.writeln('Elements at index '+number[j]+' is '+fruits[j]+'<br>')
}

// Task 6a

document.writeln('<br><br>')
var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
document.writeln('<b>Counting:</b><br>'+counting+'<br><br>')

// Task 6b

var reverseCounting = [1,2,3,4,5,6,7,8,9,10]
document.writeln('<b>Reverse Counting:</b><br>'+reverseCounting.reverse()+'<br><br>')

// Task 6c

var even = [0,2,4,6,8,10,12,14,16,18,20]
document.writeln('<b>Even:</b><br>'+even+'<br><br>')

// Task 6d

var odd = [1,3,5,7,9,11,13,15,17,19]
document.writeln('<b>Odd:</b><br>'+odd+'<br><br>')

// Task 6e

var series = ['2k','4k','6k','8k','10k','12k','14k','16k','18k','20k']
document.writeln('<b>Series:</b><br>'+series)

// Task 7

var bakery = new Array('cake', 'apple pie', 'cookie', 'chips', 'patties')
var order = prompt('Welcome to ABC Bakery. What do you want to order Sir/Mam?')
var index = [0,1,2,3,4]
for(var i=0;i<bakery.length && index.length ;i++){
    if(order === bakery[i]){
        document.writeln(order+' is available at index '+index[i]+' in our bakery')
        break;
    }
    else{
        document.writeln('We are sorry. '+order+' is not available in our bakery')
        break;
    }
}

// Task 8

document.writeln('<br><br>')
var arr1 = [24, 53, 78, 91, 12]
document.writeln('Array Items: '+arr1)

var arrMax = Math.max(...arr1);
document.writeln('<br>The largest number is '+arrMax)

// Task 9

document.writeln('<br><br>')
var arr2 = [24, 53, 78, 91, 12]
document.writeln('Array Items: '+arr2)

var arrMin = Math.min(...arr2);
document.writeln('<br>The smallest number is '+arrMin)


document.writeln('<br><br>')
var aNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
for(var i =0;i<aNumber.length;i++){
    if(aNumber[i] %5===0){
        document.writeln(aNumber[i])
    }
}












