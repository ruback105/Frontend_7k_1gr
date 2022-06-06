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
// };

// fetchUser();

const renderUserList = (userList) => {
  const userSection = document.querySelector("section.results");

  userList.forEach((user) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("user", "wrapper");

    console.log(user);
    cardWrapper.innerHTML = `
    <img src="${user.picture.large}"></img>
    <p>${user.name.first} ${user.name.last}</p>
    <div class="user-content">
    <p>Email: <span>${user.email}</span></p>
    <p>Gender: <span>${user.gender}</span></p>
    <p>Phone: <span>${user.phone}</span></p>
    </div>
    `;

    userSection.append(cardWrapper);
  });
};

const onLoad = async () => {
  const { search } = window.location;

  if (search) {
    const userList = await fetch(`https://randomuser.me/api/${search}`)
      .then((res) => res.json())
      .then((data) => data.results);

    renderUserList(userList);
  }
};

onLoad();
