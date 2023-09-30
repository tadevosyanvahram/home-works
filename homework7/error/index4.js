function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    let student = lab.student;
    let func = lab.runLab;

    try {
      let result = func(4);
      let expected = 256;

      if (result === expected) {
        console.log(`${student} passed the lab`);
      } else {
        console.log(`${student} failed the lab`);
      }
    } catch (err) {
      console.log(`ERROR  ${err.message}`);
    }
  }
}

let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];
gradeLabs(studentLabs2);
