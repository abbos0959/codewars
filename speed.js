const Speed = (n) => {
  if (n < 70+5) {
    console.log("ok");
  } else if (n > 70) {
    let ab = Math.floor(n);
    let s = ab - 70;
    let a = Math.floor(s / 5);

    if (a > 12) {
      console.log("prava olib qo`yildi");
    } else {
      console.log(a);
    }
  }
};
Speed(88);
