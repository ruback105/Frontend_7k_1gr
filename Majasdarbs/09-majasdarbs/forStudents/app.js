// Izvejdojam mainīgo dogSelector, kuru saglabājam mūsu <select> element. Var izmantot elementa id 'dogSelector' un getElementById() metodi 
const dogSelector = document.getElementById("dogSelector");
const dogImg = document.getElementById("dogImg");
const dogName = document.getElementById("dogName");
// Izveidojam funkciju renderDogData(data),  kura saņems suņa šķirnes datus 
const renderDogData = (data) => {
  if (!data) {
    return;
  }
  if (data.message) {
    dogImg.innerHTML = `<img src="${data.message}"></img>`;
    return;
  }
  // Izmantojot cilku forEach() izejam cauri mūsu datiem un pieinojam  dogSelector ar innerHTML metodi nepiecišamo html `<option value=${breed.value}>${breed.name}</option>` 
  data.forEach((breed) => {
    const option = document.createElement("option");
    const header = document.createElement("p");
    header.innerHTML = `${breed.name}`;
    option.value = `${breed.value}`;
    option.innerHTML = `${breed.name}`;
    dogSelector.appendChild(option);
    dogName.appendChild(header);
  });
};
// pievinojiet funkciju getDogImg - pievienojam funkcijai mainīgu url, kurā saglabāsim mūsu api url https://dog.ceo/api/breed/SUŅA-ŠKIRNE/images/random 
const getDogImg = () => {
  const url = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;

  // Mūsu (api) nepiecišams padot izvēlēto suņa škirni, mēs varam to padot izmantojot (dogSelector.value), 
  //tālāk izmantojot (fetch()) metodi izvejdojam (request) priekš servera
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderDogData(data))
    .catch((error) => alert(error));
};
// izvedojam funkciju renderDogData(), kurai padosim mūsu data objektu 
renderDogData(data);
getDogImg();

// pievienojam eventlistener
dogSelector.addEventListener("change", getDogImg);
