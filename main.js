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
// console.log(a.substring(0, 1)); // Elzero Web School
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

// let job = "Manager";
// let salary = 0;

// if (job === "Manager"){
//     salary = 8000;
// }else if (job ==="IT" || job === "Support"){
//     salary = 6000;
// }else if (job ==="Developer" || job === "Designer") {
//     salary = 7000
// }else {
//     salary = 4000;
// }
// console.log(job + " Sallary Is  " + "$"+salary);

// switch (job) {
//     case "Manager":
//         salary = 8000;
//         break;
//     case "IT":
//     case "Support":
//         salary = 6000;
//         break;
//     case "Developer":
//     case "Designer":
//         salary = 7000;
//         break;
//     default:
//         salary = 4000;
//         break;
// };
// console.log(job + " Sallary Is  " + "$"+salary);

// // Tasks 2 # If Challenge

// let holidays = 3;
// let money = 0;
// let print = `I'm a ${job} My Salary Is ${salary} My Total Monthly is ${Number(salary + money)}`;

// switch (holidays) {
//     case 0:
//         money = 5000
//         console.log(print)
//         break;
//     case 1:
//     case 2:
//         money = 3000
//         console.log(print)
//         break;
//     case 3:
//         money = 2000
//         console.log(print)
//         break;
//     case 4:
//         money = 1000
//         console.log(print)
//         break;
//     case 5:
//         money = 0
//         console.log(print)
//         break;

//     default:
//         money = 0
//         console.log(print)
//         break;
// };


// if (holidays === 0) {
//     money = 5000
//     console.log(print)
// } 
// else if (holidays === 1 || 2) {
//     money = 3000
//     console.log(print)} 
// else if (holidays === 3) {
//     money = 2000
//     console.log(print)} 
// else if (holidays === 4) {
//     money = 1000
//     console.log(print)}
// else if (holidays === 5) {
//     money = 0
//     console.log(print)}
// else {
//     money = 0
//     console.log(print)};


// *******************************************************************************************************
// ********************************         # 40 Array Big Introduction       ****************************

// let myFriends = ["Ahmed", "Khaled", "Hisham", ["Tamer", "Moataz", "Ehab"]];

// console.log(`Hello ${myFriends[1]}`); // Hello Khaled
// console.log(`Hello ${myFriends[1][0]}`); // Hello K
// console.log(`${myFriends[1][2]}`); // a
// console.log(`Hello ${myFriends[2]}`); // Hello Hisham
// console.log(`Hello ${myFriends[3]}`); // Hello Tamer,Moataz,Ehab

// console.log(myFriends); //(4) ['Ahmed', 'Khaled', 'Hisham', Array(3)]
// myFriends[1] = "Sami";
// console.log(myFriends);
// myFriends[3][2] = "Nour Eldein";
// console.log(myFriends); // (4) ['Ahmed', 'Sami', 'Hisham', Array(3)]


// // To Be Sure If Module Is Array Using "Array.isArray"
// console.log(`To Be Sure If Module Is Array Using "Array.isArray"`);
// console.log(Array.isArray(myFriends)); //true To Know if (myFriens) is Array Or No

// *******************************************************************************************************
// ********************************         # 41 Using Length With Array       ****************************

// let myFriends = ["Ahmed", "Khaled", "Hisham", ["Tamer", "Moataz", "Ehab"]];

// console.log(myFriends.length); // 4
// myFriends[4] = "Gamal";
// console.log(myFriends);// (5) ['Ahmed', 'Sami', 'Hisham', Array(3), 'Gamal']
// myFriends[myFriends.length] = "Ashraf"; 
// console.log(myFriends); // (6) ['Ahmed', 'Sami', 'Hisham', Array(3), 'Gamal', 'Ashraf']

// // To update last array in Module
// myFriends[myFriends.length - 1] = "Samer";
// console.log(myFriends);

// // To Print Aspasific array without other "To Control The Module"
// myFriends.length = 3;
// console.log(myFriends); // (3) ['Ahmed', 'Sami', 'Hisham']
// myFriends.length = 2;
// console.log(myFriends); // (2) ['Ahmed', 'Sami']


// *******************************************************************************************************
// ********************************         # 42 Add And Remove From Array       *************************

// let myFriends = ["Ahmed", "Khaled", "Hisham", ["Tamer", "Moataz", "Ehab"]];

// myFriends Module is set before # 40

// console.log(myFriends); // (4) ['Ahmed', 'Khaled', 'Hisham', Array(3)]

// // Use ** unshift ** to add array to the Start of Module
// console.log(" Use ** unshift ** to add array to the Start of Module")
// myFriends.unshift ("Radi", "Nabil"); 
// console.log(myFriends); // (6) ['Radi', 'Nabil', 'Ahmed', 'Sami', 'Hisham', Array(3)]

// // Use ** push ** to add array to the End of Module
// console.log("Use ** push ** to add array to the End of Module")
// myFriends.push ("Randa", "Zinab"); // (6) (8) ['Radi', 'Nabil', 'Ahmed', 'Sami', 'Hisham', Array(3), 'Randa', 'Zinab']
// console.log(myFriends);
// console.log(myFriends.length)

// // myFriends.shift (); 
// // console.log(myFriends); // (6) (8) ['Radi', 'Nabil', 'Ahmed', 'Sami', 'Hisham', Array(3), 'Randa', 'Zinab']

// // To Remove First Array From Module Using ".shift "

// console.log(`To Remove First Array From Module Using ".shift "`)
// let  first = myFriends.shift (); // To remove first array "Using Shift"
// console.log(first); // Nabil
// console.log(`First Name Is ${first}`); //First Name Is Nabil
// console.log(myFriends); //  (7) ['Nabil', 'Ahmed', 'Sami', 'Hisham', Array(3), 'Randa', 'Zinab']
// console.log(myFriends.length); // 7

// // To Remove Last Array From Module Using ".pop "

// console.log(`To Remove Last Array From Module Using ".pop "`)
// let  last = myFriends.pop (); // To remove last array "Using pop"
// console.log(last); // Zinab
// console.log(`First Name Is ${last}`); // First Name Is Zinab
// console.log(myFriends); // (6) ['Nabil', 'Ahmed', 'Sami', 'Hisham', Array(3), 'Randa']
// console.log(myFriends.length); // 6

// *******************************************************************************************************
// ********************************             # 43 Search in Array  index $ lastIndexOf           *************************

// console.log(myFriends); //(4) ['Ahmed', 'Khaled', 'Hisham', Array(3)]
// console.log(myFriends.indexOf("Hisham")); // 2
// console.log(myFriends.indexOf("Tamer")); // -1

// let addFirst = myFriends.push("Ahmed") ;
// console.log(myFriends); // (5) ['Ahmed', 'Khaled', 'Hisham', Array(3), 'Ahmed']

// console.log(myFriends.indexOf("Ahmed")); // 0 Search by a spacific point
// console.log(myFriends.indexOf("Ahmed", 2)); // 4 Search by a spacific point
// console.log(myFriends.lastIndexOf("Ahmed")); // 4 Search by a spacific point
// console.log(myFriends.lastIndexOf("Ahmed", -2)); // 0 Search by a spacific point
// if (myFriends.lastIndexOf("Osama") === -1);
// console.log("Not Found"); // Not Found
// console.log(myFriends.indexOf("Osama")); // -1 
// console.log(myFriends.lastIndexOf("Osama")); // -1

// *******************************************************************************************************
// ********************************             # 44 Sorting Array          *************************
// let myFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];
// console.log(myFriends); // (10) [10, 'Sayed', 'Mohamed', '90', 1000, 100, 20, '10', -20, -10]
// console.log(myFriends.sort());  // (10) [-10, -20, 10, '10', 100, 1000, 20, '90', 'Mohamed', 'Sayed']
// console.log(myFriends.reverse());  // (10) ['Sayed', 'Mohamed', '90', 20, 1000, 100, '10', 10, -20, -10]
// console.log(myFriends.sort().reverse()); // (10) ['Sayed', 'Mohamed', '90', 20, 1000, 100, '10', 10, -20, -10]

// *******************************************************************************************************
// ********************************             # 45 Array Method Slicing           *************************
// let myFriends = ["Ahmed", "Sayed", "Ali" , " Osama", "Tamer", "Ameer"];
// console.log(myFriends); // (6) ['Ahmed', 'Sayed', 'Ali', ' Osama', 'Tamer', 'Ameer']
// // يجب تحديد بداية ونهاية ال slice
// console.log(myFriends.slice()); // (6) ['Ahmed', 'Sayed', 'Ali', ' Osama', 'Tamer', 'Ameer'] Start Slicing From index 0 
// console.log(myFriends.slice(2)); // (4) ['Ali', ' Osama', 'Tamer', 'Ameer'] Start slicing from index 2
// console.log(myFriends.slice(1, 3)); // (2) ['Sayed', 'Ali'] Not Incloding The End Of Lenght
// console.log(myFriends.slice(-3)); // (3) [' Osama', 'Tamer', 'Ameer']
// console.log(myFriends.slice(1, -2)); // (3) ['Sayed', 'Ali', ' Osama']
// console.log(myFriends); // (6) ['Ahmed', 'Sayed', 'Ali', ' Osama', 'Tamer', 'Ameer']
// // *********** VII ************
// myFriends.splice(0, 0, "Kareem", "Tarek");//(0) = Start Index & (0) = What do you want to Delete & Then >>> What you need to Add to array "Kareem", "Tarek"
// console.log(myFriends) ; // (8) ['Kareem', 'Tarek', 'Ahmed', 'Sayed', 'Ali', ' Osama', 'Tamer', 'Ameer']
// console.log(myFriends.splice(0, 1)) ; // ['Kareem']
// console.log(myFriends); // (7)  ['Tarek', 'Ahmed', 'Sayed', 'Ali', ' Osama', 'Tamer', 'Ameer']
// console.log(myFriends.splice(0, 1)) ; // ['Tarek']
// console.log(myFriends.splice(-2, 1)) ; // ['Tamer']
// console.log(myFriends);(5) ['Ahmed', 'Sayed', 'Ali', ' Osama', 'Ameer']

