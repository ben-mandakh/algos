/// 1. Check if it is Prime number

// const { fitBounds } = require("google-map-react");

//// Number : 1. It divided by itself and 1.
//// How: Assumbe it is 5, which divided by 5 and 1
//// How: Check numbers less than 5, and then if there is divider num, return False

// const prime_number = (num) => {
//     if(num <=0){
//         return false
//     }
//     if(num == 1) {
//         return true;
//     }

//     for (let i = num -1; i > 1; i-- ){
//         if (num % i == 0) {
//             return false
//         } 
//     }
//     return true
// }

// console.log(prime_number(7))

//// In terms time: O(n)   6, 5, 4, 3, 2, 
/// In terms of memory: O(1)  nothing added on RAM

/// 2. Find prime factors of a number
/// 1 for 1 prime numbers
/// 2 is 2 * 1
/// 3 is 3 * 1
/// 4 is 2**2 * 1
/// 5 is 5 * 1
/// 6 is 3 * 2
/// Let us asume 24
/// divide 2

// const primeFactors = (num) => {
//     if(prime_number(num) == true){
//         return num
//     }
//     let count = 0
//     let remainder = 0
//     while (num > 2) {
//        if(num % 2 == 0) {
//             num = num / 2
//             count ++
//             num --
//        } else {
//            remainder = num
//        }
//     }
//     return ([2**count, num, remainder])
// }

// console.log(primeFactors(6))

// function primeFactors(n) {
//     var factors = [], 
//         divisor = 2;
//     while (n > 2){
//         if ( n % divisor == 0){
//             factors.push(divisor)
//             n = n/divisor;
//         }
//         else{
//             divisor ++;}
//         }
//         return factors;
// }
// console.log(primeFactors(100))

// function primeFactors(n){
//     var factors = [],
//         divisor = 2;
//     while (n > 2) {
//         if( n % divisor == 0){
//             factors.push(divisor)
//             n = n / divisor
//         } else {
//             divisor ++
//         }
//     }
//     return factors
// }
// console.log(primeFactors(90))

//// 3. Find nth fibanocci number
//// 0, 1, 1, 2, 3, 5, 8, 13, 21
//// 0, 1, 2, 3, 4, 5, 6, 7, 8 
//// first two 0, 1 then 1, 2, 3, 

// function findFibanocci(num){
//     var fib = [0,1]
//     i = 2
//     if (num == 2) return 1;
//     while (4 <= num){
//         fib[4] = fib[3] + fib[2];
//         i++
//     } 
//     return fib[num]
// }
// console.log(findFibanocci(12))

// function recursiveFib(n){
//     if (n <=1) return n;
//     else
//         return recursiveFib(4) + fib(3);   ///// fib(3) + fib(2)        1 + 1    fib(1) + fib(0)
//     }
// console.log(recursiveFib(3))


/// 

// const a  = 'otgonbayar mandakh'.length;
// console.log(a)

//// 4. How would you find the greatest common divisor of two numbers
//// 12  2 * 6, 3 * 4 
//// 8   2 * 4 
//// comDiv(n, m)  if divisor can divide, push it some place, then find the max one.
//// O(n) time and memory

// var comDiv = (m,n) => {
//     var common_divisors = [],
//         divisor = 2;
//     while (divisor < m && divisor <n) {
//         if (m % divisor == 0 && n % divisor == 0){
//             common_divisors.push(divisor)
//             divisor ++;
//         } else {
//             divisor ++;
//         }
//     }
//     if (common_divisors.length <= 0) {
//         return "There is no common divisor"
//     } else {
//         return common_divisors[common_divisors.length -1]
//         // return Math.max(...common_divisors)
//     }
// }
// console.log(comDiv(8, 12))

// var x = (-"21" + 13);
// //     y = 91;
// console.log(typeof(x))
// console.log(x)
// console.log(typeof(y))
// console.log(x ===y)
// const i  = (n) => n+1;
// console.log(i(3))

// function (){
//     let a = 1;
//     let a = 3;
// }
// console.log(a)
// let a = 3;

// const age = 34;
// const year = 1987;


// console.log(2022 - year)

//// Q5: Remove duplicat nums from arr
// var arr = [1,2,4,3,2];
//// arr = [1,4,3]
/// I can do two for loop which would be nested loop that would be long
/// I can restore the values in different data structure and look up quick
/// or sort it and check next value 

// function removeDuplicate(arr){
//     var arr2 = [];
//     for (var i=0; i <arr.length; i++){
//         for( var j = 1; j < arr.length; j++){
//             arr2.push(arr[i])
//         }
//     }
//     return arr2;
// }
// console.log(removeDuplicate([arr]))
// arr = [1,2,3,2,4,2,3]

