
function onSubmitForm() {
if(!validateForm())
{
  var bt = document.getElementById('sub');
  bt.disabled = true;
  //document.getElementById("sub").addEventListener("click", () => {
  
  // console.log("Hi")
   window.location.href = "loginpage.html";
//})
}
}




function validateForm() {
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const gender = document.getElementById("gender").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();
  
  const errorElement = document.getElementById("error-message");
  
  if (firstName === "" || lastName === "" || gender === "" || dob === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
    errorElement.innerHTML = "Please fill in all fields";
    return false;
  }
  
  if (!isValidEmail(email)) {
    errorElement.innerHTML = "Please enter a valid email address";
    return false;
  }
  
  if (!isValidPhone(phone)) {
    errorElement.innerHTML = "Please enter a valid 10-digit phone number";
    return false;
  }
  
  if (password !== confirmPassword) {
    errorElement.innerHTML = "Passwords do not match";
    return false;
  }

  alert("Please press on login button");
  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}
// function manage(firstname) {
//   var bt = document.getElementById('sub');
//   if (firstname.value != '') {
//       bt.disabled = false;
//   }
//   else {
//       bt.disabled = true;
//   }
// }


// function manage(lastname) {
//   var bt = document.getElementById('sub');
//   if (lasttname.value != '') {
//       bt.disabled = false;
//   }
//   else {
//       bt.disabled = true;
//   }
// }

// function manage(gender) {
//   var bt = document.getElementById('sub');
//   if (gender.value != '') {
//       bt.disabled = false;
//   }
//   else {
//       bt.disabled = true;
//   }
// }
// function manage(dob) {
//   var bt = document.getElementById('sub');
//   if (dob.value != '') {
//       bt.disabled = false;
//   }
//   else {
//       bt.disabled = true;
//   }
// }
// function manage(email) {
//   var bt = document.getElementById('sub');
//   if (email.value != '') {
//       bt.disabled = false;
//   }
//   else {
//       bt.disabled = true;
//   }
// }
// function manage(phone) {
//   var bt = document.getElementById('sub');
//   if (phone.value != '') {
//       bt.disabled = false;
//   }
//   else {
//       bt.disabled = true;
//   }
// }
// function manage(password) {
//   var bt = document.getElementById('sub');
//   if (password.value != '') {
//       bt.disabled = false;
//   }
//   else {
//       bt.disabled = true;
//   }
// }
// function manage(confirmpassword) {
//   var bt = document.getElementById('sub');
//   if (confirmpassword.value != '') {
//       bt.disabled = false;
//   }
//   else {
//       bt.disabled = true;
//   }
// }




// })
    
  