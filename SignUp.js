const form = document.getElementById('SignUpForm');

form.addEventListener("submit",function(event){
  event.preventDefault();
  var bt = document.getElementById('sub');
  if(!validateForm())
  {
    bt.disabled = true;
  }
  else
  {
    bt.disabled = false;
    window.fetch(window?.config?.ApiUrls?.SIGNUP, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log({ response });
    if (response.status == true) {
      alert("login successfully")
      console.log(response);
      windows.location.href = window?.config?.AppRoutes?.SIGNUP;
      }
    })
    .catch((error ) =>{
      alert(payload);
    });
  }
});

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