// for (let i =0; i < arr.length; i++){
//     for(let j = 0; j < arr.length-1; j++){
//         if (i != j) {
//             if(arr[i] == arr[j]){
//                 arr.splice(i,1);

//                 // delete arr[i];
//                 delete arr[j];
//             }
//         }
//     }
// }
// console.log(arr)

/// make the arr dict(), then check by key

// function removeDuplicate(arr){
//     var dictNum = {};
//     var arr2 = [];
//     for(let i of arr){
//         if (!(dictNum[i] in dictNum)){
//             dictNum[i] = 1
//         } else {
//             dictNum[i] = 0
//         }
//     }
//     for (var i in dictNum){
//         console.log(i)
//         // if (dictNum[i] > 0){
//         //     arr2.push(i)
//         // }
//     return arr2;
// }
// function removeDuplicate(arr){
//     var dictNum = {};
//     var arr2 = [];
//     for(let i of arr){
//         if (!(dictNum[i] in dictNum)){
//             dictNum[i] = 1
//         } else {
//             dictNum[i] = 0
//         }
//     }
//     for (var i in dictNum){
//         console.log(i)
//         // if (dictNum[i] > 0){
//         //     arr2.push(i)
//         // }
//     return arr2;
// }
// }
// console.log(removeDuplicate(arr))
/// O(n) time and memory

// const removeDuplicate = (arr) => {
//     var obj = {},
//         newArr = [];
//     for (var i = 0; i < arr.length; i++){
//         console.log(obj[arr[i]])
//         if(!obj[arr[i]]){
//             newArr.push(arr[i]);
//             obj[arr[i]] = 1;
//         }
//     }
//     return newArr;
// }

// var arr = [1,1,3,4,1,3]
// console.log(removeDuplicate(arr))
// var arr = {12:3,3:2,4:7,21:5}
// for (let i in arr){ console.log(i)}


/// Q6. Merge two sorted arrays
// arr1 = [1,2,5,7]
// arr2 = [3]
// /// newArr = [1, ]
// function mergeArr(a, b){
//     var newArr = [],
//         aElm = a[0],
//         bElm = b[0],
//         i = 1,
//         j = 1;
//     while(aElm || bElm){
//         if((aElm && !bElm) || aElm < bElm){
//             newArr.push(aElm);
//             aElm = a[i++];
            
//         } else {
//             newArr.push(bElm);
//             bElm = b[j++]
//         }
//     }
   
//     return newArr;
// }
// console.log(mergeArr(arr1,arr2))

/// Q7. Swap Numbers

/// [1,2,3,5]
/// in Python, arr[i], arr[j] = arr[j], arr[i]
/// 2, 3
// a = 2 b = 3
// a = 2 - 3 => -1 
// a = -1
// b = 3 + -1 => 2
// a = 2 --1 => 3
/// a ^ b 
// function swap(a,b){
//     console.log("Before: a:" , a, " b:", b)
//    a = a - b
//    b = b + a
//    a = b - a
//     console.log("After: a:", a, " b:", b)
// }
// swap(3, 2)

/// 8. Reverse string in JS

// function revStr(str){
//     // var newStr = []
//     // for(let i = str.length-1; i >= 0; i --){
//     //     newStr.push(str[i])
//     // }
//     // return newStr.join('');
//     return str.split('').reverse().join('')
// }
// console.log(revStr('Otgoo'))

/// 9. Reverse words
/// 'Ben Otgoo'

// function revWord(sen){
//     return sen.split(' ').reverse().join(' ')
// }
// console.log(revWord("Ben Otgo"))

/// 10. Reverse in Place

// function revWord(str){

//     return str.split(' ').reverse().join(' ').split('').reverse().join('')
// }
// console.log(revWord("Ben Otgo"))

/// 10. First Non Repeating Char
/// 'ben mandakh '
/// first I need to count with Object ds`
/// then find all elements with one, might push it an array
/// then grab [0] one, that would be the first non Repeating Char ?

// function firstNonRepeatChar(str){
//     var dct = {},
//         arr = [];
//     for(let i =0; i < str.length; i++){
//         if(dct[str[i]]){
//             dct[str[i]]++;
//         } else{
//             dct[str[i]] =1
//         }
//     }
//     for (i in dct){
//         if(dct[i] == 1 && i != ' '){
//             return i
//         }
//     }

// }
// console.log(firstNonRepeatChar('on Ontgoo'))

