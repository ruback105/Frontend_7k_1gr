function checkZIP() {
  
    var constraints = {
      lv: [
        "^(LV-)?\\d{4}$",
        "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007",
      ],
  
      LT: [
        "^(LT-)?\\d{4}$",
        "Lietuvas ZIPs jabut 4 simboliem un jasakas ar LT-: e.g. LV-3001 or 3007",
      ],
  
      EE: [
        "^(EE-)?\\d{4}$",
        "Igaunijas ZIPs jabut 4 simboliem un jasakas ar EE-: e.g. LV-3001 or 3007",
      ],
  
      GE: [
        "^(GE-)?\\d{4}$",
        "Vācijas ZIPs jabut 4 simboliem un jasakas ar GE-: e.g. LV-3001 or 3007",
      ]
  
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
    const formvalue = [];
    const inputElements = document.getElementsByTagName ("input");
  
    for (let i=0; i<= inputElements.length; i++) {
      if (inputElements.value);
      formvalue.push(value);
    } 
        alert(formvalue);
  };
  
  

  
  window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
    document.getElementById("form").addEventListener("submit", printValues);
  };
  

