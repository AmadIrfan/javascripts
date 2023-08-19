// const arr = [
//   {
//     name: "AmadIrfan",
//     age: 20,
//   },
//   { name: "AmnaIrfan", age: 17 },
// ];

// arr.forEach((e) => {
//   console.log(e['name']);
// });

function userLogin(email, password) {
  setTimeout(() => {
    return { email: email, password: password };
    // console.log("sorry Error Occurs");
  }, 5000);
  return email;
}

let a = userLogin("amadirfan443@gmail.com", 132312);
console.log(a);
