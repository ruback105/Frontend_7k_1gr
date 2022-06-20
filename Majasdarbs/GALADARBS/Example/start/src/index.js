import Beer from "./components/Beer.js";
import config from "./config.js";

const getRandomBeer = async () => {
  return fetch(`${config.BASE_API}/beers/random`)
    .then((res) => res.json())
    .then((data) => data[0]);
};

const renderCard = (cardElement) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.append(cardElement);
};

document.querySelector(".get-beer").addEventListener("click", async () => {
  const { name, description, image_url } = await getRandomBeer();

  const beerElement = new Beer(name, description, image_url);

  renderCard(beerElement.render());
});
