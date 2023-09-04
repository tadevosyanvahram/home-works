// Write a function which returns array of usernames.

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

function getUserNames(userArray) {
  let userNames = [];
  for (let i = 0; i < userArray.length; i++) {
    userNames.push(userArray[i].username);
  }
  return userNames;
}

// function getUserNames(userArray) {
//     return userArray.map(user => user.username);
// }

// function getUserNames(users) {
// 	return users.reduce((names, {username}) =>{
//   	return [...names, username];
//   },[]);
// }

let userNames = getUserNames(users);
console.log(usernames);

let usernames = getUserNames(users);
console.log(usernames);
