

// function LargestNum(arr){
//   let val = -1;
//   for(let i=0; i < arr.length; i++){
//     let count = 0;

//     for(let j=0; j < arr.length; j++){
//       if(arr[i] === arr[j]){
//         count++;
//       }
//     }
//     if(count > 1){
//       if(val === -1 || arr[i] > val){
//         val = arr[i]
//       }
//     }
//   }
//   return val
// }

// console.log(LargestNum([3,4,5,6,7]))



// function NumHere(str){
//   let val = -1;

//   for(let i=0; i < str.length; i++){
//     let value = 0;

//     for(let j=0; j < str.length; j++){
//       if(str[i] === str[j]){
//         value++;
//       }
//     }

//     if(value > 1){
//       if(val === -1 || str[i] > val){
//         val = str[i]
//       }
//     }
//   }
//   return val
// }

// const input = [1,2,3,4,4,5,6,7,]
// console.log(NumHere(input))


for(let i=1; i <= 5; i++){
  let val = "";

  for(let j=1; j <= i; j++){
   val += j + " "
  }
  console.log(val);
}

for(let i=5; i >= 1; i--){
  let val= "";

  for(let j=1; j<=i; j++){
    val += j + ""
  }
  console.log(val)
}

for(let i = 1; i<=5; i++){
  let val = " ";
  for(let j = 1; j<= 5 - i; j++){
    val += " "
  }
  for(let k=1; k<=i*2-1; k++){
    val += "*"
  }

  console.log(val)
}

for(let i=5; i>=1; i--){
   let val = " ";

   for(let j=1; j<= 5-i; j++){
    val += " "
   }

   for(let k=1; k <=i*2-1 ; k++){
    val += "*"
   }
   console.log(val)
}

function LragestNum(str){
  return Math.max(...str)
}
console.log(LragestNum([2,3,4,5,6]))


function secondlargest(val){
  val.sort((a,b)=> b-a)
  return val[1]  // it indiates by index nuber if i use here 0 then show largest number thta is 9 and if put 1 index then display seond largets num that is 8
}
const input = [5,6,7,8,9]
console.log(secondlargest(input))

//seondlargest but if dupliate 

function dupliate(str){
   const arr = [...new Set(str)];
   const data = arr.sort((a,b) => b-a);
   return data[0]
}
console.log(dupliate([1,2,4,3,3]))