// *******************************************************************************************************
// ********************************             # 46 Joining Array          *************************
// let myFriends = ["Ahmed", "Sayed", "Ali" , " Osama", "Tamer", "Ameer"];
// let myNewFriends = ["Hisham", " Ehab"];
// let schoolFriends = ["Moaataz", "Nour eldien"];
// console.log(myFriends); // (6) ['Ahmed', 'Sayed', 'Ali', ' Osama', 'Tamer', 'Ameer']
// let allFriends = myFriends.concat(myNewFriends, schoolFriends)
// console.log(allFriends); // (10) ['Ahmed', 'Sayed', 'Ali', ' Osama', 'Tamer', 'Ameer', 'Hisham', ' Ehab', 'Moaataz', 'Nour eldien']
// console.log(allFriends.join(" | ")); // Ahmed | Sayed | Ali |  Osama | Tamer | Ameer | Hisham |  Ehab | Moaataz | Nour eldien

// *******************************************************************************************************
// ********************************             # 47 Array Challange          *************************
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham" , "Osama", "Gamal", "Ameer"];
// // console.log(my.slice(zero, +counter));
// console.log(my.slice(zero, ++counter).reverse()); // (4) ['Osama', 'Elham', 'Mazero', 'Ahmed']
// console.log(my.slice(++zero, --counter).reverse()); // (2) ['Elham', 'Mazero']
// console.log(my.unshift("Elzero"), my.slice(--zero, ++zero)); // ['Elzero']
// console.log(my[--zero].charAt(++counter)+my[zero].charAt(++counter).toUpperCase()); // rO

// *******************************************************************************************************
// ********************************             # 48 Loop -  for and concebt of Loop          *************************
/*
Loop
- For [1] [2] [3] {
    //Block of code
}
*/
// for (let i = 0; i < 10; i++ ){
//     console.log(i)
// }

// *******************************************************************************************************
// ********************************             # 49 Looping in Sequance          *************************
// let myFriends = [1, 2, "Osama", "Tamer", 5,  "Ehab", 6, 8, "Hisham", "Moataz"];
// // console.log(myFriends[0]);
// // console.log(myFriends[1]);
// // console.log(myFriends[2]);
// // console.log(myFriends[3]);
// // console.log(myFriends[4]);
// let onlyNames = []
//     for (let i = 0; i < myFriends.length; i++){
//     console.log(myFriends[i]);
// }
// for (let i =0; i < myFriends.length; i++){      
//     if (typeof myFriends[i] === "string"){
//         onlyNames.push(myFriends[i]);
//     }
// }
// console.log(onlyNames); // (5) ['Osama', 'Tamer', 'Ehab', 'Hisham', 'Moataz']

// ********************************************************************************************
// ********************************          # 50 Nasted Loop         *************************

/*
Loop
- Nested Loops
*/

// let products = ["Keybord", "Mouse", "Pen", "Pad", "Monitor"];
// let color = ["Red", "Green", "Black"];
// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++){
//     console.log("=" .repeat(15))
//     console.log(`# ${products[i]}`);
//     console.log("=" .repeat(15))
//     console.log(`- Colors: `)
//     for (let j = 0; j <color.length; j++){
//         console.log(color[j]);
//     }
//     console.log("- Models: ")
//     for (let m = 0; m < models.length; m++){
//         console.log(models[m]);
//     }
// }


// ********************************************************************************************
// ********************************          # 51 Loop Control        *************************
/*
Loop
- Break
- Continue
- Lable
*/

// let products = ["Keybord", "Mouse", 10, 21, "Pen", 15, 20, "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let models = [2020, 2021, "2022 No Stock", 2023];

// mainLoop: for (let i = 0; i < products.length; i++){        // add a lable to Loop
//     if (typeof products[i] === "number"){
//         continue; // ********************************       إلغاء عرض بعض القيم  Loop - continue
//     }
//     console.log(`# | ${products[i]}`);
//     console.log("=" .repeat(15));
//     nestedLoop: for (let c = 0; c < colors.length; c++){    // add a lable to Loop
//         console.log(`- ${colors[c]}`);
//     }
//     for (let m = 0; m < models.length; m++){
//         console.log(models[m]);
//     }
//     if (products[i] === "Pen"){
//         break mainLoop; // ********************************           إيقاف فى مكان محدد Loop - break
//     }    
// }


// ********************************************************************************************
// ********************************          # 52 Loop Advanced Example        *************************

// let products = ["Keybord", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0
// for (; i < products.length; ){
//     console.log(products[i]);
//     i++;
//     if (i === products.length) break;
// }

// ********************************************************************************************
// ********************************          # 53 Loop Practice add products to page        ******************

// let products = ["Keybord", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 5;

// document.write(`<h1 class="p-10 bord-b-eee c-blue txt-shad w-fit d-flex ">Show ${showCount} Products:</h1>`);

// for (let i=0; i < showCount; i++){
//     document.write(`<div class="p-10">`)
//     document.write(
//         `<h3 class="fs-25 bord-b-eee w-fit pb-10 flex-just-c">
//         <span class="mr-10 c-white fs-20 flex-just-c bg-blue rad-half w-30 h-30">${i+1}
//         </span> ${products[i]}
//         </h3>`
//         )
//     for (let c = 0; c < colors.length; c++){
//         document.write(`<p class="p-10">${colors[c]}</p>`) // As A Listed Loop
//     }
//     document.write(`<p class="p-10">${colors.join(" | ")}</p>`) // As A String
//     document.write(`</div>`)
// }

// ********************************************************************************************
// ********************************          # 54 Loop While       ******************

// let products = ["Keybord", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let index = 0;

// while (index < products.length) {
//     console.log(products[index]);
//     index += 1;
// }


// ***************************************************************************************
// ********************************          # 55 Loop Do / While       ******************

// let products = ["Keybord", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;
// do {
// console.log(i);
// i++;
// } while (false) ;
// console.log(i);


// ***************************************************************************************
// ********************************          # 56 Loop Challenge       ******************

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Rehab", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Ragab", "Rawda", "Othman", "Amany", "Samia", "Rami", "Aaseer", "Onel", "Sedan"];
// let counter=0;

// // ************ First Ansower
// adminLoop: for (let i=0; i < myAdmins.length; i++){
// if (myAdmins[i] === "Stop"){break adminLoop;}
//     document.write(`<h2 class="p-10 bord-b-eee c-blue txt-shad w-fit d-flex ">Team [${i+1}] Admin is "${myAdmins[i]}"</h2>`);
//     document.write(`<h3 class="p-10 mb-0">Team members :</h3> `);
//     let counter=0;
//     empLoop: for (let p = 0; p < myEmployees.length; p++){
//         if (myAdmins[i][0] === myEmployees[p][0]){
//             document.write(`<div class=" ml-10">
//             <p class="mt=0">[${++counter}] ${myEmployees[p]}</p>
//             </div>`);            
//             counter +=0
//         }
//     }
// };

// ************ Another Ansower

// adminLoop: for (let i=0; i < myAdmins.length; i++){
//     if (myAdmins[i] === "Stop"){
//         break adminLoop;}
//         document.write(`<div class="bg-eee rad-6 mt-20 bord-b-5-alt-blue w-fit txt-c d-flex">
//         <h2 class="p-10 c-blue txt-shad w-fit d-flex ">Team [${i+1}] Admin is "${myAdmins[i]}"</h2>
//         </div>`)
//         document.write(`<div>
//         <h3 class="p-10 mb-5 mt-5">Team members :</h3>
//         </div>`);
//             empLoop: for (let p = 0; p < myEmployees.length; p++){
//                 if (myAdmins[i][0] === myEmployees[p][0]){
//                     document.write(`<div class=" ml-10">
//                     <p class="mt=5 mb-10">[${++counter}] ${myEmployees[p]}</p>
//                     </div>`);
//                     counter +=0
//                 }
//             }
// }


// ***************************************************************************************
// *************     # 57 & 58 Function Basic And Advsnced Examples      **************
/*
Function
- What is Function ?
- User-Defined vs Buikt in
- Syntax + Basic Usage
- Example from real life
- Practical Examply
- Function With " If, for"
*/

// function sayHallo(userName, age){
//     if (age < 20){
//         console.log(`Heloo ${userName} This App is not suitable for you [age under 20]`)
//     }else {
//         console.log(`Hello ${userName} Your Age Is ${age}`);
//     }
// }
// sayHallo("Tamer", 42);
// sayHallo("Nancy", 32);
// sayHallo("Ashraf", 19);
// sayHallo("Ahmed", 20);

// function generatYears(start, end, exclude){
//     for (let i = start; i<= end; i++){
//         if (i === exclude){
//             continue;
//         }else {
//             console.log(i);
//         }
//     }
// }

// generatYears(1980, 2023, 2020)



// ***************************************************************************************
// ********************************          # 59 Function return and uses cases      ******************

