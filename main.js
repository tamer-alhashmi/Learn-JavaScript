// // console.log('Tamer Ahmed "Elhashmi"');
// // console.log("Elzero Web 'School'");
// // console.log("Elzero Web \"School\"");
// // console.log("Elzero \\ Web \"School\"");
// // console.log("Elzero \nWeb \n\"School\"");

// let a = "We Love";
// let b = "JavaScript";
// // document.write(a +" "+ b);
// console.log(a, b);


// let aa = "Tamer";
// let bb = "Ahmed";
// let cc = "Ibrahim";
// let nu = "1980";
// let data = "21/11/1980";

// document.write(`${a} ${aa} ${bb}`);
// console.log(`${aa}
// ${bb}
// ${cc}`);

// console.log(`${a} ${aa} ${bb}`);

// Lesson 17 Statement 
// let =[titleTest = "Elzero"], [descTest = "Elzero Web School"], [dataTest = "25/10"];
// let markup = `
//     <div class="card">
//         <h3>Hello ${titleTest}</h3>
//         <p>${descTest}</p>
//         <span>${dataTest}</span>
//     </div>
// `;
// document.write (markup .repeat(4));

/*
Arithmetic Operators
+ Addition (concatonet)
- Subtraction
* Multiplication
/ Division
** Exponentiation (ES7)
% Modulus ( Division Remainder)
++ Increment [ Post / Pre ]
-- Decrement [ Post / Pre ]
*/
// let a = 10;
// let b = "20";
// let c = "Tamer";
// console.log(a); // = 10 
// console.log(a++); // = 12 [Post Increment] --> Most log for "a" again to print
// console.log(a); // = 12 
// console.log(a++ + a++); // = 14 [Post Increment] --> Most log for "a" again to print
// console.log(a); // = 12 
// console.log(a); // = 10 
// console.log(++a); // = 11 [ Pre Increment ] Directly printed result 

// console.log (10 + 20);
// console.log(a); // = 11 
// console.log (10 + "Osama");
// console.log(a); // = 11 

// console.log (10 - 20);
// console.log (10 - "Osama"); //NaN

// console.log(10 * 20)
// console.log(10 * -20)

// console.log(10 / 20)
// console.log(10 / -20)
// console.log(10 / 3)

// console.log(2 ** 4); //=>16
// console.log(2 * 2 * 2 * 2); //=>16

// console.log(10 / 2);
// console.log(11 / 2);//remove 1

/* # Lesson 19
- + Unary Plus [Return number if it's not number]
- - Unary Negation [Return number if it's not number + Negates it]
Tests
- normal number
- string number
- string negative Number
- string text
- float
- hexadecimal Number System => 0xFF
- null
- false
- true
*/

// console.log(+100);
// console.log(+"100");
// console.log(+"-100");
// console.log(+"tamer");
// console.log(+"15.5");
// console.log(+0xff);
// console.log(+null);
// console.log(+false);
// console.log(+true);

// console.log(-100);
// console.log(-"100");
// console.log(-"-100");
// console.log(-"tamer");
// console.log(-"15.5");
// console.log(-0xff);
// console.log(-null);
// console.log(-false);
// console.log(-true);


// #20 Type Coercion ( Type Casting)
// let a = 10;
// let b = "20";
// let c = "Tamer";

// console.log( +a); // => 10 --> [ +10 [a = 10]]
// console.log( + +a); //  = 10 --> [ 0 + 10 = 10]
// console.log( ++a); // => 11 --> [ 1 + 10 = 11 ]

// console.log( a + null); //  = 10 --> [ 10 + [null = 0]]
// console.log( a + +null); //  = 10
// console.log( a + -null); //  = 10

// console.log( a + true); //  = 11 --> [ 10 + [true = 1] = 11]
// console.log( a + +true); //  = 11
// console.log( a + ++true); //  = error
// console.log( ++a + true); //  = 12 --> [ 1 + 10 = 11 + 1 = 12 ]
// console.log( a + -true); //  = 9
// console.log( -a -true); //  = -11
// console.log( --a -true); //  = 8 --> [a=10 -1[pre decrement] = 9 - [-true =] -1 = 8 ]
// console.log( --a- -true); //  = 10 --> [ -1 - 10 = 9 + 1 = 10 ]
// console.log( --a- --true); //  error

