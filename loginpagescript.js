const form = document.getElementById("login");
const txtEmail = form.querySelector("[name='email']");
const txtPassword = form.querySelector("[name='Password']");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = txtEmail.value;
  const password = txtPassword.value;
  const payload = {
    email,
    password
  };
  alert(email + " " + password);
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

  })

    .catch((error) => {
      console.log(error);
      // form.querySelector("[name='email']").value="varun"
      // form.querySelector("[name='Password']").value="vaasdf123"
      alert(JSON.stringify(payload));

    });

});