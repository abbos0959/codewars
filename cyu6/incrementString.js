const incrementString = (s) => {
  d = (parseInt(s.match(/[1-9]/gi).join("")) + 1).toString();
  s = s.split("");

  console.log(d);
  let bush = [];
  for (i = 0; i < s.length; i++) {
    if (s[i] == s[i].match(/[A-Z]/gi) ) {
      bush.push(s[i]);
    }
  }
  bush.push(d);
  console.log(bush.join(""));
};
incrementString("salo234");
