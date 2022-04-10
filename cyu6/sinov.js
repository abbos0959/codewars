// const salom = () => {
//   console.log("salom");
// };

// const beh = (val, num) => {
//   console.log(val() + num);
// };

// beh(salom, "Abbos");

// let abbos=["salom","qalesan","behzod","murod","aziz","og`abek"]
// let [firs,,al,...other]=abbos
// console.log(other);

// let count =(function(){
//     let counter=0
//     return function(){
//          console.log(counter+=1);
//     }
// })()
// count()
// count()
// count()
// count()
// sayhell();
// function sayhell(){
//     console.log("function declaration");
// }

// const hello=function(){
//     console.log("function expression");
// }
// hello()
// const salom = (abbos) => {
//   setTimeout(() => {
//     abbos("javob");
//   }, 10000);
// };
// salom((qale)=>{
//     console.log(qale);

// })
// let abb = {
//   name: "abbos",
//   abbosfunc() {
//  console.log("my name is" , this.name);
//   },
// };
// console.log(abb.abbosfunc());

// let abbos=[1,2,[[3]],4,[[[[5]]]]]
// let sa=abbos.flat(Infinity).reduce((a,b)=>{return a+b},0)
// console.log(sa);

// let abbos = {
//   name: "abbos",
//   familiya: "g`ulomov",
//   get fullname() {
//     return this.name + " " + this.familiya;
//   },
//   set fullname(value) {
//     let sal = value.split(" ");
//     (this.name = sal[0]),
//      (this.familiya = sal[1]);
//   },
// };
// abbos.fullname = "salom dunyo";
// console.log(abbos.fullname);

let salom={
  // name:"abbos",
  fullname(){
     console.log( ` salom uka ${this.name}`)
  }
}
let b={
  name:"yigit"
}
  let abb=  salom.fullname.bind(b)
console.log(abb());