/*
Function
- Return
- Automatic Semicolon [No line termenator allowed]
- Interruptting
*/

// function generatYears(start, end){
//     for (let i = start; i <= end; i++){
//         console.log(i);
//         if (i === 15){
//             return;
//         }
//     };
// }
// generatYears (10, 20);


// ***************************************************************************************
// ********************************          # 60 Function Defult Parameters      ******************

/*
Function
- Default functio parameters
- Function parameters default [Undefined]
- Old Strategies [Condition + Logical Or]
- ES6 Method
*/
// ************************************** ( 1 )

// let lableStyle = `class="fs-20 d-flex p-10 bg-eee rad-6 mt-20 bord-b-5-alt-blue w-fit txt-c d-flex"`
// function sayHallo (userName, age){
//     if (age < 20){
//         document.write(`<div ${lableStyle}> Hello ${userName} This app is not suitable for you</div>`)
//     }else if (age === undefined){
//         document.write(`<div ${lableStyle}>Hello ${userName} You age is<span class="c-red fs-20">[ Unknown ] App is not avilable for you</span> </div>`);
//     }
//     else {
//         document.write(`<div ${lableStyle}>Hello ${userName} You age is<span class="c-red fs-20">[ ${age} ]</span> App is avilable for you</div>`)
//     }
// }
// sayHallo("Tamer", 42);
// sayHallo("Ahmed", 25);
// sayHallo("Nancy", 20);
// sayHallo("Medhat", 19);
// sayHallo("3esam");
// sayHallo("Ashraf", 30);

// ****************************************** ( 2 )

// function sayHallo(userName, age) {
//     // if (age === undefined){
//     //     age = "Unknown"
//     // }
//     age = age || "unknown"   // True to false pattern
//     return `Hello ${userName} Your age is ${age}`;
// }
// console.log(sayHallo("Osama")); // Hello Osama Your age is أكتب سنك يااااد

// function sayHallo(userName, age){
//     // age = age || "Unknown";  // True to false pattern
//     if (age === undefined){
//         age = "Unknown"
//     }
//     return `Hello ${userName} Your Age is ${age}`
// }
// console.log(sayHallo ("Tamer")) // Hello Tamer Your Age is Unknown

// *************************** ( 3 ) To Make default Parameters ****************

// function sayHallo(userName = "Unknown", age = "Unknown"){ //  <<<<<<<< Put default value in Function Parameters
//     return `Hello ${userName} Your Age is ${age}`
// }
// console.log(sayHallo ()); // Hello Unknown Your Age is Unknown


// ***************************************************************************************
// ********************************          # 61 Rest Parameters      ******************
/*
Function 
- Rest Parameter
- Only One Allowed
- Must br last element
*/

// function calc (num1, num2, num3) {
//     return num1 + num2 + num3
// }
// *********** هنا عدد Argument سيكون غير محدود
// console.log(calc (10, 20)); // 30
// console.log(calc (10, 20, 25)); // 55

//****************************************** OR *********************************

// Use Rest Parameters ******** يمكنك السماح لل "فنكشن " بأستقبال أي عدد من "الأرجيومنت" هنا********
// -Make Array of function

// function calc(...numbers){
//     // console.log(Array.isArray(numbers));
//     let result= 0;
//     for (let i = 0; i <numbers.length; i++){
//         result += numbers[i];
//     }
//     return `Final Results is ${result}`;
// };
// console.log(calc(10, 20, 30, 50, 105)); // Final Results is 215

// ***************************************************************************************
// ********************************          # 62 Function Advanced Practice      ******************

/*
Function Advanced Practice 
- Parameters
- Default
- Rest
- Loop
- Condition
*/

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}</p>`);
//   if (show === "Yes"){
//     if (sk.length > 0){
//             document.write(`<p>Skills : ${sk.join(" | ")}</p>`);
//     }else {
//             document.write(`<p>Skills: No Skills</p>`);
//     }
//   }else {
//     document.write(`<p>Skills is Hidden</p>`);
//   }
//     document.write(`</div>`);
// }
// showInfo("Tamer", 42, 15, "No", "HTML", "CSS");

// ***************************************************************************************
// **********          # 63 Random Argument Function Challenge      *******

// function showDetails(a, b, c) {
//   document.write(`<div>`)
//   for (let i = 0; i < arguments.length; i++) {
//     typeof arguments[i] === 'string'
//     ? (us = arguments[i])
//     : typeof arguments[i] === 'number'
//     ? (ag = arguments[i])
//     : typeof arguments[i] === 'boolean' && arguments[i] === true
//     ? (statue = 'Available')
//     : (statue = 'Not Available')
//   }
//   document.write(`<h3>Hello " ${us} ", Your Age Is [ ${ag} ], You Are ${statue} To Hire</h3>`,)
//   document.write(`</div>`)
// }

// showDetails(50, 'Ehab', true) // Hello " Ehab ", Your Age Is [ 50 ], You Are Available For Hire
// showDetails(true, 47, 'Hisham') // Hello " Hisham ", Your Age Is [ 47 ], You Are Available For Hire
// showDetails('Tamer', 43, true) // Hello " Tamer ", Your Age Is [ 43 ], You Are Available For Hire
// showDetails(false, 'Mo3taz', 36) // Hello " Mo3taz ", Your Age Is [ 36 ], You Are Not Available For Hire


// ***************************************************************************************
// **********          # 64 Anonymous Function And Practice     *******
/*
Function
- Anonymous Function
- Calling Named Function vs Anonymous Function
- Argument To Other Function
- Task Without Namw
- SetTimeout
*/

// function calc (num1, num2, num3){
//   return num1 + num2 + num3;
// }
// console.log(calc(10, 20, 30));



// ***************************************************************************************
// **********          # 65 Return Nastrd Function     *******
/*
Function
- Function Inside Function
- Return Function
*/
// Examlpe 1
// function sayMassage (fName, lName) {
//   let massage = 'Hello';
// Nasted Function ********************************
//   function concatMsg (){
//     massage = `${massage} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return massage;
// }
// console.log(sayMassage("Tamer", "Elhashmi"));


// Examlpe 2
// function sayMassage (fName, lName) {
//   let massage = 'Hello';
// // Nasted Function ********************************
//   function concatMsg (){
//     return `${massage} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }
// console.log(sayMassage("Tamer", "Elhashmi"));


// // Examlpe 3
// function sayMassage (fName, lName) {
//   let massage = 'Hello';
//   // Nasted Function ********************************
//   function concatMsg (){
//     function getFullname (){
//       return `${fName} ${lName}`
//     }
//     return `${massage} ${getFullname()} `;
//   }
//   return concatMsg();
// }
// console.log(sayMassage("Tamer", "Elhashmi"));



// ***************************************************************************************
// **********          # 65 Arrow Function Sentax    *******

/*
Function
- Arrow Function
-- Regular vs Arrow [Param + No Param]
-- Multiple Lines
*/

// function print(){
//   return 10;
// }
// console.log(print());

// ***************************** OR

// let print = function (){
//   return 10;
// }
// console.log(print());


// ***************************** Use Regular Function if we have Multiable Statement .
// let print = function (){
  //   return 10;
  // };
  
  // ***************************** Use Arrow Function if we have one Statement Using ().
  // let print =  () => 10;
  
  // console.log(print());
  // ***************************** Use Arrow Function if we have one Statement Using _.

  // let print = function (num){
  //   return num;
  // };

  // console.log(print(100, 50));

  // ********************* OR
  
  // ********************* Thin using Arrow function if you have One Parameters without ()
  // let print = num => num; 
  
  // console.log(print(100, 50));

  // ********************* Thin using regular function if you have multiable Parameters 
  
  // let print = function (num1, num2){
    //   return num1 + num2;
    // };
    // console.log(print(100, 50));

  // ********************* OR You can using Arrow function if you have Multiable Parameters You Must Using (Parameters)
  
  // let print =  (num1, num2) => num1 + num2;
  
  // console.log(print(100, 50));

// *************************** # 67 Scope Global and Local Scope *************************************

// Using Globle variables
// var a = 1;
// let b = 2;
// function showText (){
//   // Using local variables
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From local ${a}`);
//   console.log(`Function - From local ${b}`);
// }

// console.log(`From Globle ${a}`);
// console.log(`From Globle ${b}`);

// showText();

// *************************** # 67 Scope Block
// Block Scope
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:

// Example
// {
//   let x = 2;
// }
// // x can NOT be used here

// ****************************************

// Variables declared with the var keyword can NOT have block scope.

// Variables declared inside a { } block can be accessed from outside the block.

// Example
// {
//   var x = 2;
// }
// // x CAN be used here

// ****************************************

// Local Scope
// Variables declared within a JavaScript function, become LOCAL to the function.

// Example
// // code here can NOT use carName

// function myFunction() {
//   let carName = "Volvo";
//   // code here CAN use carName
// }

// // code here can NOT use carName

// Local variables have Function Scope:

// They can only be accessed from within the function.

// ****************************************

// A variable declared outside a function, becomes GLOBAL.

// Example
// let carName = "Volvo";
// // code here can use carName

// function myFunction() {
// // code here can also use carName
// }

// ****************************************

// Using Globle variables
// var a = 1;
// let b = 2;
// function showText (){
//   // Using local variables
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From local ${a}`);
//   console.log(`Function - From local ${b}`);
// }

// console.log(`From Globle ${a}`);
// console.log(`From Globle ${b}`);

// showText();

// ****************************************

// A global variable has Global Scope:

// All scripts and functions on a web page can access it. 

