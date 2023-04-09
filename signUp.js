const form=document.getElementById("signup-form");

const txtName = form.querySelector("[name='firstname']");
const txtLastName = form.querySelector("[name='lastname']");
const txtGender = form.querySelector("[name='gender']");
const txtMale = form.querySelector("[name='male']");
const txtFemale = form.querySelector("[name='female']");
const txtOther = form.querySelector("[name='other']");
const txtNotDisclosed = form.querySelector("[name='NotDisclosed']");
const txtDob = form.querySelector("[name='dob']");
const txtEmail = form.querySelector("[name='email']");
const txtPhone = form.querySelector("[name='phone']");
const txtConfirmPassword = form.querySelector("[name='confirmpassword']");
const txtQuestion1 = form.querySelector("[name='Question1']");
const txtQuestion2 = form.querySelector("[name='Question2']");
const txtQuestion3 = form.querySelector("[name='Question3']");
const txtQuestion4 = form.querySelector("[name='Question4']");
const txtSecurityAnswer = form.querySelector("[name='SecurityAnswer']");


form.addEventListener("sub",function(event){
  event.preventDefault();
  const name=txtName.value;
  const lastname=txtLastName.value;
  const gender=txtGender.value;
  const male=txtMale.value;
  const female=txtFemale.value;
  const other=txtOther.value;
  const notdisclosed=txtNotDisclosed.value;
  const dob=txtDob.value;
  const email=txtEmail.value;
  const phone=txtPhone.value;
  const confirmpassword=txtConfirmPassword.value;
  const question1=txtQuestion1.value;
  const question2=txtQuestion2.value;
  const question3=txtQuestion3.value;
  const queston4=txtQuestion4.value;
  const securityanswer=txtSecurityAnswer.value;

  const payload={
    name,
    lastname,
    gender,
    male,
    female,
    other,
    notdisclosed,
    dob,
    email,
    phone,
    confirmpassword,
    question1,
    question2,
    question3,
    queston4,
    securityanswer

  };

  windowwindow.fetch(window?.config?.ApiUrls?.SIGNUP,{
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

});
function onSubmitForm() {
if(!validateForm())
{
  var bt = document.getElementById('sub');
  bt.disabled = true;
  
   window.location.href = "login.html";

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




// const submitButton=document.querySelector('div.ss #sub')
// const form=document.querySelector('div.container1 #signup-form')
// submitButton.addEventListener('click',(event) =>{
//   console.log("buutonclicked");
//   const firstname = form.querySelector("[name='firstName']");
//  const lastname= form.querySelector("[name='lastname']");
//  const gender= form.querySelector("[name='gender']");
//  const dob= form.querySelector("[name='dob']");
//  const email= form.querySelector("[name='email']");
//  const phone= form.querySelector("[name='phone']");
//  const password= form.querySelector("[name='password']");
//  const confirmpassword= form.querySelector("[name='confirmpassword']");
//  const security= form.querySelector("[name='security']");
//  const SecurityAnswer= form.querySelector("[name='SecurityAnswer']");
//  const requestBody={
//   firstname,
//   lastname,
//   gender,
//   dob, 
//   email,
//   phone,
//   password,
//   confirmpassword,
//   security,
//   SecurityAnswer
//  }
//  window.fetch(window?.config?.ApiUrls?.SIGNUP,{
//   method:'POST',headers:{
//     'Content-Type':'application/json'
//   },
//   body:JSON.stringify(requestBody)
// })
// .then((response) => {
//   return response.json();
//   alert(JSON.stringify(response));
// })
// .then((data) => {
//   console.log(data);
//   alert(JSON.stringify(response));
// })
// .catch((error) => {
//   console.error(error);
//   alert(JSON.stringify(response));
// });
// }

// )


// const requestBody= {
  
//     firstname: "varun",
//     lastname: "kovuri",
//     gender: "male",
//     dob: "25-05-2001",
//     email: "varun@gmail.com",
//     phone: "9959091234",
//     password: "Asdfg123",
//     confirmpassword: "Asdfg123",
//     security: "What is your Maiden Name?",
//     SecurityAnswer: "haha"
// }
// fetch("http://localhost:5000",{
//   method:'POST',headers:{
//     'Content-Type':'application/json'
//   },
//   body:JSON.stringify(requestBody)
// })
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((error) => {
//   console.error(error);
// });