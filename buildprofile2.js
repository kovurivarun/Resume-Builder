{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
		crossorigin="anonymous"></script> */}

		let company = document.getElementById('company');
		let addbtn = document.getElementById('addCompany');
		const addEvent = () => {
            debugger;
			let newDiv = document.createElement('div');
			let curValue = 1;
			if (company.lastElementChild.lastElementChild !== null) {
				let cur = company.lastElementChild.lastElementChild.getElementsByTagName('input')[0].attributes.id
				curValue = Number.parseInt(cur) + 1;

			}
			newDiv.class = 'container my-3'
			newDiv.innerHTML = `
    						<h2>Company</h2>
							<div class="mb-3">
								<label   class="form-label">Company Name</label>
								<input type="text"name="companyName" class="form-control" id="companyName" placeholder="Enter Company Name">
							</div>
							<div class="mb-3">
								<label   class="form-label">Position</label>
								<input type="text"name="position" class="form-control" id="position" placeholder="Enter Position you Worked for">
							</div>
							<div class="form-group"> <!-- Date input -->
								<label class="control-label" for="date">Start Date</label>
								<input class="form-control" id="startDate" name="date" placeholder="MM/DD/YYY" type="date"/>
							  </div>
							  <div class="mb-3" style="margin-top: 10px;">
								<label for="inputState"name="currentJob" class="form-label">Current Job</label>
								<select id="experience" class="form-select">
								  <option selected name="yes">Yes</option>
								  <option name="no">No</option>
								</select>
							  </div>
							<div class="form-group"> <!-- Date input -->
								<label class="control-label" for="date">End Date</label>
								<input class="form-control" id="endDate" name="endDate" placeholder="MM/DD/YYY" type="date"/>
							</div>
    `
			company.appendChild(newDiv)
			document.getElementById('companyName').setAttribute("id",'companyName'+(company.childNodes.length-3 ))
			document.getElementById('position').setAttribute("id",'position'+(company.childNodes.length-3 ))
			document.getElementById('startDate').setAttribute("id",'startDate'+(company.childNodes.length-3 ))
			document.getElementById('experience').setAttribute("id",'experience'+(company.childNodes.length-3 ))
			document.getElementById('endDate').setAttribute("id",'endDate'+(company.childNodes.length-3 ))
			// console.log(company.childNodes);
			// console.log(company.lastElementChild.childNodes);
		}
        console.log(addbtn);
        debugger;
		addbtn.addEventListener('click', addEvent)
		let skills = document.getElementById('skills')
		let add = document.getElementById('addSkills')
		let addEducation = document.getElementById('addEducation');

		const addEduc = () => {
			let newDiv = document.createElement('div')
			newDiv.class = 'container my-3'
			newDiv.innerHTML =
				`
	<div class="container my-3">
							<h2>Education</h2>
							<div class="mb-3">
								<label class="form-label">School Name</label>
								<input type="text"name="schoolName" class="form-control" id="schoolName" placeholder="Enter School Name">
							</div>
							<label for="exampleInputEmail1" class="form-label">Education Qualification</label>
							<select class="form-select"name="qualification" aria-label="Default select example" id="educationSelect">
								<option value="secondary"name="secondary">Secondary/CBSC/ICSE</option>
								<option value="intermediate"name="inter">Intermediate</option>
								<option value="bachelors"name="bachelor">Bachelors</option>
								<option value="diploma"name="diploma">Diploma</option>
								<option value="masters"name="masters">Masters</option>
							</select>
							<div class="mb-3">
								<label  style="margin-top: 10px;" class="form-label">CGPA</label>
								<input type="number"name="cgpa" class="form-control" id="cgpa" placeholder="Enter Cgpa">
							</div>
							<div class="mb-3">
								<label   class="form-label">Passing Year</label>
								<input type="number"name="passingYear" class="form-control" id="passingYear" placeholder="Enter Passing Year">
							</div>
						</div>
	`
			document.getElementById('Education').appendChild(newDiv)
			let cur = document.getElementById('Education').childNodes.length - 2;
			document.getElementById('schoolName').setAttribute("id","schoolName" + cur)
			document.getElementById('educationSelect').setAttribute("id","educationSelect" + cur)
			document.getElementById('cgpa').setAttribute("id","cgpa" + cur)
			document.getElementById('passingYear').setAttribute("id","passingYear" + cur)
		}
		addEducation.addEventListener('click', addEduc)

		const addSkill = () => {
			let newDiv = document.createElement('div');
			newDiv.class = 'container my-3'
			newDiv.innerHTML =
				`
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Skill Name</label>
    <input type="text"name="skillName" class="form-control" id="skillName" aria-describedby="emailHelp">
</div>
<label for="exampleInputEmail1" class="form-label">Level</label>
<select class="form-select"name="skillLevel"id="skillLevel" aria-label="Default select example">
    <option value="beginner" id="beginner" name="beginner">Beginner</option>
    <option value="intermediate"id="intermediate" name="intermediate">Intermediate</option>
    <option value="advanced"id="advanced" name="advanced">Advanced</option>
</select>
    `		
			skills.appendChild(newDiv)
			let cur = skills.childNodes.length - 1
			document.getElementById('skillName').setAttribute("id","skillName"+cur)
			document.getElementById('skillLevel').setAttribute("id","skillLevel"+cur)
		}
		add.addEventListener('click', addSkill)
		const addPro = () => {
			let newDiv = document.createElement('div')
			newDiv.class = 'container'
			newDiv.innerHTML =
				`
		<h2>Project</h2>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">Project Name</label>
								<input type="text"name="Projectname" class="form-control" id="projectName" aria-describedby="emailHelp">
							</div>
							<div class="col-12">
								<label for="inputAddress" class="form-label">Project Description</label>
								<textarea class="form-control"name="projectDescription" id="projectDescription" rows="3"></textarea>
							  </div>
							  <div class="mb-3">
								<label  style="margin-top: 10px;" class="form-label">Implementation Year</label>
								<input type="number" class="form-control"name="ImplementationYear" id="implementationYear" placeholder="Implementation Year">
							</div>
		`
			document.getElementById('project').appendChild(newDiv)
			let cur = document.getElementById('project').childNodes.length - 1
			document.getElementById('projectName').setAttribute("id","projectName"+cur);
			document.getElementById('projectDescription').setAttribute("id","projectDescription"+cur);
			document.getElementById('implementationYear').setAttribute("id","implementationYear"+cur);

		}
		let addProject = document.getElementById('addProject')
		addProject.addEventListener('click', addPro)

		const addCert = () => {
			let newDiv = document.createElement('div')
			newDiv.class = 'my-3'
			newDiv.innerHTML =
				`
		<h2>Certification</h2>
							<div class="mb-3">
								<label   class="form-label">Certification</label>
								<input type="text"name="Certification" class="form-control" id="certificationName" placeholder="Certification Name">
							</div>
							  <div class="mb-3">
								<label class="form-label">Issued By</label>
								<input type="text"name="issued_by" class="form-control" id="issuedBy" placeholder="Issued By">
							  </div>
							  <div class="mb-3">
								<label class="form-label">Certification Id</label>
								<input type="number"name="Certification_id" class="form-control" id="certificationId" placeholder="Certification Id">
							  </div>
		`
			document.getElementById('Certicate').appendChild(newDiv)
			let cur = document.getElementById('Certicate').childNodes.length - 1;
			document.getElementById('certificationName').setAttribute("id","certificationName"+cur);
			document.getElementById('issuedBy').setAttribute("id","issuedBy"+cur);
			document.getElementById('certificationId').setAttribute("id","certificationId"+cur);
		}
		document.getElementById('addCertificate').addEventListener('click', addCert)

		const addHobbie = () => {
			let newDiv = document.createElement('div')
			newDiv.class = 'container my-3'
			newDiv.innerHTML =
				`
		<div class="mb-3">
						<label   style="margin-top: 10px;" class="form-label">Hobbies</label>
						<input type="text" class="form-control"name="hobbies" id="addHobby" placeholder="Hobbies">
					</div>
		`
			document.getElementById('Hobbies').appendChild(newDiv)
			let cur = document.getElementById('Hobbies').childNodes.length -1 ;
			document.getElementById("addHobby").setAttribute("id","hobbies"+cur)
		}

		document.getElementById('addHobby').addEventListener('click', addHobbie)


		let personalInfo=document.getElementById("personalDataBtn")
		let contactInfo=document.getElementById("contactInfo")
		let companyInfo=document.getElementById("Company")
		let skillInfo=document.getElementById("skillSubmit")
		let educationInfo=document.getElementById("EducationSubmit")
		let projectsInfo=document.getElementById("projectsSubmit")
		let certificationInfo=document.getElementById("certificateSubmit")
		let hobbiesInfo=document.getElementById("hobbiesSubmit")

		const setPersonalInfo = () => {
			const personalInfoData = {
				firstName : document.getElementById('firstName').value,
				lastName : document.getElementById('lastName').value,
				address : document.getElementById('Address').value,
				dateOfBirth : document.getElementById('dateOfBirth').value,
				city : document.getElementById('city').value,
				state : document.getElementById('state').value,
				pincode : document.getElementById('pincode').value

			}
			console.log(personalInfoData);
		}
		personalInfo.addEventListener('click',setPersonalInfo);

		const setContactInfo =() => {
			const contactInfoData = {
				email : document.getElementById('email').value,
				phoneNumber : document.getElementById('phoneNumber').value,
				alternateNumber : document.getElementById('alternateNumber').value,
				linkdin : document.getElementById('linkdin').value
			}
			console.log(contactInfoData);
		}
		contactInfo.addEventListener('click',setContactInfo);

		const setWorkExpirenceInfo =() => {
			const setworkExpirenceInfoData = [];
			for (let index = 1; index < company.childNodes.length-2; index++) {		
				const workExpirenceInfo = {
					companyName : document.getElementById('companyName'+index).value,
					position : document.getElementById('position'+index).value,
					startDate : document.getElementById('startDate'+index).value,
					experience : document.getElementById('experience'+index).options[document.getElementById('experience'+index).selectedIndex].value,
					endDate : document.getElementById('endDate'+index).value
				}
				setworkExpirenceInfoData.push(workExpirenceInfo);
			}
			console.log(setworkExpirenceInfoData);
		}

		companyInfo.addEventListener('click',setWorkExpirenceInfo);


		const setSkillInfo =() => {
			const setskillInfoData = [];
			for (let index = 1; index < skills.childNodes.length; index++) {
				const skillInfoData = {
					skillName : document.getElementById('skillName'+index).value,
					skillLevel : document.getElementById('skillLevel'+index).options[document.getElementById('skillLevel'+index).selectedIndex].value
				}
				setskillInfoData.push(skillInfoData)
			}
			console.log(setskillInfoData);
		}
		skillInfo.addEventListener('click',setSkillInfo);

		const setEducationInfo =() => {
			const seteducationInfoData = [];
			for (let index = 1; index < document.getElementById('Education').childNodes.length - 1; index++) {
				console.log(index);
				const educationInfoData = {
					schoolName : document.getElementById('schoolName'+index).value,
					educationSelect : document.getElementById('educationSelect'+index).options[document.getElementById('educationSelect'+index).selectedIndex].value,
					cgpa : document.getElementById('cgpa'+index).value,
					passingYear : document.getElementById('passingYear'+index).value
				}
				seteducationInfoData.push(educationInfoData)
			}
			console.log(seteducationInfoData);
		}
		educationInfo.addEventListener('click',setEducationInfo);

		const setProjectInfo =() => {
			const setprojectInfoData = []
			for (let index = 1; index <= document.getElementById('Certicate').childNodes.length; index++) {	
				const projectInfoData = {
					projectName : document.getElementById('projectName'+index).value,
					projectDescription : document.getElementById('projectDescription'+index).value,
					implementationYear : document.getElementById('implementationYear'+index).value
				}
				setprojectInfoData.push(projectInfoData);
			}
			console.log(setprojectInfoData);
		}
		projectsInfo.addEventListener('click',setProjectInfo);

		const setCertificationInfo =() => {
			const setcertificationInfoData = [];
			for (let index = 1; index < document.getElementById('Certicate').childNodes.length; index++) {
				const certificationInfoData = {
					certificationName : document.getElementById('certificationName'+index).value,
					issuedBy : document.getElementById('issuedBy'+index).value,
					certificationId : document.getElementById('certificationId'+index).value
				}
				setcertificationInfoData.push(certificationInfoData);
			}
			console.log(setcertificationInfoData);
		}
		certificationInfo.addEventListener('click',setCertificationInfo);

		const setHobbiesInfo =() => {
			const sethobbiesInfoData = [];
			console.log();
			for (let index = 1; index < document.getElementById('Hobbies').childNodes.length; index++) {			
				const hobbiesInfoData = {
					addHobby : document.getElementById('hobbies'+index).value
				}
				sethobbiesInfoData.push(hobbiesInfoData);
			}
			console.log(sethobbiesInfoData);
		}
		hobbiesInfo.addEventListener('click',setHobbiesInfo);

