const dogSelector = document.getElementById("dogSelector");
const dogImg = document.getElementById("dogImg");

// Render list and image
const renderDogData = (data) => {
   if (Array.isArray(data)) {
    data.forEach((elem) => {
        const o = document.createElement("option");
        o.setAttribute("value", elem.value);
        o.innerHTML = `${elem.name}`;
        dogSelector.appendChild(o);   
    });
   }

    dogImg.innerHTML = `<img src="${data.message}">`;
};

// Fetch an image for selected breed
const getDogImg = async () => {
    const url = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;

    await fetch(url) 
    .then(response => response.json()) 
    .then(data => renderDogData(data))
 	.catch(error => alert(error));

}

renderDogData(data);
getDogImg();

dogSelector.addEventListener("change", getDogImg);