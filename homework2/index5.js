// Write a function which returns array of lengths of user names

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

function getUsernameLengths(users) {
  let usernamesLength = users.map((user) => user.username.length);

  return usernamesLength;
}

console.log(getUsernameLengths(users));