// console.log( a + false); //  = 10 --> [ 10 + [false = 0] = 10]
// console.log( a + +false); //  = 10
// console.log( a + b); // = 1020 --> [ 10 + ["20" = string ] = 1020 ]
// console.log( a + +b); // = 30 --> [ 10 + [+"20" = "b-number value" = 20 ] = 30 ]
// console.log( a + ++b); // = 31 --> [ 10 + [++"20" = 1+ "b-number value" = 21 ] = 31 ]
// console.log( a - b); // = -10 --> [ 10 - ["b" = 20 ] = -10 ]
// console.log( a - -b); // = 30 --> [ 10 - ["-b" = -20 ] = 30 ]

// console.log(c); // = Tamer --> [ "c" = String ] = Tamer 
// console.log(a + c); // = 10Tamer --> [ 10 + ["c" = String ] = Tamer ]
// console.log(a + +c); // = NaN --> [ Not a Number]
// console.log(a + -c); // = NaN --> [ Not a Number]

// Assignment Operators
// let a = 10;
// let b = "20";
// let c = "Tamer";

// a = a + 20; // = 30 --> [ last value for "a" = 10 + 20 = 30 ]
// a = a + 70; // = 100 --> [ last value for "a" = 30 + 70 = 100 ]
// a +=100; // = 200 --> [ last value for "a" = 100 + 100 = 200 ]
// a -= 50; // = 150 --> [ last value for "a" = 200 - 50 = 150 ]
// a /= 50 // // = 3 --> [ last value for "a" = 150 / 50 = 3 ]
// console.log(a)



// #22 Challenge
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++); // = 31 [[10+1 "pre increment"] = 11 + "[+b numaric value ] [b++ post increment]" = 20] = 31 
// console.log(a +b); // = 32 [cous the value of " b post increment printed " and + 1 to last value "31"] = 32
// console.log(++a);// = 11 [pre increment]
// console.log(++a + +b++);// = 31 [11 [pre increment] + 20 [ + 1 -> post increment]] = 31
// console.log(++a + +b++ + +c++);// = 31 [11 [pre increment] + 20 [ + 1 -> post increment] + 80 [ + 1 -> post increment]] = 111

// console.log(++a + +b++ + +c++ - +a++); // = 100
// console.log(++a + -b + +c++ - - a++ + +a);//  = 94
// console.log(--c + + b + --a * +b++ - +b * a + --a- +true); // = 97

// Ansower console.log 1
// console.log(++a + +b++ + +c++ - +a++);

// (++a) =  11 [Pre Increment -> 10 + 1 = 11 printed ]
// ( + ) =  Plus
// (+b++) = 20  [ (+b) Return Number If it's not Number = 20 ] [ (b++) Post Increment = +1 "Not Printed Yet"] = 20
// (+c++) = 80  [ (+c) Return Number If it's not Number = 80 ] [ (c++) Post Increment = +1 "Not Printed Yet"] = 80
// ( - ) = -
// (+a++) = +11  [ (+a) Return Number If it's not Number = 10 ] [ (a++) Post Increment = +1 "Printed couse it's last value"] = 11
// - Value : 100
// - Explain :  // = 31 --> [[ ++a pre increment ] = 11 + [ +b++ return number + post increment ] = 20 + [ +c++ post increment] = 80 - [ a++ post increment] = 11 ] = 100

// Ansower console.log 2
// console.log(++a + -b + +c++ - - a++ + +a);
// (++a) = 11 // [Pre Increment -> 10 + 1 = 11 printed ]
// (-b)  = -20 // [Get b value as anumbr and give it a -]
// (+c++) = + 80 // [ (+c) Return Number If it's not Number = 80 ] [ (c++) Post Increment = +1 "Not Printed Yet"] = 80
// (- -) = "+"
// (a++) = 11
// (+) = +
// (+a) = +12 [(a)10 + (++a) +1 + (a++) +1] = 12  

