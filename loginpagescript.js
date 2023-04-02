const validate = async () => {
    var username=document.getElementById("uname").value;
    var password=document.getElementById("pass").value;
    if(username === "" ||password === ""){
        alert("No blanks are allowed");
    }
    else{
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
          });
        
          const data = await response.json();
          console.log(data);
          if (data.success) {
            window.location.href = 'mainpage.html';
          } 
    }
}