const inputFieldCollection = document.getElementsByTagName("input"); // get all input from form (HTMLCollection)
const inputFieldArray = Array.from(inputFieldCollection); // transform HTMLCollection to Array

// object, that contains validation rules for all input fields
const validationRules = {
  // username validation
  username: (value) => {
    const isValid = value.length >= 8 && value.length <= 16; // is valid condition
    const errorMsg =
      value.length < 8 ? "Minimal length is 8" : "Maximal length is 16"; // error message

    return { isValid, errorMsg: isValid ? "" : errorMsg }; // return multiple variables as object
  },
  // email validation
  email: (value) => {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // regex expression for email test
    const isValid = regEx.test(value); // is valid condition

    return {
      isValid,
      errorMsg: isValid
        ? ""
        : "Email should match this pattern: email@gmail.lv", // error message
    }; // return multiple variables as object
  },
  // age validation
  age: (value) => {
    const isValid = Number(value) >= 16 && Number(value) <= 99; // is valid condition
    const errorMsg =
      Number(value) < 16 ? "You are too young" : "You are too old"; // error message

    return { isValid, errorMsg: isValid ? "" : errorMsg }; // return multiple variables as object
  },
};

// function that receives input elements and sets classes for styling
const setValidationStyles = (inputElement, isValid) => {
  // if valid set valid classes
  if (isValid) {
    inputElement.classList.remove("invalid"); // just in case remove invalid class (if previosly input value was incorrect)
    inputElement.classList.add("valid"); // add valid class
  }
  // if valid set invalid classes
  else {
    inputElement.classList.remove("valid"); // just in case remove valid class (if previosly input value was correct)
    inputElement.classList.add("invalid"); // add invalid class
  }
};

// function that receives input element and validates its value
const validateInput = (inputElement) => {
  const { name, value } = inputElement; // desctructure object to get its value. equals to inputElement.name etc.
  const { isValid, errorMsg } = validationRules[name](value); // get validation results from validationRules[inputElementName](inputElementValue)

  setValidationStyles(inputElement, isValid); // set classes based on input validation

  const p = document.createElement("p"); // create paragraph to append it in dom
  p.innerText = errorMsg; // inserts error message in paragraph
  p.classList.add("error", name); // add classes to paragraph (error and input field name)

  // if not valid
  if (!isValid) {
    // if input group already has error do nothing
    if (!inputElement.parentElement.innerHTML.includes("error")) {
      inputElement.parentElement.append(p); // if error doesn't exist append it to the dom
    }
  }
  // if is valid
  else {
    document.querySelector(`.error.${name}`).remove(); // remove error message
  }
};

// on submit handler
const onSubmit = (e) => {
  e.preventDefault(); // prevent default form submission

  // for each input field
  inputFieldArray.forEach((inputElement) => {
    validateInput(inputElement); // validate each input field element
  });
};

// find submit button and call onSubmit function on button click
document
  .querySelector("button[type='submit']")
  .addEventListener("click", onSubmit);

// for each input field we need to remove validation states, because input changes values and it doesn't make sense to show error/sucessful states
inputFieldArray.forEach((inputEl) => {
  // add input event listener (triggers on input change for each input field)
  inputEl.addEventListener("input", (e) => {
    // cleanup
    document.querySelector(`.error.${e.target.name}`).remove(); // remove error message
    e.target.classList.remove("valid"); // remove valid class
    e.target.classList.remove("invalid"); // remove invalid class
  });
});
