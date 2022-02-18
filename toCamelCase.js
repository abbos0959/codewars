const toCamelCase = (s) => {
  let a = s.split("");

  for (i = 0; i < a.length; i++) {
    if (a[i] == "-") {
      a[i + 1] = a[i + 1].toUpperCase();
      a[i] = "";
    }
  }
  console.log(a.join(""));
};
toCamelCase("salomi-qalesani");
