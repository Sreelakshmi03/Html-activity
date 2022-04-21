// function wordsReverser(string){
//     return string.split(' ').map(function(word) {
//         return word.split('').reverse().join('');
//      }).join(' ');
// }
// alert(wordsReverser('New string, same results.'));
// // weN ,gnirts emas .stluser


// let string = "uoy etah i"
// let res = string.split("").reverse().join("");
// console.log(res);


// let a = [1, 2, 3, 4, 5];
// let res = a.reverse();
// console.log(res);

// function reverseString(str) {
//   if (str === "") return "";
//   else return reverseString(str.substr(1)) + str.charAt(0);
// }
// reverseString("hello");

var str = "javascriptisa
programming language";

let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
document.write(reverse);
