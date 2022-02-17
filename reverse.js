// const reverse=(n)=>{
//     let bush=[]
// for(let i=1;i<n;i++){
// bush.push(i)

// }
// console.log(bush.reverse());

// }

// reverse(5)

// function finalGrade(exam, projects) {
//   if (exam > 90 || projects > 10) {
//     console.log(100);
//   } else if ((exam < 90 && exam > 75) || projects > 5) {
//     console.log(90);
//   } else if (exam < 75 && exam > 50 && projects > 2) {
//     console.log(75);
//   } else if (exam < 50 && projects > 10) {
//     console.log(100);
//   } else {
//     console.log(0);
//   }
// }
// finalGrade(47, 8);
const salom = (c) => {
  let bush = [];
  for (i = 1; i < c; i++) {
    if (c % i == 0) {
        bush.push(i)
      
    }
  }
  console.log(bush);
};
salom(12);
