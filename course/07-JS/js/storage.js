// // local storage keys
// const usernameKey = "username";
// const emailKey = "email";
// const hobbyKey = "hobby";

// // local storage values
// const usernameToLocalStorage = "test_name";
// const emailToLocalStorage = "email@gmail.com";
// const hobbyToLocalStorage = "sports";

// // try to get values from local storage
// let usernameFromLocalStorage = localStorage.getItem(usernameKey);
// let emailFromLocalStorage = localStorage.getItem(emailKey);
// let hobbyFromLocalStorage = localStorage.getItem(hobbyKey);

// // if local storage doesnt contain value, set it and use fallback value
// if (!usernameFromLocalStorage) {
//   localStorage.setItem(usernameKey, usernameToLocalStorage);
//   usernameFromLocalStorage = usernameToLocalStorage;
// }

// if (!emailFromLocalStorage) {
//   localStorage.setItem(emailKey, emailToLocalStorage);
//   emailFromLocalStorage = emailToLocalStorage;
// }

// if (!hobbyFromLocalStorage) {
//   localStorage.setItem(hobbyKey, hobbyToLocalStorage);
//   hobbyFromLocalStorage = hobbyToLocalStorage;
// }

// // get html element
// let usernameElement = document.querySelector("p#username > span");
// let emailElement = document.querySelector("p#email > span");
// let hobbyElement = document.querySelector("p#hobby > span");

// // insert local storage data into html
// usernameElement.innerText = usernameFromLocalStorage;
// emailElement.innerText = emailFromLocalStorage;
// hobbyElement.innerText = hobbyFromLocalStorage;

/* JSON local storage values */
const currentUser = localStorage.getItem("current_user");

if (currentUser) {
  const meFromJson = JSON.parse(currentUser);

  Object.keys(meFromJson).forEach((key) => {
    const selectedElement = document.querySelector(`p#${key} > span`);
    selectedElement.innerText = meFromJson[key];
  });
} else {
  const me = {
    username: "user_name",
    email: "email@gmail.com",
    hobby: "sports",
  };

  localStorage.setItem("current_user", JSON.stringify(me));
}

/* GET/SET data in local storage functions  */
