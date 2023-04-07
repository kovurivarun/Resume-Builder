const form = document.getElementById("frstaccordion");



form.addEventListener("submit",function(event){
  event.preventDefault();
  const txtFirstName =form.querySelector("[name='firstName']");
  const txtLastName =form.querySelector("[name='lastName']");
  const txtDob =form.querySelector("[name='dateOfBirth']");
  const txtAddress =form.querySelector("[name='Address']");
 
  const pesonalSubmit = form.querySelector("[name='personalDataBtn']")
  const firstName = txtFirstName.value;
  const lastName = txtLastName.value;
  const dob = txtDob.value;
  const Address = txtAddress.value;
  
  //if btnName = 'CertiSubmit' then sectionname = 'Certification'
  const payload={
    firstName,
    lastName,
    dob,
    Address
    

  };
//   alert(email + " " + password);
  window.fetch(window?.config?.ApiUrls?.LOGIN,
    {
      method : "POST" ,
      body: JSON.stringify(payload),
      headers : {
        'Content- Type' : 'application/json'
      }
    }).then((response) => {
      console.log({response});
      if(response.status == true){
     
     alert("login successfully")
     console.log(response);
     window.location.href =
     window?.config?.AppRoutes?.SIGNUP;
      
    }

 

  })
  
  .catch((error ) =>{
    console.log(error);
    alert(JSON.stringify(payload));
  });
});

const contactForm = document.getElementById("secondaccordian");

contactForm.addEventListener("submit",function(event){
    event.preventDefault();
    const txtEmail =form.querySelector("[name='email']");
    const txtPhonenumber=form.querySelector("[name='phoneNumber']");
  const txtAlternatePhoneNumber =form.querySelector("[name='alternateNumber']");
  const txtLink =form.querySelector("[name='linkdin']");
  
  const submitbutton = form.querySelector("[name='submitButton']")
    const email = txtEmail.value;
    const phoneNumber = txtPhonenumber.value;
    const altPhoneNumber = txtAlternatePhoneNumber.value;
    const linkdin = txtLink.value;
    
    //if btnName = 'CertiSubmit' then sectionname = 'Certification'
    const payload={
      email,
      phoneNumber,
      altPhoneNumber,
      linkdin

    };
  //   alert(email + " " + password);
    window.fetch(window?.config?.ApiUrls?.LOGIN,
      {
        method : "POST" ,
        body: JSON.stringify(payload),
        headers : {
          'Content- Type' : 'application/json'
        }
      }).then((response) => {
        console.log({response});
     if(response.status == true){
       
       alert("login successfully")
       console.log(response);
       window.location.href =
       window?.config?.AppRoutes?.SIGNUP;
        
      }
    })
    
    .catch((error ) =>{
      console.log(error);
      alert(JSON.stringify(payload));
    });
  });


  const experienceForm = document.getElementById("thirdaccordion");

  experienceForm.addEventListener("submit",function(event){
    event.preventDefault();
    const txtCompany =form.querySelector("[name='companyName']");
    const txtPosition=form.querySelector("[name='position']");
    const txtDate =form.querySelector("[name='date']");
    const txtCurrentJob =form.querySelector("[name='currentJob']");
    const txtYes =form.querySelector("[name='yes']");
    const txtNo =form.querySelector("[name='no']");
  
  const submitbutton = form.querySelector("[name='submitButton']")
    const companyName = txtCompany.value;
    const position = txtPosition.value;
    const date = txtDate.value;
    const currentJob = txtCurrentJob.value;
    const yes = txtYes.value;
    const no = txtYes.value;
    
    //if btnName = 'CertiSubmit' then sectionname = 'Certification'
    const payload={
      companyName,
      position,
      date,
      currentJob,
      yes,
      no
    };
  //   alert(email + " " + password);
    window.fetch(window?.config?.ApiUrls?.LOGIN,
      {
        method : "POST" ,
        body: JSON.stringify(payload),
        headers : {
          'Content- Type' : 'application/json'
        }
      }).then((response) => {
        console.log({response});
     if(response.status == true){
       
       alert("login successfully")
       console.log(response);
       window.location.href =
       window?.config?.AppRoutes?.SIGNUP;
        
      }
    })
    
    .catch((error ) =>{
      console.log(error);
      alert(JSON.stringify(payload));
    });
  });


  const skillsForm = document.getElementById("fouraccordion");

contactForm.addEventListener("submit",function(event){
    event.preventDefault();
    const txtskillName =form.querySelector("[name='skillName']");
    const txtskillLevel=form.querySelector("[name='skillLevel']");
    const txtbeginner =form.querySelector("[name='beginner']");
    const txtintermediate =form.querySelector("[name='intermediate']");
    const txtadvanced =form.querySelector("[name='advanced']");
    
  
  const submitbutton = form.querySelector("[name='submitButton']")
    const skillName = txtskillName.value;
    const skillLevel = txtskillLevel.value;
    const beginner = txtbeginner.value;
    const intermediate = txtintermediate.value;
    const advanced = txtadvanced.value;
    
    //if btnName = 'CertiSubmit' then sectionname = 'Certification'
    const payload={
      skillName,
      skillLevel,
      beginner,
      intermediate,
      advanced
    };
  //   alert(email + " " + password);
    window.fetch(window?.config?.ApiUrls?.LOGIN,
      {
        method : "POST" ,
        body: JSON.stringify(payload),
        headers : {
          'Content- Type' : 'application/json'
        }
      }).then((response) => {
        console.log({response});
     if(response.status == true){
       
       alert("login successfully")
       console.log(response);
       window.location.href =
       window?.config?.AppRoutes?.SIGNUP;
        
      }
    })
    
    .catch((error ) =>{
      console.log(error);
      alert(JSON.stringify(payload));
    });
  });


  const educationForm = document.getElementById("fiveccordion");