// Ansower console.log 3
// console.log(--c + + b + --a * +b++ - +b * a + --a- +true);
// (--c) = 79 [--c = pre decrement = c - 1] = 79 
// (+) = + concatenate 
// (+ b +) = 20 +
// (--a) = 9 [(a)10-(--a)1] = 9
// (*) = *
// (+b++) = 21
// (-) = -
// (+b) = 20
// (*) = *
// (a) = 9
// (+) = +
// (--a) =8  a = 9 - 1 pre decrement
// (-) = -
// (+true) = 1
// console.log(--c + + b + --a * +b++ - +b * a + --a- +true); // = 97
// console.log(79 + 1 +0 + -1 * 1 - 20 * 9 + 8- +1 );
// console.log(9 + 8 - 1);
// console.log(1 - 20);
// console.log(79 + 1 + 0 + -1);
// console.log(16 * -19 * 79);

// - Value : 97

// console.log (+b++ +a)

// var x = 5;
// var y = 10;
// var z = x + y;
// alert(z);

// Challenge 22 Part 2
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(+-d * +e * +g); // 2000
// console.log(-d + ++e*2 + ++f); // 173
// console.log(++e*2 +-d + f + true); // 173

// End of Challenge 22 Part 2


// # 23 Numbers 
/*
- Double Precision
- Syntactic Suger "_"
- e
- **
- With Decimal
- Number + BigInt
- Number Min Vlaue
- Number Max Value
*/
// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(1000000.0);

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_VALUE + 5)

// # 24 Numbers 
/*
Number Methods
- Tow Dots to call a Methods
- tostring()
- tofixed()
- parseint()
- parsefloat()
- isInteger() [ES6] Ecma Script 6
- isNaN() [ES6] Ecma Script 6
*/
// console.log(100..toString()) // 100
// console.log(100.0.toString()) // 100
// console.log(100.1.toString()) // 100.1
// console.log((100).toString());// 100

// console.log(100.455555.toFixed(2)); // 100.46  toFixed
// console.log(100.555555.toFixed(4)); // 101.5556

// console.log(Number("100 Osama")); //NaN
// console.log(+"100 Osama"); //NaN
// console.log(parseInt("100 Osama")); //100
// console.log(parseInt("Osama 100 Osama")); //NaN
// console.log(parseInt("100.500 Tamer")); // 100
// console.log(parseFloat("100.500 Tamer")); // 100.5

// console.log(Number.isInteger("100")); // false هل هو عدد صحيح
// console.log(Number.isInteger(100.500)); // false
// console.log(Number.isInteger(100)); // true

// console.log(Number.isNaN(100)); // false
// console.log(Number.isNaN(100 / "Tamer")); // true


// # 22 End Numbers 

//#25 Math Object
/*
- round()  تقريب الرقم لأقرب رقم صحيح
- ceil()  تقريب الرقم لأعلى قيمه
- floor() تقريب الرقم لأقل قيمه
- min() أقل قيمة
- max() أكبر قيمة
- pow() مثال 2 أس 4 [2 ** 4] = [2, 4 with pow Opject]
- random() لأضهار رقم عشوائ لكل أمر
- trunc()[ES6]  قطع الكسور
*/

// console.log(Math.round(99.2)); //99
// console.log(Math.round(99.5)); //100

// console.log(Math.ceil(99.5)); //100
// console.log(Math.ceil(99.2)); //100

// console.log(Math.floor(99.8)); //99

// console.log(Math.min(99.8, 89, 58, 77, 23, 21, 55)); //21
// console.log(Math.max(99.8, 89, 58, 77, 23, 21, 55)); //99.8

// console.log(Math.pow(2, 4)); // 16

// console.log(Math.random());

// console.log(Math.trunc(99.5))


// # 26  Number Challenge

// let a= 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // 1 - Find smallest number in all variables and return Integer:
// // console.log(Math.trunc(Math.min(a, b, c, d))) // 2

// // // 2- Use Variables a + b One time to get the needed output
// // console.log(Math.trunc(Math.pow(a, 2))); // 10000 

