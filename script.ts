function generateResume() {
    // Get input values
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Set resume content with the input values
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayJobTitle').textContent = jobTitle;
    document.getElementById('displayLocation').textContent = location;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPhone').textContent = phone;
    document.getElementById('displayEducation').textContent = education;
    document.getElementById('displayExperience').textContent = experience;
    document.getElementById('displaySkills').textContent = skills;

    // Clear the form after generating the resume
    document.getElementById('resumeForm').reset();
}
