// const getFetchUrl = (baseUrl, queryParams) => {
//   const url = new URL(baseUrl);

//   Object.keys(queryParams).forEach((key) => {
//     url.searchParams.set(key, queryParams[key]);
//   });

//   return url;
// };

// const fetchUser = async () => {
//   const queryParams = {
//     gender: "female",
//     nat: "gb",
//     results: 20,
//   };

//   const { href } = getFetchUrl("https://randomuser.me/api/", queryParams);

//   const user = await fetch(href)
//     .then((res) => res.json())
//     .then((data) => data.results);

//   console.log(user);
// };

// fetchUser();

// const fetchUsers = async () => {
//   // https://jsonplaceholder.typicode.com/ - fetch users api
//   const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
//     (res) => res.json()
//   );

//   console.log(users);
// };

// fetchUsers();

// fetch 100 results
// gb and us
// male
