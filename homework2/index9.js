// 9 Write a function which filters object by field.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(arr, field) {
  return arr.filter((item) => item[field]); // [] .
}

let result = filterByField(users, "isAstronaut");
console.log(result);