// JavaScript Variables
// In JavaScript, objects and functions are also variables.

// Scope determines the accessibility of variables, objects, and functions from different parts of the code.

// ****************************************

// Automatically Global
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

// This code example will declare a global variable carName, even if the value is assigned inside a function.

// Example
// myFunction();

// // code here can use carName

// function myFunction() {
//   carName = "Volvo";
// }

// ************************* Challenge 70 

// let names = function () {
//   let data = ""
//   return `String [${data}], => Done`;
// };
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// ************ 71 - Higher Order Function ******************************

// let myNums = [1, 2, 3, 4, 5, 6];
// let newArray = [];

// for (i = 0; i <myNums.length; i++){
//   newArray.push(myNums[i] + myNums[i]);
// }
// console.log(newArray);
// same Idea With Map

// let adSelf = myNums.map(function (element, index, ar){
//   console.log(`Current element => ${element}`);
//   console.log(`Current index => ${index}`);
//   console.log(`Array => ${ar}`);
//   console.log(`This => ${this}`);
// // return Element + element;
// }, 10);

// ******************  Or Use Arrow Function ***********
// let adSelf = myNums.map((a) => a + a);


// let myFriends = ["Tamer", "Ahmed", "Ashraf", "Khaled"];
// let newFreinds = []
// for (i = 0; i < myFriends.length; i++){
//   newFreinds.push(myFriends[i]);
// };
// console.log(newFreinds);

// let adSelf = myFriends.map(function(element, index, ar){
//   console.log(`current element => ${element}`)
//   console.log(`current index => ${index}`)
//   console.log(`array => [${ar}]`)
//   console.log(`This => ${this}`)
//   return element
// }, 20);
// let adSelf = myFriends.map((a) => a);
// console.log(adSelf);

// ************ 71 - Higher Order Function Map Practice ******************************

/*
Map
- Use Ternary Condetional Operator (use If Shorthand) ************** VII
- Swap Cases
- Inverted Numbers
- Ignore Boolean Vlue
*/

// let swappingCases = "eLZERo"; // ElzerO
// let invertedNumbers = [1, -10, -20, 100, -30]; // (5) [-1, 10, 20, -100, 30]
// let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     return ele === ele.toUpperCase()
//       ? ele.toLowerCase()
//       : ele.toUpperCase();
//   })
//   .join("");
// console.log(sw);

// let sw = swappingCases.split("").map(function (ele){
//   return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase(); 
// }).join("");
// console.log(sw);

// let inv = invertedNumbers
// .map(function(ele){
//   return -ele;
// });
// console.log(inv);

// let ign = ignoreNumbers
// .split("")
// .map(function(ele){
//   return isNaN(parseInt(ele)) ?  ele: "";
// }).join("");
// console.log(ign);


// ************ 73 - Higher Order Function Filter ******************************

// let friends = ["Ahmed", "Sameh", "Sayed",  "Ashraf", "Amgad", "Israa"];
// let numbers = [11, 20, 5, 17, 10, 50, 75, 100, 99];

// let fr = friends.filter(function(el){
//   return el.startsWith("A");
// })
// console.log(fr);

// let nu = numbers.filter(function(el){
//   return el % 2 ===0;
// })
// console.log(nu)

// let fr = friends.filter(function(el){
//   return el.startsWith("A") ;
// })
// console.log(fr);

// let nu = numbers.filter(function(el){
//   return el % 2 === 0;
// })
// console.log(nu)

// ************ 74 - Higher Order Function Filter Practice ******************************

// let mix = "A13BS2ZX"; // 194 " Return just (number * itself)"

// let newMix = mix
// .split("")
// .filter(function(ele){
//   return !isNaN(parseInt(ele));
// })
// .map(function(ele){
//   return ele * ele;
// })
// .join("");
// console.log(newMix)

// ************ 75 - Higher Order Function Reduce ******************************

// let nums = [10, 20, 15, 30];
// let nums = [10, 20, 15, 10, 15];

// let add = nums.reduce(function(acc, current, index, arr){
//   console.log(`acc => ${acc}`);
//   console.log(`current => ${current}`);
//   console.log(`index => ${index}`);
//   console.log(`array => ${arr}`);
//   console.log(acc + current);
//   console.log(`#################`);
//   return acc + current;
// }, 5)
// console.log(add);

// ************ 76 - Higher Order Function Reduce Practice ******************************

// let theBiggest = ["Bla", "Bropaganda", "Tamer", "Ahmed", "Ali", "Alexan", "Sara", "Salim"];

// let big = theBiggest.reduce(function(acc, current){
//   return acc.length > current.length ? acc : current; 
// })
// console.log(big)

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let big =theBiggest
// .reduce(function(acc, current){
//   return acc.length > current.length ?  acc : current;  
// });
// console.log(big);

// let rem = removeChars.filter(function(ele){
//   return !ele.startsWith("@");
// })
// // 
// .reduce(function(acc, current){
//   return acc + current;
// });
// console.log(rem);

// ************ 77 - Higher Order Function ForEach Practice ****************

// After Creating A UL and 3 DIV In HTML File

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".info div");

// allLis.forEach(function(ele){
//   ele.onclick = function (){
//     // Remove Active Class Form All Elements
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // Add Active Class To All Elements
//     this.classList.add("active");
//     //Hide All Divs
//     allDivs.forEach(function(ele){
//       ele.style.display = "none"
//     });
//   };
// });

//************** 78 Challenge  ****************

// let myString = "EElllzzzzzzzzzzzzeroo";
// console.log(myString.split(""))
// let room = []
// room = myString.split("").filter(function(ele, i){
//   console.log(myString.indexOf(ele)) 
//   console.log(myString.indexOf(ele) === i);
//   return myString.indexOf(ele)===i;
// });
// console.log (room)




// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("").filter(function(ele, i){
//   return ele !== (",") && isNaN(parseInt(ele))
// })
// .map(function(ele){
//   return ele === ("_") ? " " : ele
// })
// solution.shift();
// solution.pop();
// console.log(solution.join(""))

// ***************** 79 Object *********************
/*
Object
- Intro and wat is object
- Testing window Object
- Accessing Object
*/

// let user = {
//   //Properties
//   theName: "Tamer",
//   theAge : 42,
//   //Methods
//   sayHello : function(){
//     return `Hello`
//   }
// }
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());


// ***************** 80 Dot Notation vs Bracket Notation *********************

// let user = {
//   theName: "Tamer",
//   country: "Egypt"
// }
// console.log(user.theName); // Tamer
// console.log(user["theName"]); // Tamer
// console.log(user.country); //Egypt
// console.log(user["country"]); //Egypt


// let myVar = "country"; // Dainamic Properties
// let user = {
//   theName: "Tamer",
//   country: "Egypt"
// };
// console.log(user.theName); // Tamer    Dot Notation to call Properties
// console.log(user.country); // Egypt    Dot Notation to call Properties
// console.log(user.myVar); // undefined  Dot Notation to call Dainamic Properties
// console.log(user[myVar]); // Egypt  Bracket Notation to call Dainamic Properties without dot

// ***************** 81 Nested Object and advanced example  *********************

// let user = {
//   theName: "Tamer",
//   age: 42,
//   skills: ["HTML", "CSS", "JS"],
//   statUs: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt : {
//       one: "Cairo",
//       tow: "Alex",
//     },
//   },
//   checkSt: function() {
//     if (user.statUs === true) {
//       return "Available";
//     }else {
//       return "Not Available";
//     }
//   }
// }
// console.log(user.theName); // Tamer
// console.log(user.age); // 42
// console.log(user.skills); // (3) ['HTML', 'CSS', 'JS']  --> (Array)
// console.log(user.skills.join(" | ")); // HTML | CSS | JS --> (String + join " | ")
// console.log(user.skills[2]); //  JS 
// console.log(user.skills[2].toLowerCase()); //  js 
// console.log(user.addresses); //  {ksa: 'Riyadh', egypt: {…}} 
// console.log(user.addresses.ksa); //  Riyadh
// console.log(user.addresses.egypt.one); //  Cairo
// console.log(user.addresses.egypt.tow); //  Alex
// console.log(user["addresses"].egypt.tow); //  Alex
// console.log(user["addresses"]["egypt"]); //  {one: 'Cairo', tow: 'Alex'}
// console.log(user["addresses"]["egypt"]["one"]); //  Cairo
// console.log(user.checkSt()); // Not Available

// ***************** 82 Creat Object with new keyword  *********************

// let user = new Object();
// console.log(user);

// user.age = 38;

// user["country"] = "Egypt";

// user.sayHello = function() {
//   return `Hello`;
// };
// console.log(user)
// console.log(user.age)
// console.log(user.country)
// console.log(user.sayHello())


// ***************** 83 This Keyword  *********************

// console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// console.log(this === window); // true
// myVar = 100;
// console.log(window.myVar); // 100
// console.log(this.myVar); // 100
// function sayHello(){
//   console.log(this)
//   return this;
// }
// sayHello();// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// console.log(sayHello() === window); // true

// let user = {
//   age: 42,
//   ageIndays: function(){
//     return user.age * 365; 
//     //   *************** Or Using (This)
//     // return this.age * 365;
//   },
// };
// console.log(user.age); // 42
// console.log(user.ageIndays()); // 15330

// ***************** 84 Create Object with Create Method  *********************
// Creating Globale Object with [this] return
// let user = {
//   name: ("tamer"),
//   age: 40,
//   doubleAge: function(){
//     return this.age * 2;
//   },
// };
// console.log(user); // {age: 40, doubleAge: ƒ}                 -----> Object
// console.log(user.name); // 40                                  -----> Property
// console.log(user.age); // 40                                  -----> Property
// console.log(user.doubleAge()); // 80                          -----> Method

