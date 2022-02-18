const sortArray = (a) => {


    let oddarr=[]
    let evenarr=[]
    let result=[]
    for (i=0;i<a.length;i++){
        if(a[i]%2==0){
            evenarr.push(a[i])
        }
        else{
            oddarr.push(a[i])
        }
    }
    oddarr.sort((c,v)=>c-v)
    console.log(oddarr)
    console.log(evenarr)  
    
    for(i=0;i<a.length;i++){
        if(a[i]%2==0){
            result.push(evenarr.shift())
        }
        else{
            result.push(oddarr.shift())
        }
    }
    console.log(result);
 
};
sortArray([1, 28, 3, 9, 7, 8, 3, 12, 17, 5, 18]);