// // 3- Get Integer "2" From d variables with 4 methods
// // console.log(parseInt(d));
// // console.log(Math.floor(d)); //2
// // console.log(Math.round(d)); //2
// // console.log(Math.min(Math.trunc(d))); // 2

// // 4- Use Variables b + d to get this values
// console.log((Math.trunc(b) / 2 - d ** 4).toFixed(2).toString()); // 66.67 => String
// console.log(Math.trunc(b / 2 - d ** 4)); // 67 => Number


// String Method Part 1
/*
- Access With Index
- Access With chatAT
- length
- trim()
- toUpperCase()
- toLowerCase()
- chain Methods
*/

// let theName = "Tamer";
// console.log(theName); // Tamer
// console.log(theName[1]); // a
// console.log(theName[4]); // r
// console.log(theName[5]); // undefined غير موجود
// console.log(theName.charAt(2)); // undefined غير موجود
// console.log(theName.charAt(5)); // Empty value
// console.log(theName.length); // 5

// let theName = "  Tamer  ", theSallary=" $1200.00 ", theDatajoin=" 2010 ";
// console.log(theName.length); // 9
// console.log(theName.trim()); // Tamer Without Spaces
// console.log(theName.toUpperCase()); // TAMER
// console.log(theName.toLowerCase()); // tamer

// // Quik Challenge
// // In One Line Get the Letter m alone and UpperCase 
// console.log(theName.trim().charAt(2).toUpperCase()); // M
// console.log(theName.trim().charAt(3).toUpperCase())
// console.log(theName.trim());
// console.log(theName
//     .trim()
//     .charAt(2)
//     .toUpperCase()
// );
// console.log(theName, theSallary.toString());
// document.write(theName, theSallary, " ", "Data Join", theDatajoin, " ");


// # 28 String Method Part 2
/*
String Methods
- indexOf(Value [Mand], Start [opt] 0)
- lastIndexOf(Value [Mand], Start [opt] Length) 
- slice (Start [Mand], End [opt] Not Include End)
- repeat (Times) [ES6]
- split (Separator [opt], Limit [opt])
*/

// let a= "Elzero Web School"

// console.log(a.indexOf("Web")); // 7
// console.log(a.indexOf("Web", 8)); // -1 --> start search from point 8

// console.log(a.lastIndexOf("Web")); // 7
// console.log(a.lastIndexOf("o")); // 15

// console.log(a.indexOf("r")); // 4
// console.log(a.lastIndexOf("r")); // 4

// console.log(a.slice(7, 10)) // Web
// console.log(a.slice(-6)) // School

// console.log(a.repeat(2))

// console.log(a.split("")) // (17) ['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
// console.log(a.split("", 6)) // (6) ['E', 'l', 'z', 'e', 'r', 'o']
// console.log(a.split(" ")) // (3) ['Elzero', 'Web', 'School']


// # 29 String Method Part 3
/* 
String Method 
- subsrting(start [mand], end [opt] Not Including End) 
---start > End Will Swap
---start < 0 it start from 0
--- use lenght to get last charchter
- substr (start [mand], Charchters To Extract)
---Start >= Lenght = ""
---Negative Start From End
- includes (Value [Mend] , Lenght [OPT] Defult 0) [ES6]
- startsWith(Value [Mand], Lenght [opt] Defult Full Lenght) [ES6]
*/
// let a= "Elzero Web School";

// console.log(a.length); // 17
// console.log(a.substring()); // Elzero Web School
// console.log(a.substring(0, 6)); // Elzero
// console.log(a.substring(0, 10)); // Elzero Web
// console.log(a.substring(a.length - 1)); // l
// console.log(a.substring(a.length - 6)); // School
// console.log(a.substring(a.length - 6, a.length - 3)); // Sch
// console.log(a.substring(a.length - 10, a.length - 7)); // Web
// console.log(a.substring(2)); // zero Web School
// console.log(a.substring(2, 6)); // zero
// console.log(a.substring(7, 10)); // Web
// console.log(a.substring(11, 17)); // School


