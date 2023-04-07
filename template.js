// generating resume
function generateResume(){
    // first name
    let frstname  = document.getElementById("firstName").value;
    let name = document.getElementById("nameT");
    name.innerHTML = frstname;
    
    // last name
    let lstname = document.getElementById("lastName").value;
    let lname = document.getElementById("lastnameT");
    lname.innerHTML = lstname;

    // dob
    let birth = document.getElementById("dateOfBirth").value;
    let dofbirth = document.getElementById("dobT");
    dofbirth.innerHTML = birth;

    // address
    let addr = document.getElementById("Address").value;
    let preaddr = document.getElementById("addressT");
    preaddr.innerHTML = addr;

    //email

    let mail = document.getElementById("email").value;
    let mails = document.getElementById("emailT");
    mails.innerHTML = mail;

    //Phone
    let num = document.getElementById("phoneNumber").value;
    let phone = document.getElementById("contactT");
    phone.innerHTML = num;

    //alt phone
    let number = document.getElementById("alternateNumber").value;
    let numbers = document.getElementById("contactT1");
    numbers.innerHTML = number;

    //linkedinurl

    let url = document.getElementById("linkdin").value;
    let urls= document.getElementById("linkedinT");
    urls.innerHTML = url;

    //skill

    let skill = document.getElementById("skillName").value;
    let skills = document.getElementById("skillT");
    skills.innerHTML = skill;

    let hob = document.getElementById("addHobby ").value;
    let hobb = document.getElementById("hobbies1T");
    hobb.innerHTML = hob;

}