// // Creating self object
// let obj = Object.create({});
// obj.a = 100;
// console.log(obj);
// // Creating Object with same prototype with Globale Object "user"
// let copyObj = Object.create(user);
// copyObj.age = 50;
// // console.log(copyObj); // {}                                      -----> Object
// console.log(copyObj.name); // tamer                                 -----> Property
// console.log(copyObj.age); // 50                                  -----> Property
// console.log(copyObj.doubleAge()); // 100                          -----> Method

// ***************** 85 Create Object with Assign Method  *********************

// let target1 = {
//   tar1: "Ashraf",
//   tar2: 24,
// }
// let farget1 = {
//   far1: "Tamer",
//   far2: 24,
// }

// let targetObj = {
//   prop1: 100,
//   prop2: 50,
// };

// let finalObj = Object.assign({}, target1, {beso: "Saly", beso2: 20});
// console.log(finalObj);

// let finalObj2 = Object.assign(function (){
//   return target1;
// });
// console.log(finalObj2());

// ********************** 86 DOM "Document Object Model" ****************************
/*
DOM
- What is DOM
- DOM Selectors
---Find Element By ID
---Find Element By Tag Name
---Find Element By Class Name
---Find Element By CSS Selectors
---Find Element By Collection
-------title
-------body
-------images
-------forms
-------links
*/
// let myidElement = document.getElementById("my-div");
// let mytagElement = document.getElementsByTagName("p");
// let myclassElement = document.getElementsByClassName("my-span");
// let queryClassElement = document.querySelector(".spacial");
// let queryIdElement = document.querySelector(".my-span");
// let queryallElement = document.querySelectorAll(".my-span");


// console.log(myidElement);
// console.log(mytagElement[1]);
// console.log(myclassElement);
// console.log(queryClassElement);
// console.log(queryIdElement);
// console.log(queryallElement);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[1]);
// console.log(document.links[0].href);

// ********************** 87 Get Set Element Content and Attributes" ****************************
/*
DOM [Get / Set Element content and attributes]
- innerHTML
- textContent
- Change Attributes Directly
- Change Attributes with methods
---getAttribute
---setAttribute

Search
- innerText
*/

// let myElement = document.querySelector(".js");// ************GET
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);
// myElement.innerHTML = "Text from <span>Main.js</span> File";
// myElement.textContent = "Text from <span>Main.js</span> File";

// // **************************- Change Attributes Directly
// console.log(document.links[0]);
// document.links[0].href = "https://elhashmy-luxury.com";
// document.links[0].textContent = "Elhashmy";

// document.images[0].src =
//   "https://i0.wp.com/elhashmy-luxury.com/wp-content/uploads/2023/01/thump-1-1.webp?w=600&ssl=1";
// document.images[0].alt = "Alternate";
// document.images[0].title = "Photo";
// document.images[0].id = "pic";
// document.images[0].className = "img";

// // ---getAttribute
// // ---setAttribute
// let myLink = document.querySelector(".link")
// myLink.setAttribute("href", "https://elhahsmy-luxury32.com")
// myLink.setAttribute("title", "Elhashmy-Blog")


// Practice
// let myidElement = document.getElementById("my-div");
// let mytagElement = document.getElementsByTagName("p");
// let myclassElement = document.getElementsByClassName("my-span");
// let queryClassElement = document.querySelector(".spacial");
// let queryIdElement = document.querySelector(".my-span");
// let queryallElement = document.querySelectorAll(".my-span");

// let para = document.getElementsByTagName("p");
// console.log(para[0])
// para[0].innerHTML = "Hello Paragraph Form <span>innerHTML</span>";
// para[1].textContent = "Hello Paragraph Form <span>TextContent</span>";
// para[1].textContent = "Elhashmy Blog Paragraph";

// let myIdiv = document.getElementsByClassName("my-span");
// console.log(myIdiv[1]);
// myIdiv[1].textContent = "Fainal Editing"; // <span class="my-span spacial">Fainal Editing</span>

// // para[0].className = "para-style"
// para[0].className = "para-style"; // <p class="para-style">
// para[1].className = "tito-para mnos therd"; // <p class="tito-para mnos therd">Elhashmy Blog Paragraph</p>

// let forma = document.forms;
// forma[0].name = "tamer";// <form action name="tamer"></form>
    

// let btnStyle =
//   "cursor: pointer; color: white; text-decoration: none; font-weight: normal; background-color: #0077ff; padding: 10px;  border-radius: 6px; display: block; width: 150px; border: 2px solid black; margin: 10px; font-family: cursive; ";

// let navSideBar = "padding: 10px; color: white; background-color: blue;";

// let linka = document.querySelector(".link");

// console.log(linka);

// linka.title = "linka-style";
// linka.textContent = "linka-style";
// linka.href = "https://linka-style.com";// <a href="https://linka-style.com/" class="linka-style" title="linka-style">linka-style</a>
// linka.username = "Bor333y"; // <a href="https://Bor333y@linka-style.com/" class="linka-style" title="linka-style">linka-style</a>
// linka.type = "text";
// linka.target = "blank";
// linka.style = btnStyle;


//********************** 88 - Check Attributes And Examples

/*
DOM [Check Attributes]
- Element.attributes
- Element.hasAttribute
- Element.hasAttributes
- Element.removeAttribute
*/

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];
// if (myP.hasAttribute("data-src")){
//   //To Remove attributes
//   myP.removeAttribute("data-src")
//   console.log("Found and removed");
// }else {
//   console.log("Not Found"); ;
// }


// let newEle = document.createElement("p");
// newEle.title = "newParagraph";
// newEle.alt = "newParagraph";
// newEle.textContent = "newParagraph";
// newEle.className = "newParagraph";
// newEle.innerHTML = "newParagraph222";
// console.log(newEle);

//********************** 89 - Creat and append element
// Classes
// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This is Div")
// let myH2 = document.createElement("h2");

// myElement.className = "h2Sty";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// // Append Comment To Element
// myElement.appendChild(myComment);

// // Append Text To Element
// myElement.appendChild(myText);
// document.body.appendChild(myElement);

//********************** 90 Product with title and description Practice */

// let mymainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let headingText = document.createTextNode("Product Text")
// let paraText = document.createTextNode("paragraph Text")

// mymainElement.className = ("proStyle");
// mymainElement.appendChild(myHeading);
// myHeading.appendChild(headingText);

// mymainElement.appendChild(myParagraph);
// myParagraph.appendChild(paraText);

// document.body.appendChild(mymainElement);

// for (let i = 0; i < mymainElement.length; i++){
//   mymainElement[i].className = "proStyle";
//   mymainElement[i].appendChild(myHeading);
//   myHeading.appendChild(headingText);

//   mymainElement[i].appendChild(myParagraph);
//   myParagraph.appendChild(paraText);

// }
// document.body.appendChild(mymainElement);

// ************************** 91 Deal with childs
/*
DOM [ Deal with childs]
- children
- childNodes
- first child 
- last child
-first element child
- last element child
*/

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);

// console.log|(myElement.firstChild);
// console.log|(myElement.lastChild);

//********************************* 92 DOM Events ******************************* */

/*
Use Events on JS
--- onclick
--- oncontextmenu
--- onmouseenter
--- onmouseleave

--- onload
--- onscroll
--- onresize
--- onfocus
--- onblur
--- ononsubmit
*/

//*********************** Example */





// let myBtn = document.getElementById("btn");
// myBtn.onclick = function (){
//   console.log("Clicked");
// }

//********************************* 93 Validate Form And Prevent Default ******************************* */

/*
DOM [Events]
- Validate Form Practice
- Prevent Default
*/

// let userInput = document.querySelector("[name='username']")
// let ageInput = document.querySelector("[name='age']")

// document.forms[0].onsubmit = function(formValid) {
//   let userValid = false
//   let ageValid = false

//   if (userInput.value !== "" && userInput.value.length <= 10 ) {
//     userValid = true
//   }
//   if (ageInput.value !== "" ){
//     ageValid = true
//   }
//   if (userValid === false || ageValid === false){
//     formValid.preventDefault();
//   }
// }

// لأختيار الحقول المراد التعامل معها 

// let userInput = document.querySelector("[name = 'username']")
// let ageInput = document.querySelector("[name = 'age']")

// document.forms[0].onsubmit = function (eve){
//   let userValid = false
//   let ageValid = false

//   if (userInput.value !== "" && userInput.value.length <= 10){
//     userValid = true
//   }

//   if (ageInput !== ""){
//     ageValid = true
//   }

//   if ( userValid === false || ageValid === false){
//     eve.preventDefault();
//   }
// }

// document.links[0].onclick = function(Nothing){
//   Nothing.preventDefault();
// }

// document.links[0].onmouseenter = function (event) {
//   console.log(event);
// }


// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };

// ************************** 94 Event Semulation - Click Focus Blur **********************************

// let one = document.querySelector(".one");
// let tow = document.querySelector(".tow");

// window.onload = function (){
//   tow.focus();
// }

// one.onblur = function (){
//   document.links[0].click();
// }

// ************************** 95 Class List Object and Methods **************** VII ******************

/*
DOM [Class list]
- classes list
--- length
--- contains
--- item (index)
--- add
--- remove
--- toggle
*/

// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("Tamer"));
// console.log(element.classList.contains("test"));
// console.log(element.classList.item("3"));

