class First {
  constructor() {
    console.log("this is first class");
  }

  getVal() {
    return "amad";
  }
}

class Second {
  constructor() {
    console.log("this is first class");
  }
}

let f = new First();
console.log(f.getVal());
