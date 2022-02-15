const abbrevName=(str)=>{


    let abbos=str.split(" ")
    let b=abbos[0].charAt(0).toUpperCase() + "." +abbos[1].charAt(0).toUpperCase()
    console.log(b);

}
abbrevName("salom abbos")