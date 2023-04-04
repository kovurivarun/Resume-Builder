const form = document.querySelector('form');
const firstname = document.getElementsByTagName("input")[0];
const surname = document.getElementsByTagName("input")[1];
const email = document.getElementsByTagName("input")[3];
const password = document.getElementsByTagName("input")[4];
const cpassword = document.getElementsByTagName("input")[5];



const isValidEmail = email =>{
    const rex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return rex.test(String(email).toLowerCase());
}
form.addEventListener('submit', e =>{
    e.preventDefault();
    validate();
});


const errorMsg = (ele, msg)=>{
    const control=ele.parentElement;
    const errortxt=control.querySelector(".formerror");
    errortxt.innerText=msg;
    control.classList.add("formerror");
    control.classList.remove('success');
};

const successMsg = ele=>{
    const control=ele.parentElement;
    const errortxt=control.querySelector(".formerror");
    errortxt.innerText="";
    control.classList.add("success");
    control.classList.remove('error')
}

const validate= ()=>{
    const firstnameValue = firstname.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
    let count=0;
    
    if (firstnameValue===''){
        errorMsg(firstname, 'firstrname is required');
    }
    else{
        successMsg(firstrname);
        count +=1;
    }
    if (surnameValue===''){
        errorMsg(surname, 'surrname is required');
    }
    else{
        successMsg(surrname);
        count +=1;
    }

    if(emailValue===""){
        errorMsg(email,"Email is required");
    }
    else if(!isValidEmail(emailValue)){
        errorMsg(email,"Provide a valid email address");
    }
    else{
        successMsg(email);
        count +=1;
    }

    if(passwordValue=== ""){
        errorMsg(password,"Password is required");
    }
    else if(passwordValue.length < 8){
        errorMsg(password,"Password must be at least 8 character.");
    }
    else{
        successMsg(password);
        count+=1;
    }

    if(cpasswordValue=== ""){
        errorMsg(cpassword,"Please confirm your password");
    }
    else if(cpasswordValue!==passwordValue){
        errorMsg(cpassword,"Password doesn't match.");
    }
    else{
        successMsg(cpassword);
        count+=1;
    }


    if(count===5){
        form.submit();
    }
}