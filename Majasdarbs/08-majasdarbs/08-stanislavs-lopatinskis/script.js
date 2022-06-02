function checkZIP() {
  // Pievinot vel 3 valsti
  var constraints = {
    lv: [
      "^(LV-)?\\d{4}$",
      "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007",
    ],
    ee: [
      "^(EE-)?\\d{4}$",
      "Igaunijas ZIPs jabut 4 simboliem un jasakas ar EE-: e.g. EE-2001 or 2007",
    ],
    ua: [
      "^(UA-)?\\d{4}$",
      "Ukrainas ZIPs jabut 4 simboliem un jasakas ar UA-: e.g. UA-4001 or 4007",
    ],
    fr: [
      "^(FR-)?\\d{4}$",
      "Francijas ZIPs jabut 4 simboliem un jasakas ar FR-: e.g. FR-5001 or 5007",
    ],
    // for example if we will have ee (Estonia) we can add similar validation (shouldn't be real, just a mock one)
    // "^(EE-)?\\d{4}$",
    // "Estonias ZIPs jabut 4 simboliem un jasakas ar EE-: e.g. EE-3001 or 3007",
  };

  // Read the country id
  var country = document.getElementById("Country").value;

  // Get the NPA field
  var ZIPField = document.getElementById("ZIP");

  // Build the constraint checker
  var constraint = new RegExp(constraints[country][0], "");

  // Check it!
  if (constraint.test(ZIPField.value)) {
    // The ZIP follows the constraint, we use the ConstraintAPI to tell it
    ZIPField.setCustomValidity("");
  } else {
    // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
    // give a message about the format required for this country
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}

function printValues() {
  var matches = [];
  var inputs = document.getElementsByTagName("input");
    
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].id === "submit") {
      continue;
    }
    matches.push(inputs[i].value);    
  }

  alert(matches);
}

window.onload = function () {
  document.getElementById("country").onchange = checkZIP;
  document.getElementById("zip").oninput = checkZIP;
  document.getElementById("form").addEventListener("submit", printValues);
}: