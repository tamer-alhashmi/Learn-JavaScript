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

// let myAdmins = ["Ahmed", "Osama", "Sayed", "rehab", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Ragab", "Rawda", "Othman", "Amany", "Samia", "Rami", "Aaseer", "Onel", "Sedan"];
// let counter=0;

// ************ First Ansower
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