// element.onclick = function(){
//   element.classList.add("add-one", "add-tow");// لأضافة كلاس للعنصر عند الضغط علية
// }

// element.onclick = function(){
//   element.classList.remove("one"); // حذف كلاسس من العنصر عند الضغط عليه
// }

// element.onclick = function(){
//   element.classList.toggle("one-js"); // إضافة كلاس إن لم يكن موجود && وحذفه إن كان موجود 
// }

// *********************************** 96 CSS Styling and Stylesheets ***********************************

/*
DOM [CSS]
- style
- cssText
- removeProperty(PropertyName)[Inline Stylesheet]
- setProperty(propertyName, value, priority)
*/

// let element = document.getElementById("my-div");
// To Add Inline Style
// element.style.color = "red";
// element.style.fontWeight = "bold";
// Or
// element.style.cssText = "font-weight: bold; color: #3794fe; opacity: 0.9";

// element.style.removeProperty("color");
// element.style.setProperty("background-color", "#1e1e1e", "important");

// document.styleSheets[0].rules[0].style.setProperty("border-bottom", "5px solid #3794fe", "important");
// document.styleSheets[0].rules[0].style.removeProperty("border-bottom", "important");
// document.styleSheets[0].rules[0].style.removeProperty("line-height", "important");


//************************* 97 Before, After, Prepend, Append, Remove */
/*
DOM [Deal with element]
- before [Element || String] قبل العنصر
- after [Element || String] بعد العنصر
- append [Element || String] داخل العنصر في النهاية
- prepend [Element || String]  داخل العنصر في البداية
- remove
*/
// Decleretion Zone Start

// --- Dec Style 

// let h2ddiNg = "color: #0875cf; background-color: #1e1e1e; width: fit-content; padding: 20px; font-size: 30px; font-weight: bold; border-bottom: 5px solid #3794fe; border-radius: 3px;";

// // --- Dec Element 
// let element = document.getElementById("my-div");


// let createdP = document.createElement("p");
// createdP.textContent = "Paragraph - After"

// let creatHd = document.createElement("h2");
// creatHd.textContent = "Heading h2 - Befor";
// creatHd.style.cssText = h2ddiNg;

// let dscRp = document.createElement("p");
// dscRp.textContent = "Hello From Describtion, It's easy to say i'm ok, But hard to feel it";

// let adrsData = document.createElement("address");
// adrsData.textContent = ("Arab Republic Of Egypt, Alexandria, Enu45-30");

// // Decleretion Zone End

// element.before(creatHd);
// document.styleSheets[1].rules[0].style.removeProperty("line-height");
// console.log(document.styleSheets)

// element.after(createdP);

// createdP.after(adrsData);

// createdP.prepend(dscRp);

// let card = documenet.createElement("div");
// // element.after(card);
// card.textContent = "Hello Card"




// dscRp.before(creatHd);

// element.before("Hello Before Div");
// element.after("Hello After Div");

// element.before(createdP);

// element.append(" - Hello Append")
// element.prepend(" - Hello prepend - ")

//** 98 DOM Traversing */
/*
DOM [Traversing]
-nextSibling
-previousSibling
-nextElementSibling
-previousElementSibling
parentElement
*/


// let span = document.querySelector(".tow");

// console.log(span.nextSibling);
// console.log(span.nextElementSibling);


// ***************************************  99 DOM [ Cloning]
/*
 99 DOM [ Cloning]
 - cloneNode(Deep)
*/

// let oneSort = document.getElementsByTagName("span")[2];
// let towSort = document.getElementsByTagName("span")[0];
// let threeSort = document.getElementsByTagName("p")[0];
// let fourSort = document.getElementsByTagName("div")[0];
// let fiveSort = document.getElementsByTagName("span")[1];

// // let copYp = document.querySelector("p").cloneNode(true);
// // fourSort.appendChild(copYp);
// // copYp.id = "copy-p";
// // copYp.style.cssText =
// //   "color: #3794fe; font-size: 40px; background-color: #1c1c1c; text-align: center; transition: 0.5s;";

// // Create Button
// let showBtn = document.createElement("button");
// showBtn.innerHTML = "Show Style";
// document.body.prepend(showBtn);
// showBtn.style.cssText = btnStyle;

// let backBtn = document.createElement("button");
// backBtn.innerHTML = "Go Back";
// showBtn.after(backBtn);
// backBtn.style.cssText = btnStyle;

// showBtn.onclick = function (){
//   //Give Element Some Stylesh
//   oneSort.style.cssText =
//     "background-color: #6f7f8f; color: white; text-align: center; transition: 0.3s; display: flex; justify-content: center; align-items: center; font-size: 34px; margin: 0; padding: 20px; width: 300px; height:80px;";
//   towSort.style.cssText =
//     "background-color: #4c5c6c; color: white; text-align: center; transition: 0.6s; display: flex; justify-content: center; align-items: center; font-size: 34px; margin: 0; padding: 20px; width: 300px; height:80px;";
//   threeSort.style.cssText =
//     "background-color: #3f4f5f; color: white; text-align: center; transition: 0.8s; display: flex; justify-content: center; align-items: center; font-size: 34px; margin: 0; padding: 20px; width: 300px; height:80px;";
//   fourSort.style.cssText =
//     "background-color: #2d3d4d; color: white; text-align: center; transition: 1s; display: flex; justify-content: center; align-items: center; font-size: 34px; margin: 0; padding: 20px; width: 300px; height:80px;";
//   fiveSort.style.cssText =
//     "background-color: #1f2f3f; color: white; text-align: center; transition: 1.2s; display: flex; justify-content: center; align-items: center; font-size: 34px; margin: 0; padding: 20px; width: 300px; height:80px;";

//   fourSort.after(fiveSort);
//   threeSort.before(towSort);
//   towSort.before(oneSort);
//   fourSort.after(fiveSort);
// };

// // This example adds many events on the document.
// document.addEventListener("mouseover", myFunction);
// document.addEventListener("click", mySecondFunction);
// document.addEventListener("mouseout", myThirdFunction);

// function myFunction() {
//   fourSort.textContent = "Moused over!";
// }

// function mySecondFunction() {
//   fourSort.textContent = "Clicked!";
// }

// function myThirdFunction() {
//   fourSort.textContent = "Moused out!";
// }


// **************************** Profile Card ****************************
// let btnStyle =
//   "cursor: pointer; box-shadow: 0px 2px 15px #00000075; color: white; text-decoration: none; font-weight: normal; background-color: #0077ff; padding: 10px;  border-radius: 6px; display: block; width: 150px; margin: 10px; border: none";

// let secTion = document.createElement("div");
// document.body.append(secTion);

// let proCard = document.createElement("div")
// secTion.append(proCard)
// proCard.className = "proCard";
// // Profile Photo
// let proPic = document.createElement("img");
// proPic.src = "photos/1627395228537 (2).jpg"
// proCard.append(proPic);

// // Info Row Start
// let infoRow = document.createElement("div");
// proCard.append(infoRow);

//     let mainName = document.createElement("h4");
//     document.body.append(mainName);
//     mainName.textContent = "Tamer Elhashmy";
//     infoRow.append(mainName)
//     // Info Row End


// // Job Row Start
//   let jobTitle = document.createElement("span");
//   jobTitle.textContent = "Front-end Developer";
// infoRow.append(jobTitle);
// // Job Row End

// // Location Row Start
// let locaRow = document.createElement("div");
// let locaIcon = document.createElement("i")
// locaIcon.innerHTML = `<i class="fa-solid fa-location-dot loca-icon"></i>`;
// let countName = document.createElement("span");
// countName.textContent = "Egypt";
//   let cityName = document.createElement("span");
// cityName.textContent = "Alexandria, ";

// infoRow.append(locaRow);
// locaRow.append(locaIcon);
// locaIcon.after(cityName);
// cityName.after(countName);
// // Location Row End

// // Numbers Row Start
// let numRow = document.createElement("div");
// locaRow.after(numRow);

//   let follDiv = document.createElement("div");
//   follDiv.className = "num-box"
//     let numBer = document.createElement("p");
//       numBer.textContent = "1598";
//     let sociName = document.createElement("p");
//       sociName.textContent = "Followers"
//         follDiv.prepend(numBer);
//         follDiv.append(sociName);
//         numRow.append(follDiv);

// let follDiv2 = document.createElement("div");
// follDiv2.className = "num-box"
//   let numBer2 = document.createElement("p");
//   numBer2.textContent = "65";
//   let sociName2 = document.createElement("p");
//   sociName2.textContent = "Following";
//   follDiv2.prepend(numBer2);
//   follDiv2.append(sociName2);
// follDiv.after(follDiv2);

// let follDiv3 = document.createElement("div");
// follDiv3.className = "num-box"
//   let numBer3 = document.createElement("p");
//   numBer3.textContent = "123";
//   let sociName3 = document.createElement("p");
//   sociName3.textContent = "Articles";
//   follDiv3.prepend(numBer3);
//   follDiv3.append(sociName3);
//   follDiv2.after(follDiv3);

// let follDiv4 = document.createElement("div");
// follDiv4.className = "num-box"
//   let numBer4 = document.createElement("p");
//   numBer4.textContent = "85";
//   let sociName4 = document.createElement("p");
//   sociName4.textContent = "Works";
//     follDiv4.prepend(numBer4);
//     follDiv4.append(sociName4);
//     follDiv3.after(follDiv4);
// // Numbers Row End

