// Write a function which remove users with language equals to 'ru'

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function filterByLanguage(arr) {
  return arr.filter((item) => item.lang !== "ru");
}

filteredUsers = filterByLanguage(users);
console.log(filteredUsers);
