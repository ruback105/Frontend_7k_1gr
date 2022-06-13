class BaseElement {
  constructor(tag, classNames) {
    this.tag = tag;
    this.classNames = classNames;

    this.element = null;

    this.createElement();
  }

  createElement() {
    this.element = document.createElement(this.tag);
    this.element.classList.add(...this.classNames);
  }
}

class Paragraph extends BaseElement {
  constructor(classNames, text) {
    super("p", classNames);

    this.text = text;

    this.init();
  }

  init() {
    this.element.innerText = this.text;
  }
}

class ImageElement extends BaseElement {
  constructor(classNames, src, alt, width, height) {
    super("img", classNames);

    this.src = src;
    this.alt = alt;
    this.width = width;
    this.height = height;

    this.init();
  }

  init() {
    this.element.src = this.src;
    this.element.alt = this.alt;
    this.element.width = this.width;
    this.element.height = this.height;
  }
}

class Button extends BaseElement {
  constructor(classList, type, children) {
    super("button", [...classList, "button"]);

    this.type = type;
    this.children = children;

    this.init();
  }

  init() {
    this.element.type = this.type;
    this.element.innerHTML = this.children;
  }
}

class SubmitButton extends Button {
  constructor(children) {
    super(["primary", "submit"], "submit", children);
  }
}

const paragraph = new Paragraph(
  ["text-center", "text-large", "text-black-500"],
  "class based paragraph"
);

const image = new ImageElement(
  ["w-8", "h-8", "mx-auto"],
  "./FlexBox.png",
  "random bilde",
  150,
  150
);

const button = new Button([], "submit", "Click me");
const submitButton = new SubmitButton("Submit");

document.getElementById("output").append(image.element);
document.getElementById("output").append(paragraph.element);
document.getElementById("output").append(button.element);
document.getElementById("output").append(submitButton.element);
