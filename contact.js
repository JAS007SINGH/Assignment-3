function validateForm() {
    var fname = document.forms["contactForm"]["fname"].value;
    var lname = document.forms["contactForm"]["lname"].value;
    var email = document.forms["contactForm"]["email"].value;
    var date = document.forms["contactForm"]["date"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var message = document.forms["contactForm"]["message"].value;
  
    if (fname.length < 5) {
      alert("First name must be at least 5 characters.");
      return false;
    }
  
    if (lname.length < 5) {
      alert("Last name must be at least 5 characters.");
      return false;
    }
  
    if (!email.includes("@")) {
      alert("Email must contain the @ symbol.");
      return false;
    }
  
    if (!isValidDate(date)) {
      alert("Date must have the format dd/mm/yy.");
      return false;
    }
  
    if (phone.length != 10 || isNaN(phone)) {
      alert("Phone must contain 10 digits.");
      return false;
    }
  
    if (message.length < 50) {
      alert("Message must be at least 50 characters.");
      return false;
    }
  
    return true;
  }
  
  function isValidDate(date) {
    var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{2})$/;
    if (!pattern.test(date)) {
      return false;
    }
    var d = new Date(date.replace(pattern, "$2/$1/$3"));
    var day = d.getDate().toString();
    var month = (d.getMonth() + 1).toString();
    var year = d.getFullYear().toString().substr(-2);
    var newDate = day.padStart(2, "0") + "/" + month.padStart(2, "0") + "/" + year.padStart(2, "0");
    return newDate === date;
  }