// // Icon Row Start
// let iconRow = document.createElement("div");
// numRow.after(iconRow);
// iconRow.className = "icon-row";

// let linkBtn1 = document.createElement("a")
// linkBtn1.href = "#";
//   let icon1 = document.createElement("i")
//   icon1.innerHTML = `<i class="fa-brands fa-facebook"></i>`;
//   linkBtn1.append(icon1);
//   iconRow.append(linkBtn1);

//   let linkBtn2 = document.createElement("a")
//   linkBtn2.href = "#";
//   let icon2 = document.createElement("i")
//   icon2.innerHTML = `<i class="fa-brands fa-twitter"></i>`;
//     linkBtn2.append(icon2);
//     linkBtn1.after(linkBtn2);

//   let linkBtn3 = document.createElement("a")
//   linkBtn3.href = "https://github.com/tamer-alhashmi";
//   let icon3 = document.createElement("i")
//   icon3.innerHTML = `<i class="fa-brands fa-github"></i>`;
//     linkBtn3.append(icon3);
//     linkBtn2.after(linkBtn3);

//   let linkBtn4 = document.createElement("a")
//   linkBtn4.href = "#";
//   let icon4 = document.createElement("i")
//   icon4.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
//     linkBtn4.append(icon4);
//     linkBtn3.after(linkBtn4);
  
//   let linkBtn5 = document.createElement("a")
//   linkBtn5.href = "#";
//   let icon5 = document.createElement("i")
//   icon5.innerHTML = `<i class="fa-brands fa-figma"></i>`;
//     linkBtn5.append(icon5);
//     linkBtn4.after(linkBtn5);

//   let linkBtn6 = document.createElement("a")
//   linkBtn6.href = "https://codepen.io/Tamer_Alhashmi";
//   let icon6 = document.createElement("i")
//   icon6.innerHTML = `<i class="fa-brands fa-codepen"></i>`;
//       linkBtn6.append(icon6);
//       linkBtn5.after(linkBtn6);
// // Icon Row End

// // Create Button
// let btnRow = document.createElement("div");
// iconRow.after(btnRow)
// btnRow.style.cssText = "display: flex; justify-content: center; padding: 15px;";

// let mssBtn = document.createElement("button");
// mssBtn.innerHTML = "Massage";
// mssBtn.style.cssText = btnStyle;

// let follBtn = document.createElement("button");
// follBtn.innerHTML = "Follow";
// follBtn.style.cssText = btnStyle;

// btnRow.prepend(mssBtn);
// btnRow.append(follBtn);

// // Style Start

// secTion.style.cssText =
//   "background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);	animation: gradient 15s ease infinite; padding-top: 150px; padding-bottom: 100px; ";


// proCard.style.cssText =
//   "font-family: Poppins; position: relative; margin: 0 auto; width: 400px; background-color: #f3f3f3; border-radius: 8px; padding: 80px 50px 40px; text-align: center ";

// proPic.style.cssText =
//   "filter: drop-shadow(0px 8px 12px #00000090); width: 140px; border-radius: 50%; position: absolute; top: -80px; transform: translate(-50%); border: 6px solid #0875cf60";

//   mainName.style.cssText =
//   "color: #3794fe; margin: 0; line-height: 1.6; padding-top: 30px; font-size: 24px; letter-spacing: 1px; font-weight: 400;  ";
// jobTitle.style.cssText =
//   "color: #505050; margin: 0; line-height: 1.6; margin: 10px; ";
// numRow.style.cssText =
//   "display: flex; justify-content: space-around; ";
// numBer.style.cssText =
//   "color: #505050; font-weight: bold; font-size: 25px; line-height: 1.6; margin-bottom: 0;";
// numBer2.style.cssText =
//   "color: #505050; font-weight: bold; font-size: 25px; line-height: 1.6; margin-bottom: 0;";
// numBer3.style.cssText = 
//   "color: #505050; font-weight: bold; font-size: 25px; line-height: 1.6; margin-bottom: 0;";
// numBer4.style.cssText =
//   "color: #505050; font-weight: bold; font-size: 25px; line-height: 1.6; margin-bottom: 0;";
// iconRow.style.cssText = "font-size: 30px; padding: 20px; display: flex; justify-content: space-around;"

// icon1.style.cssText = "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #1877f2";
// icon2.style.cssText = "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #1da1f2";
// icon3.style.cssText = "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #333";
// icon4.style.cssText = "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #0077b5";
// icon5.style.cssText = "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #f67c1a"; 
// icon6.style.cssText = "cursor: pointer; text-shadow: 0px 2px 15px #00000075; color: #333";
// Style End
// *********************** Card Design End ********************


// 100 addEventListener

/*
DOM [Add Event Listner]
- addEventListner
-Use Without On
-Attach Multiple Event
-Error Test
*/

// threeSort.onclick = one;
// threeSort.onclick = tow;

// function one (){
//   console.log("Massage from Onclick 1");
// }
// function tow (){
//   console.log("Massage from Onclick 2");
// }

// threeSort.addEventListener("click", function(){
//   console.log("Massage from Onclick from Event")
// })
// threeSort.addEventListener("click", one);

// document.addEventListener("click", function(e){
//   if (e.target){
//     console.log(e.target)
//   }
// })

//*********************************** */ 103 Alert, Confirm, Prompt
/*
BOM [Browser Object Model]
- alert (Massage) => Nedd No Response onle ok available
- Confirm(Massage) => Need Response and return A Boolean
- Prompt(Massage, Defult Massage) => Collect Data
*/

// alert("Test");
// console.log("Test");

// let confermMsg = confirm("Are you sure?");
// console.log(confermMsg);
// if (confermMsg === true){
//   console.log("Item Deleted")
// }else {
//   console.log("Item Not deleted");
// }

// let prompetMsg = prompt("Good Day To You ?", "Choose The Day");
// console.log(prompetMsg);


// ****************************************** 104 setTimeout And clearTimeout

/*
BOM [Browser Object Model]
- setTimeout(function, Timeout, Additional Pramas)
-clearTimeout(Identfier)
*/

// setTimeout(function(){
//   console.log(`Msg`);
// }, 3000);

// setTimeout(sayMsg, 3000);
// function sayMsg(){
//   console.log(`Iam Message`)
// }

//************ Example */
// let counter = setTimeout(sayMsg, 3000);
// function sayMsg(){
//   console.log(`Iam Message For`);
// }

// let btn = document.querySelector("button");

// btn.onclick = function(){
//   clearTimeout(counter);
// } 
//************ Example */

// let btn = document.querySelector("button");

// let myGreeting = "Happy Birthday";
// let myTimeout = setTimeout(myGreeting, 5000);

// document.write(`<h2>${myGreeting}</h2>`);

// function myStopFunction() {
//   clearTimeout(myTimeout);
// }
// btn.onclick = function(){
//   clearTimeout(myTimeout);
// } 

// ****************************************** 106 Window Location Object
/*
Bom [Browser object model]
- location object 
--- href Get / Set [URL || Hash || File || Mail]
--- host
--- hash
--- protocol
--- reload()
--- replace()
--- assign()
*/

// let btnConfirm = document.querySelector("button");
// let btnhref = document.querySelector("button"[1]);
// let btnhash = document.querySelector("button"[2]);
// btnConfirm.onclick = function () {
//   // location.assign("https://google.com");
// };
// btnhref.onclick = function () {
//   location.href("https://google.com");
// };
// btnhash.onclick = function () {
//   location.hash(
//     "https://elhashmy-luxury.com/learn-css-in-arabic-2023-_-1_first-project-and-syntax/#%D9%85%D9%81%D8%A7%D9%87%D9%8A%D9%85_%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A%D8%A9_%D8%B9%D9%86_CSS"
//   );
// };
// console.log("button"[0]);
// console.log(location.href);
// location.href = "https://google.com";
// location.replace = ("https://google.com");

// *********************************108 Window open and close
/*
BOM [Browser object model]
 - open (url[opt], window name or target attr[opt], win Features[opt])
 - close()
 - window Features
 -width[num]
 -height[num]
 -left[num]
 -top[num]
 */
// setTimeout (function (){
//   window.open(
//     "https://elhashmy-luxury.com",
//     "_blank",
//     "width=900,height=1200, width=600; left=0,top=0"
//   );
// }, 2000)


/*
BOM [Browser Object Model]
- History   SPI
---Properties
-----length
---Methods
------back()
------forword()
------go(Delta) => Position In History

 Search [For advanced Knowledge]
 - oushState() + replaceState
*/
// location = ("https://google.com")
// let btn = document.querySelector("button")

// btn.onclick = function(){
//   // location.assign("https://elhashmy-luxury.com")
//   console.log(history);
//   console.log(history.length);
//   console.log(history.pushState("1","https://google.com"));
// }

// ********************************* 109 Scroll, ScrollTo, ScrollBy
/*
BOM [Browser Object Model ]
- stop()
- print()
- focus()
- scroll(x, y || Options)
- scrollTo(x, y || Options)
- scrollBy(x, y || Options)
*/
// let btn = document.querySelector("button")
// btn.style.cssText =
//   "position: fixed; bottom: 30px; right: 30px; color: #012738; background-color: white; border: none; border-radius: 4px; padding: 4px 8px ";
// btn.onclick = function(){
//   //فتح نافذه جديده بعرض وطول ثابت***************************
//   // let myNewWindow = window.open(
//     //   "https://google.com",
//     //   "",
//     //   "width=500,height=500"
//     // );
//     // myNewWindow.focus();
    
