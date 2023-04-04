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

const baseUrl = "http://localhost:5501";
const ApiUrls = {

  LOGIN: `${baseUrl}/login`
  
  };



const form=document.getElementById("login");
const txtemail =form.querySelector("[name='email']");
const txtpassword =form.querySelector("[name='Password']");
form.addEventListener("submit",function(event){
  event.preventDefault();
  const email = txtemail.value;
  const password = txtpassword.value;
  const payload={
    email,password
  };
  alert(email + " " + password);
  window.fetch(
    window.fetch(ApiUrls.LOGIN,
    {method : "Post" ,body: JSON.stringify(payload)}
  ))
  .then((response) => {
   if(response.status==true){
     
     alert("login successfully")
     console.log(response);
     windows.location.href="Signupwithjs.html";
      
    }

 

  })
  
  .catch((error ) =>{
    alert(error);
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