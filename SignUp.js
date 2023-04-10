const form = document.getElementById('SignUpForm');
const txtfirstname = form.querySelector("[name='firstname']");
const txtlastname = form.querySelector("[name='lastname']");
const txtgender = form.querySelector("[name='gender']");
const txtdob = form.querySelector("[name='dob']");
const txtemail = form.querySelector("[name='email']");
const txtphone = form.querySelector("[name='phone']");
const txtpassword = form.querySelector("[name='password']");
const txtsecurity = form.querySelector("[name='security']");
const txtSecurityAnswer = form.querySelector("[name='SecurityAnswer']");

form.addEventListener("submit",function(event){
  event.preventDefault();
  
  firstname = txtfirstname.value;
  lastname = txtlastname.value;
  gender = txtgender.value;
  dob =  txtdob.value;
  email = txtemail.value;
  phone = txtphone.value;
  password =  txtpassword.value;
  security =  txtsecurity.value;
  SecurityAnswer =  txtSecurityAnswer.value;


  const payload = {
    firstname,
    lastname,
    gender,
    dob,
    email,
    phone,
    password,
    security,
    SecurityAnswer
  };
  alert(JSON.stringify(payload));
    window.fetch(window?.config?.ApiUrls?.SIGNUP, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',

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
});