// console.log(a.length); // 17
// console.log(a.substr()); // Elzero Web School
// console.log(a.substr(0, 6)); // Elzero
// console.log(a.substr(0, 10)); // Elzero Web
// console.log(a.substr(a.length - 1)); // l
// console.log(a.substr(a.length - 6, 6)); // School
// console.log(a.substr(a.length - 6, 3)); // Sch
// console.log(a.substr(a.length - 10, 3)); // Web
// console.log(a.substr(2)); // zero Web School
// console.log(a.substr(2, 4)); // zero
// console.log(a.substr(7, 3)); // Web
// console.log(a.substr(11, 6)); // School

// console.log(a.length);
// console.log(a.includes("Web")); // true
// console.log(a.includes("z")); // true
// console.log(a.includes("z", 5)); // false

// console.log(a.length);
// console.log(a.startsWith("E")); // true هل يبدأ ب
// console.log(a.startsWith("E", 2)); // false
// console.log(a.startsWith("zero", 2)); // true

// console.log(a.endsWith("o")); // false بدون تحديد مسافة البحث سيكون البحث لأخر الجملة مثلا 
// console.log(a.endsWith("o", 6)); // true
// console.log(a.endsWith("ro", 6)); // true
// console.log(a.endsWith("l")); // true



/*
# 30 Strings Challenge Start
    -All Solutiona Must be in one Chain 
    -You can use Concatenate
*/

// let a = "Elzero Web School";

// console.log((a.charAt(2).toUpperCase())+ a.slice(3,6)); // "Zero"
// console.log(a.substr(a.length - 4, 1).toUpperCase().repeat(8)); // HHHHHHHH
// console.log(a.slice(0, 6).split()); // ['Elzero']
// console.log(a.substr(0, 6) + " " + a.substr(11, 17)); // Elzero School
// console.log(a.substr(0,1) .toLowerCase() + (a.slice(1, 16) .toUpperCase()) + a.substr(-1) .toLowerCase()); // eLZERO WEB SCHOOl


// # 31 Compersion Operators
/*
    - == Equal
    - != Not Equal

    - === Identical
    - !== Not Identical

    - > Larg Than
    - >= Larg Than or Equal
    - < Smaller Than
    - <= Smoller Than or Equal
*/
// console.log(10 == "10"); // true --> Comper Value Only
// console.log(-100 == "-100"); // true --> Comper Value Only
// console.log(10 != "10"); // false --> Comper Value Only

// console.log(10 === "10") //false --> Comper Value + Type
// console.log(10 !== "10") //true --> Comper Value + Type

// console.log(10 > "10") //false --> Comper Value + Type
// console.log(10 >= "10") //true --> Comper Value + Type
// console.log(10 < "10") //false --> Comper Value + Type
// console.log(10 <= "10") //true --> Comper Value + Type

// console.log(typeof"Tamer" === typeof"Ahmed");


// # 32 Logical Operators
/*
- ! Not  ================    ==    ==    ==     ===D
- && And  ================    ==  ==     ==     ===D
- || Or  ==================    ====      ==     ==
*/

// console.log(true); // true
// console.log(!true); // false
// console.log(false); // false
// console.log(!false); // true
// console.log(10 == "10"); // true
// console.log(!(10 == "10")); // false

// console.log(10 == "10" && 10 > 8 && 10 < 15); // true
// console.log(10 == "10" || 10 < 15); // true
// console.log(10 === "10" || 10 > 15); // false
// console.log(10 == "10" && 10 > 8 || 10 < 15); // true
// console.log(10 === "10" && 10 > 8 || 10 > 15); // true


// **********************************************************************************************************
// ********************************  #33 & 34  Conditions & Nested Conditions  ******************************
/*
Control Flow
- if
- else if
- else
*/

// let price = 100;
// let discount = "false";
// let discountAmount = 30;
// let Country = "Syria";
// let student = true;

// if (discount === "true") {
//     price -= discountAmount;
// }
// else if (Country === "Egypt" && student === true ) {
//     price -= 60;
// }
// else if (Country === "KSA" && student === true){
// price -= 40;
// }


// console.log(price);

// **********************************************************************************************************
// ********************************  #35 Conditional Ternary Operator  **************************************

