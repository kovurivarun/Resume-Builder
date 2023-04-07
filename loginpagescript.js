const form = document.getElementById("login");
const txtEmail = form.querySelector("[name='email']");
const txtPassword = form.querySelector("[name='Password']");

<<<<<<< HEAD
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = txtEmail.value;
  const password = txtPassword.value;
  const payload = {
    email,
=======


const form = document.getElementById("login"); ̰
const txtemail = form.querySelector("[name='email']");
const txtpassword = form.querySelector("[name='Password']");

form.addEventListener("submit",function(event){
  event.preventDefault();
  const email = txtemail.value;
  const password = txtpassword.value;
  const payload = {
    email, 
>>>>>>> 82b1a6bc08b76badeabba7a5f6b0142b96e509ba
    password
  };
  
  alert(email + " " + password);
<<<<<<< HEAD
  window.fetch(window?.config?.ApiUrls?.LOGIN, {
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
    else{
      alert("login failed")
      // form.querySelector("[name='email']").value="varun"
      // form.querySelector("[name='Password']").value="vaasdf123"
      windows.location.href = window?.config?.AppRoutes?.LOGIN;
    }

=======

  window.fetch(ApiUrls.LOGIN,
    { 
      method: "Post",
      body: JSON.stringify(payload)
    }
  ).then((response) => {
   if (response.status == true) {
     alert("login successfully")
     console.log(response);
     windows.location.href="Signupwithjs.html"; 
    }
>>>>>>> 82b1a6bc08b76badeabba7a5f6b0142b96e509ba
  })

    .catch((error) => {
      console.log(error);
      // form.querySelector("[name='email']").value="varun"
      // form.querySelector("[name='Password']").value="vaasdf123"
      alert(JSON.stringify(payload));

    });

});