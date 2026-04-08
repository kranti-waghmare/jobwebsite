import React from 'react'

const NestedLoop = () => {
let num = 1

for(let i=1; i <= 5; i++){
     let row = ""

     for(let j=1; j <= i; j++){
        row += num + "";
        num ++;
     }

     console.log(row);
     
     
}


for(let a=1; a<=5; a++){
  let star = ""
  for(let b=1; b<=5-a; b++){
    star += " "
  }

  for(let c=1; c<=a; c++){
    star += "* "
  }

  console.log(star)
}

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn(); fn(); fn()
// console.log("hehe", fn)

function outSide(){
  let count = 1;
  return function innerSide(){
    count ++;
    console.log(count)
  }
}
const result = outSide()
result(); result(); result()



  return (
    <>
      
       
     
    </>
  )
}

export default NestedLoop