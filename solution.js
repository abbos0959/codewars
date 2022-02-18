function solution(number){
    let sum=0
    for(let i=1;i<number;i++){
      if(i%5==0 || i%3==0){
        sum=sum+i
      }
      
    }
console.log(sum);
  }
  solution(10)