educationForm.addEventListener("submit",function(event){
    event.preventDefault();
    const txtSchoolName =form.querySelector("[name='schoolName']");
    const txtQualification=form.querySelector("[name='qualification']");
    const txtSecondary =form.querySelector("[name='secondary']");
    const txtBachelor =form.querySelector("[name='bachelor']");
    const txtDiploma =form.querySelector("[name='diploma']");
    const txtCgpa =form.querySelector("[name='cgpa']");
    const txtPassingYear =form.querySelector("[name='passingYear']");
    
  
  const submitbutton = form.querySelector("[name='submitButton']")
    const schoolName = txtSchoolName.value;
    const qualification = txtQualification.value;
    const secondary = txtSecondary.value;
    const bachelor = txtBachelor.value;
    const Diploma = txtDiploma.value;
    const cgpa = txtCgpa.value;
    const passingYear = txtPassingYear.value;
    
    //if btnName = 'CertiSubmit' then sectionname = 'Certification'
    const payload={
      schoolName,
      qualification,
      secondary,
      bachelor,
      Diploma,
      cgpa,
      passingYear
    };
  //   alert(email + " " + password);
    window.fetch(window?.config?.ApiUrls?.LOGIN,
      {
        method : "POST" ,
        body: JSON.stringify(payload),
        headers : {
          'Content- Type' : 'application/json'
        }
      }).then((response) => {
        console.log({response});
     if(response.status == true){
       
       alert("login successfully")
       console.log(response);
       window.location.href =
       window?.config?.AppRoutes?.SIGNUP;
        
      }
    })
    
    .catch((error ) =>{
      console.log(error);
      alert(JSON.stringify(payload));
    });
  });


  const projectForm = document.getElementById("sixaccordion");

  educationForm.addEventListener("submit",function(event){
      event.preventDefault();
      const txtProjectName =form.querySelector("[name='Projectname']");
      const txtprojectDescription=form.querySelector("[name='projectDescription']");
      const txtImplementationYear =form.querySelector("[name='ImplementationYear']");
      
      
    
    const submitbutton = form.querySelector("[name='submitButton']")
      const projectName = txtProjectName.value;
      const projectDescription = txtprojectDescription.value;
      const ImplementationYear = txtImplementationYear.value;
      
      
      //if btnName = 'CertiSubmit' then sectionname = 'Certification'
      const payload={
        projectName,
        projectDescription,
        ImplementationYear
        
      };
    //   alert(email + " " + password);
      window.fetch(window?.config?.ApiUrls?.LOGIN,
        {
          method : "POST" ,
          body: JSON.stringify(payload),
          headers : {
            'Content- Type' : 'application/json'
          }
        }).then((response) => {
          console.log({response});
       if(response.status == true){
         
         alert("login successfully")
         console.log(response);
         window.location.href =
         window?.config?.AppRoutes?.SIGNUP;
          
        }
      })
      
      .catch((error ) =>{
        console.log(error);
        alert(JSON.stringify(payload));
      });
    });
  
  
    const certificationsForm = document.getElementById("sevenaccordion");

    certificationsForm.addEventListener("submit",function(event){
      event.preventDefault();
      const txtCertification =form.querySelector("[name='Certification']");
      const txtIssuedBy=form.querySelector("[name='issued_by']");
      const txtCertificationId =form.querySelector("[name='Certification_id']");
      
      
    
    const submitbutton = form.querySelector("[name='submitButton']")
      const certificationName = txtCertification.value;
      const issuedBy = txtIssuedBy.value;
      const CertificationId = txtCertificationId.value;
      
      
      //if btnName = 'CertiSubmit' then sectionname = 'Certification'
      const payload={
        certificationName,
        issuedBy,
        CertificationId
        
      };
    //   alert(email + " " + password);
      window.fetch(window?.config?.ApiUrls?.LOGIN,
        {
          method : "POST" ,
          body: JSON.stringify(payload),
          headers : {
            'Content- Type' : 'application/json'
          }
        }).then((response) => {
          console.log({response});
       if(response.status == true){
         
         alert("login successfully")
         console.log(response);
         window.location.href =
         window?.config?.AppRoutes?.SIGNUP;
          
        }
      })
      
      .catch((error ) =>{
        console.log(error);
        alert(JSON.stringify(payload));
      });
    });
  
  
    const hobbiesForm = document.getElementById("eightaccordion");

    hobbiesForm.addEventListener("submit",function(event){
      event.preventDefault();
      const txtHobbies =form.querySelector("[name='hobbies']");
      
      
      
    
    const submitbutton = form.querySelector("[name='submitButton']")
      const hobbies = txtHobbies.value;
      
      
      
      //if btnName = 'CertiSubmit' then sectionname = 'Certification'
      const payload={
        hobbies
        
      };
    //   alert(email + " " + password);
      window.fetch(window?.config?.ApiUrls?.LOGIN,
        {
          method : "POST" ,
          body: JSON.stringify(payload),
          headers : {
            'Content- Type' : 'application/json'
          }
        }).then((response) => {
          console.log({response});
       if(response.status == true){
         
         alert("login successfully")
         console.log(response);
         window.location.href =
         window?.config?.AppRoutes?.SIGNUP;
          
        }
      })
      
      .catch((error ) =>{
        console.log(error);
        alert(JSON.stringify(payload));
      });
    });
  
  
