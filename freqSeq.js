const paintLetterboxes = (start, end) => {
  let bush = [];
  a=3
  let d=[]
  count=0
  let abbos
  var a
//   console.log(a)
  for (i = start; i < end; i++) {
    bush.push(i.toString().split(""));
  }
  let s = bush.flat(Infinity).map((i) => Number(i));
  for(i=0;i<s.length;i++){
      for(j=1;j<s.length;j++){
          if(s[i]==s[j]){
         count= count+1
          }
          
      }
  }
  

  
  let arr=[1,2,4,5,6,8,4,4,2,2,1,1]
  let my=  Array.from(new Set(arr))
  console.log(arr)
  console.log(my)
  
};
paintLetterboxes(125, 132);
