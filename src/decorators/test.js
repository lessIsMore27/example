


let counter = 0;


const add = (target) => {
  target.a = 2;
  counter++;
};



@add
function foo() {
  
}

console.log("last site value", counter);