//     // بالضغط علي زر معين يذهب إلي scroll محدد 
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth"
//   })
// }
// ************************** 111 Local Storage
/*
 BOM [Browser Object Model]
Local Storage
- setItem
- getItem
- removeItem
- clear
- key

Info
- No Expiration Time
- HTTP And HTTPS
- Praivet Tabe
*/

// Local Storage => Property that let you accese to Storage Object
// // Set
// window.localStorage.setItem("color", "#009688");
// window.localStorage.setItem("btnColor", "white");
// window.localStorage.btnBg = "#F44336";
// window.localStorage.setItem("display", "flex");
// window.localStorage.fontSize = "20px"
// window.localStorage["backgroundColor"] =  "#009688";
// window.localStorage.fontWeight = "bold";
// window.localStorage.trans = "0.5s ease";

// //Get
// console.log(window.localStorage.getItem("color")); // #F44336
// console.log(window.localStorage.color); // #F44336
// console.log(window.localStorage['color']); // #F44336


// Set Color in page
// document.body.style.backgroundColor = window.localStorage.color;

// console.log(window.localStorage);//Storage {fontSize: '20px', color: '#F44336', display: 'flex', fontWeight: 'bold', backgroundColor: '#009688', …}
// console.log(typeof window.localStorage); // object

// let btn = document.querySelector("button");
// btn.style.cssText =
//   "position: fixed; bottom: 30px; right: 30px; color: white; cursor:pointer; background-color: #2d2d2d; border: none; border-radius: 4px; padding: 4px 8px ";

// let header = document.querySelector("header");
// let menuUl = document.querySelector("ul");
// menuUl.style.cssText = "list-style: none; padding: 4px 8px; display: flex;";
// let listLink = document.querySelectorAll("header a");



// btn.onclick = function () {
//   document.body.style.backgroundColor = window.localStorage.color;
//   document.body.style.color = window.localStorage.btnColor;
//   btn.style.color = window.localStorage.btnColor;
//   btn.style.backgroundColor = window.localStorage.btnBg;
//   header.style.cssText =
//     "display: flex; justify-content: space-between; transition: 0.4s ease; background-color: #455A64; align-items: center;";
//   listLink.forEach((a) => {
//     a.style.cssText = "padding:10px; color: white; transition: 0.4s ease; text-decoration: none";
//   });

//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// };


// const d = new Date();
// year = d.getFullYear();
// let para = document.getElementsByTagName("p");
// para.style.cssText = "color: red;";

//  allLis.forEach((ele)=>{
//   ele.onclick = function (){
//     // Remove Active Class Form All Elements
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // Add Active Class To All Elements
//     this.classList.add("active");
//     //Hide All Divs
//     allDivs.forEach(function(ele){
//       ele.style.display = "none"
//     });
//   };
// });

// <!-- 112 Local Storage Color Application Practice  -->

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// //First you must be sure if the color value already in Local Storage
// // window.localStorage.clear();
// if (window.localStorage.getItem("color")){
//   // [1] Add color to div
//   exp.style.backgroundColor = window.localStorage.getItem("color");

//   // [2] Remove activ class from another lis
//   lis.forEach((li) => {
//     li.classList.remove("active");

//   // [3] Add active class to current color
//   document.querySelector(
//     `[data-color="${window.localStorage.getItem("color")}"]`
//   ).classList.add("active");
//   });
// }else{
//   console.log("No");
// }

// lis .forEach((li) =>{
//   li.addEventListener("click", (e) =>{
//     // console.log(e.currentTarget.dataset.color);
//     //remove active class from all lis
//     lis.forEach((li) =>{
//       li.classList.remove("active");
//     });
//     // Add Active Class to current element
//     e.currentTarget.classList.add("active");
//     // Add current color to Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change div background color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   })
// });

//***************** 113 Session Storagr */
/*
BOM [Browser Model Object]
- Session Storagr
-- setItem
-- getItem
-- removeItem
-- clear
-- key
*/

/* 114 BOM Challenge */

// let input = document.querySelector(".input");
// let addBtn = document.querySelector(".add");
// let tasks = document.querySelector(".tasks");

// let titleRow = document.createElement("div");
// titleRow.classList.add("title-row");

// let taskstitle = document.createElement("p");

// let delBtn = document.createElement("button");
// delBtn.classList.add("del-btn");

  
//   tasks.append(titleRow);
//   titleRow.prepend(taskstitle);
//   titleRow.append(delBtn);

// window.localStorage.clear();
// if(window.localStorage.getItem("input-name")){
//   taskstitle.textContent = window.localStorage.getItem("input-name");
  

//   delBtn.textContent = "Delete";
// }

// input.onblur = function(){
//   window.localStorage.setItem("input-name", this.value);



//   taskstitle.textContent = window.localStorage.setItem(
//     "input-name",
//     this.value
//   );
// };

// 115 Destructuring *************************
/*
"Is a JavaScript expression thet allow us to extractc data from arrays,
objects and maps, and set them into new "Distinct Variables."
-Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let myFriends = ["Ahmed", "Tamer", "Hazem", "Ragheb"];
// [
//   a = "A", b, c, d, e = "Osama"
// ] = myFriends;

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// 116 Destructuring Part 2 *********************************

// let myFriends = ["Ahmed", "Tamer", "Hazem", ["Ragheb", "Hisham", ["Ehab", "Moataz"]]];

// let [ , , ,[a, ,[ ,b]]] = myFriends;
// console.log(a); // Ragheb
// console.log(b); // Moataz

// 117 Destructuring Part 2 Swap Variables *************** VII ******************

/*
Sestructuring Array => Swapping Variables
*/

// let book = "Video";
// let video = "Book";

// // Swapping
// [book, video] = [video, book];
// console.log(book);
// console.log(video);

// 118, 119 Destructuring Object *************** VII ******************

// const user = {
//   theName: "Tamer",
//   thaAge: 40,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   thaColor: "black",
//   skills:{
//     html: 70,
//     css: 80,
//   }
// }

// let theName = user.theName;
// let thaAge = user.thaAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;
// let thaColor = user.thaColor;
// let skills = user.skills;

// ({ theName: na, thaAge: age, theTitle: tit, theCountry, thaColor: co = "Red", skills: { html: h, css }, } = user);

// console.log(theName);
// console.log(thaAge);
// console.log(theTitle);
// console.log(theCountry);
// console.log(co);
// // If you want change the name
// console.log(na);
// console.log(age);
// console.log(tit);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skills Progress Is ${h}`);
// console.log(`My CSS Skills Progress Is ${css}`);

// 120 Destructuring Function Parameters *************** VII ******************

// const user = {
//   theName: "Tamer",
//   thaAge: 40,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// // showDetails(user)
// // function  showDetails(obj){
// //   console.log(`Your name is ${obj.theName}`);
// //   console.log(`Your age is ${obj.thaAge}`);
// //   console.log(`Your Country is ${obj.theCountry}`);
// // }

// showDetails(user);
// function showDetails({ theName: n, thaAge: g, skills: {css: c} } = user) {
//   console.log(`Your name is ${n}`);
//   console.log(`Your age is ${g}`);
//   console.log(`Your CSS Prosessing is ${c}`);
// }

// // Practice

// let myFriens =
// ["Name", "Sayed", "Ehab", "Hisham",
//   ["Isslam", " Ahmed",
//     ["Hashmi",
//       ['html', 'CSS'],
//     " Shreef"
//     ]
//   ]
// ];

// let [, , , , [a, , [b, ]]] = myFriens;
// console.log(a); // Isslam
// console.log(b); // Hashmi

// let book = "Video";
// let Video = "Book";

// [book, Video] = [ Video, book];
// console.log(book);
// console.log(Video);

/* خاصية الوضع المظلم */

// let darkMode = false;
// let bg = document.body;
// let button = document.querySelector("button");
// let text = document.querySelectorAll(".text");

// button.onclick = function(){
//   if(darkMode == false){
//     darkMode = true;
//     bg.style.backgroundColor = "var(--coffe-c)";
//     text.forEach(function (h) {
//       h.style.color = "white";
//     });
//     button.classList.toggle("btnDmode");
//     button.textContent = "مضئ";
//   }else {
//     darkMode = false;
//     bg.style.backgroundColor = "white";
//     text.forEach(function(h){
//       h.style.color = "var(--coffe-c)";
//     });
//     button.classList.toggle("btnDmode");
//     button.textContent = "مظلم";
//   }
// }

// **********************************  122 Destructuring Challenge
// let chosen = 3;
// let myFriends = [
//   {title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"]},
//   {title: "Moataz", age: 36, available: false, skills: ["Paytho", "Django"]},
//   {title: "Ehab", age: 49, available: true, skills: ["PHP", "Laravel"]},
// ];

// let solotion = [
//   {title: t1, age:g1, available: v1, skills: [,k1]},
//   {title: t2, age:g2, available: v2, skills: [,k2]},
//   {title: t3, age:g3, available: v3, skills: [,k3]},
// ] = myFriends;

// if (chosen === 1) {
//   console.log(t1);
//   console.log(g1);
//   v1 === true ? console.log("Available") : console.log("Not Available");
//   console.log(k3);
// }else if (chosen === 2) {
//   console.log(t2);
//   console.log(g2);
//   v2 === true ? console.log("Available") : console.log("Not Available");
//   console.log(k2);
// }else if (chosen === 3) {
//   console.log(t3);
//   console.log(g3);
//   v3 === true ? console.log("Available") : console.log("Not Available");
//   console.log(k3);
// }else{
//   console.log("PLZ Select in our range")
// };

