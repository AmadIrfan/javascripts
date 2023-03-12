// @ts-nocheck

var form = document.getElementById("forms");
// console.log(document.body)
// console.log(document.head)
// console.log(document.body.childNodes)
// console.log(document.body.children)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

for (nod of document.body.children) {
    console.log(nod);
    
}
const arr = Array.from(document.body.children);
console.log(arr); 
let na = document.querySelector("#Names");
var pass = document.getElementById("Password");
// console.log(form?.children);

// form?.addEventListener("submit", onClick)
// function onClick(e){
//     e.preventDefault();
//     console.log('Name ' + na?.value);

//     // @ts-ignore
//     console.log('Password ' + pass?.value);
// }