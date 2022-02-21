const GetMiddle = (s) => {
  let position;
  let soni;

  if (s.length % 2 == 1) {
    position = Math.floor( s.length / 2);
    soni = 1;
  } else {
    position = s.length / 2 - 1;
    soni = 2;
  }

  console.log(s.substring(position, position + soni),s.length/2);
};
GetMiddle("yibsjnfd");
