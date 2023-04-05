// const validate = async () => {
//     var username=document.getElementById("uname").value;
//     var password=document.getElementById("pass").value;
//     if(username === "" ||password === ""){
//         alert("No blanks are allowed");
//     }
//     else{
//         const response = await fetch('/login', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ username, password })
//           });
        
//           const data = await response.json();
//           console.log(data);
//           if (data.success) {
//             window.location.href = 'mainpage.html';
//           } 
//     }
// }



const form = document.getElementById("login");
const txtEmail = form.querySelector("[name='email']");
const txtPassword = form.querySelector("[name='Password']");

form.addEventListener("submit",function(event){
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
  })
    .catch((error ) =>{
    alert(payload);
  });
});
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
  
//    
  
// const email=document.getElementById("uname").Value;
//  const form=document.getElementById("login").Value;
//     const password = <value>;
  
//    
  
//     const payload = {
//       email,
//       password
//     };
  
//    
  
//     window
//       .fetch("<LoginPageURL>", {
//         method: "POST",
//         body: JSON.stringify(payload)
//       })
//       .then((response) => {
//         if (response.success === true) {
//           window.location.href = AppRoutes.DASHBOARD;
//         }
//         console.log({ response });
//       })
//       .catch((err) => {
//         console.log({ err });
//       });
//   });