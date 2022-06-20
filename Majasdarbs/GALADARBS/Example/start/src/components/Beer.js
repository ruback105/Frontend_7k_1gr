class Beer {
  constructor(name, description, image_url) {
    this.name = name;
    this.description = description;
    this.image_url = image_url;
  }

  render() {
    const div = document.createElement("div");
    div.classList.add(
      "w-[300px]",
      "max-h-[400px]",
      "overflow-hidden",
      "flex",
      "flex-col",
      "space-y-2",
      "items-center",
      "justify-center",
      "shadow-md",
      "rounded-md",
      "p-4"
    );

    div.innerHTML = `
    <img src="${this.image_url}" class="w-40 h-40" />
    <p class="text-center font-bold text-lg">${this.name}</p>
    <p class="text-center text-xs mt-2">${this.description}</p>
    `;

    return div;
  }
}

export default Beer;
