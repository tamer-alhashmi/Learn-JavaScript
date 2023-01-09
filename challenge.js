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


// Challenge 22 Part 2
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(+-d * +e * +g); // 2000
// console.log(-d + ++e*2 + ++f); // 173
// console.log(++e*2 +-d + f + true); // 173

// End of Challenge 22 Part 2









// # 26  Number Challenge
// let a= 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // 1 - Find smallest number in all variables and return Integer:
// console.log(Math.trunc(Math.min(a, b, c, d))) // 2

// // 2- Use Variables a + b One time to get the needed output
// console.log(Math.trunc(Math.pow(a, 2))); // 10000 

// // 3- Get Integer "2" From d variables with 4 methods
// console.log(parseInt(d));
// console.log(Math.floor(d)); //2
// console.log(Math.round(d)); //2
// console.log(Math.min(Math.trunc(d))); // 2

// // 4- Use Variables b + d to get this values
// console.log((Math.trunc(b) / 2 - d ** 4).toFixed(2).toString()); // 66.67 => String
// console.log(Math.trunc(b / 2 - d ** 4)); // 67 => Number







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
