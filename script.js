// Function to generate the resume content and display it in the preview section
function generateResume() {
    // Collecting the values from the editable fields
    const name = document.querySelector('.name').innerText;
    const jobProfile = document.querySelector('.post').innerText;
    const phone = document.querySelector('.contacts .content:nth-child(1)').innerText;
    const email = document.querySelector('.contacts .content:nth-child(2)').innerText;
    const linkedin = document.querySelector('.contacts .content:nth-child(3)').innerText;
    const address = document.querySelector('.contacts .content:nth-child(4)').innerText;
    
    const skills = getContentFromSection('skills', '.skill');
    const languages = getContentFromSection('languages', '.language');
    const achievements = getContentFromSection('achievements', '.achieve');
    const interests = getContentFromSection('interests', '.achieve');
    
    const profile = document.querySelector('.rightside .title').nextElementSibling.innerText;
    
    const education = getEducationContent();
    const newSection = getNewSectionContent();
  
    // Construct the HTML content for the preview section
    const resumeContent = `
      <div class="head">
        <div class="main">
          <span class="name">${name}</span><br>
          <div class="post">${jobProfile}</div>
        </div>
        <div class="contacts">
          <span><i class="fas fa-phone"></i> ${phone}</span><br>
          <span><i class="fas fa-envelope"></i> ${email}</span><br>
          <span><i class="fab fa-linkedin"></i> ${linkedin}</span><br>
          <span><i class="fas fa-map-marker-alt"></i> ${address}</span>
        </div>
      </div>
      <div class="mainbody">
        <div class="leftside">
          <h4>MY SKILLS</h4>
          ${skills}
          <h4>LANGUAGES</h4>
          ${languages}
          <h4>ACHIEVEMENTS</h4>
          ${achievements}
          <h4>INTERESTS</h4>
          ${interests}
        </div>
        <div class="rightside">
          <h4>PROFILE</h4>
          <p>${profile}</p>
          <h4>EDUCATION</h4>
          ${education}
          <h4>NEW SECTION</h4>
          <p>${newSection}</p>
        </div>
      </div>
    `;
  
    // Inject the generated resume content into the preview section
    document.getElementById('resumePreview').innerHTML = resumeContent;
  }
  
  // Function to collect content from a specific section (Skills, Languages, Achievements, Interests)
  function getContentFromSection(sectionId, selector) {
    let content = '';
    const items = document.querySelectorAll(selector);
    items.forEach(item => {
      const checked = item.querySelector('input[type="checkbox"]').checked;
      if (checked) {
        content += `<p>${item.querySelector('span').innerText}</p>`;
      }
    });
    return content;
  }
  
  // Function to collect education content
  function getEducationContent() {
    let educationContent = '';
    const educationItems = document.querySelectorAll('#education .edublock');
    educationItems.forEach(item => {
      const degree = item.querySelector('.education-head').innerText;
      const institute = item.querySelector('div span:nth-child(1)').innerText;
      const year = item.querySelector('div span:nth-child(2)').innerText;
      educationContent += `<p>${degree} - ${institute} (${year})</p>`;
    });
    return educationContent;
  }
  
  // Function to collect new section content
  function getNewSectionContent() {
    const newSectionContent = document.querySelector('.new-section-div .title').nextElementSibling.innerText;
    return newSectionContent;
  }
  
  // Function to add a skill
  function addskill() {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');
    skillDiv.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>&nbsp&nbsp&nbsp<span contenteditable="true">write your skill here</span>`;
    document.getElementById('skills').appendChild(skillDiv);
  }
  
  // Function to remove a skill
  function remskill(event) {
    const skillDiv = event.target.closest('.skill');
    if (skillDiv) {
      skillDiv.remove();
    }
  }
  
  // Function to add a language
  function addLang() {
    const langDiv = document.createElement('div');
    langDiv.classList.add('language');
    langDiv.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">LANGNAME</span>&nbsp;-&nbsp;<span contenteditable="true">level u know</span>`;
    document.getElementById('languages').appendChild(langDiv);
  }
  
  // Function to remove a language
  function remLang(event) {
    const langDiv = event.target.closest('.language');
    if (langDiv) {
      langDiv.remove();
    }
  }
  
  // Function to add an achievement
  function addAch() {
    const achieveDiv = document.createElement('div');
    achieveDiv.classList.add('achieve');
    achieveDiv.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write your achievement</span>`;
    document.getElementById('achievement').appendChild(achieveDiv);
  }
  
  // Function to remove an achievement
  function remAch(event) {
    const achieveDiv = event.target.closest('.achieve');
    if (achieveDiv) {
      achieveDiv.remove();
    }
  }
  
  // Function to add an interest
  function addInt() {
    const intDiv = document.createElement('div');
    intDiv.classList.add('achieve');
    intDiv.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write interest</span>`;
    document.getElementById('interest').appendChild(intDiv);
  }
  
  // Function to remove an interest
  function remInt(event) {
    const intDiv = event.target.closest('.achieve');
    if (intDiv) {
      intDiv.remove();
    }
  }
  
  // Function to add a new section
  function addsec() {
    const newSecDiv = document.createElement('div');
    newSecDiv.classList.add('new-section-div');
    newSecDiv.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section.</div>`;
    document.getElementById('newsec').appendChild(newSecDiv);
  }
  
  // Function to remove a new section
  function remsec(event) {
    const newSecDiv = event.target.closest('.new-section-div');
    if (newSecDiv) {
      newSecDiv.remove();
    }
  }
  