// let theName = "Ahmed";
// let theGender = "Female";
// let theAge = 30;

// if (theGender === "Male") {
//     console.log("Mr")
// }
// else if (theGender === "Female") {
//     console.log("Ms")
// } 
// else {
//     console.log("Unknown")
    
// };

// // theGender = "Male" ? console.log("Mr") : console.log("Unknown");
// // theGender = "Male" ? "Mr" : "Unknown";
// let results = theGender === "Male" ? "Mr" : "unknown";
// document.write(results)


// **********************************************************************************************************
// ********************************  #36 Nullish Coalescing Operator And Logical Or   ****************************

/*
Logical Or ||
 -- Null + uNDEFIND + Any False Value
 Nullish Coalescing Operator ??
  -- Null + Undefined
*/

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = "tamer";
// console.log(`The Price Is ${price}`)
// document.write(`The Price Is ${price}`)

// console.log(`The Price Is ${price ||200}`) 
// document.write(`The Price Is ${price ||200}`)

// console.log(`The Price Is ${price ??200}`) 
// document.write(`The Price Is ${price ??200}`)


// **********************************************************************************************************
// ********************************         # 37 If Condition Challenge          ****************************

// Tasks 1

// let theAge = "23";

// theAge < 10 
// ? console.log(10) 
// : theAge >= 10 && theAge <= 40 
// ? console.log("10 to 40") 
// : theAge > 40 
// ? console.log("> 40") 
// : console.log("Unknown");

// Tasks 2

// let st = "Elzero Web School";

// if (((st.length*2).toString()) === "34"){
//     console.log("Good");
// }

// // W Position May Change

// if (st[st.indexOf("W")].toLowerCase() === "w"){
//     console.log("Good");
// }


// if (st.length !== "string"){
//     console.log("Good");
// }

// if (typeof(st.length) === "number"){
//     console.log("Good");
// }

// if (st.slice(0,6)+st.slice(0,6) === "ElzeroElzero"){
//     console.log("Good");
// }

// **********************************************************************************************************
// ********************************         # 38 Switch Statement           *********************************

// let day = "lk"; // Most be the Same Type 

// switch (day) {
//     case 0:
//         console.log("Saturday");
//         break;
//     case 1:
//     case 3:
//     case 5:
//         console.log("Monday");
//         break;
//     case 2:
//     case 4:
//     case 6:
//         console.log("Wednesday");
//         break;

//     default:
//         console.log("Unknown day");
//         break;
// }

// **********************************************************************************************************
// ********************************         # 39 If & Switch Challenge           ****************************

// Switch Challenge

let job = "Manager";
let salary = 0;

if (job === "Manager"){
    salary = 8000;
}else if (job ==="IT" || job === "Support"){
    salary = 6000;
}else if (job ==="Developer" || job === "Designer") {
    salary = 7000
}else {
    salary = 4000;
}
console.log(job + " Sallary Is  " + "$"+salary);

switch (job) {
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Support":
        salary = 6000;
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        break;
    default:
        salary = 4000;
        break;
};
console.log(job + " Sallary Is  " + "$"+salary);

// Tasks 2 # If Challenge

let holidays = 3;
let money = 0;
let print = `I'm a ${job} My Salary Is ${salary} My Total Monthly is ${Number(salary + money)}`;

switch (holidays) {
    case 0:
        money = 5000
        console.log(print)
        break;
    case 1:
    case 2:
        money = 3000
        console.log(print)
        break;
    case 3:
        money = 2000
        console.log(print)
        break;
    case 4:
        money = 1000
        console.log(print)
        break;
    case 5:
        money = 0
        console.log(print)
        break;

    default:
        money = 0
        console.log(print)
        break;
};


if (holidays === 0) {
    money = 5000
    console.log(print)
} 
else if (holidays === 1 || 2) {
    money = 3000
    console.log(print)} 
else if (holidays === 3) {
    money = 2000
    console.log(print)} 
else if (holidays === 4) {
    money = 1000
    console.log(print)}
else if (holidays === 5) {
    money = 0
    console.log(print)}
else {
    money = 0
    console.log(print)};

    