const removeConsecutiveDuplicates = (n) => {
  let m = n.split(" ");
  let bush = [];

  for (i = 0; i < m.length; i++) {
    if (m[i] == m[i + 1]) {
      bush.push()
    } else {
      bush.push(m[i]);
    }
  }
  let d = bush.join(" ");
  console.log(d);
};
removeConsecutiveDuplicates(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
);
