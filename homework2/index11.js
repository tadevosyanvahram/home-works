// Write a function which calculates average age of users
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

// function getAverageAge(arr) {
//   const reduced = arr.reduce((age, user) => {
//     return user.age + age;

//   }, 0);
//   const averageAge = reduced / users.length;
//   return averageAge;
// }

const getAverageAge = (users) => {
  return users.reduce((aveAge, { age }) => {
    return aveAge + age / users.length; // "/"
  }, 0);
};

console.log(getAverageAge(users)); // 55
