// DOM Elements
var form = document.getElementById('resume-form');
var resumeImage = document.getElementById('resume-image');
var resumeName = document.getElementById('resume-name');
var resumeRole = document.getElementById('resume-role');
var resumeContact = document.getElementById('resume-contact');
var resumeProfile = document.getElementById('resume-profile');
var resumeSkills = document.getElementById('resume-skills');
var resumeExperience = document.getElementById('resume-experience');
var resumeEducation = document.getElementById('resume-education');
// Form Submit Event
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get input values
    var name = document.getElementById('name').value;
    var role = document.getElementById('role').value;
    var contact = document.getElementById('contact').value;
    var profile = document.getElementById('profile').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    // Update resume fields
    resumeName.textContent = name;
    resumeRole.textContent = role;
    resumeContact.textContent = contact;
    resumeProfile.textContent = profile;
    // Update skills
    resumeSkills.innerHTML = '';
    skills.split(',').forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        resumeSkills.appendChild(li);
    });
    // Update experience and education
    resumeExperience.textContent = experience;
    resumeEducation.textContent = education;
});
// Handle image upload
var imageInput = document.getElementById('image');
imageInput.addEventListener('change', function (event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            resumeImage.src = reader_1.result;
            resumeImage.style.display = 'block';
        };
        reader_1.readAsDataURL(file);
    }
});
// Get the download button and resume section
var downloadButton = document.getElementById('download-btn');
downloadButton.addEventListener('click', function () {
    var resumeElement = document.getElementById('resume');
    // Options for PDF generation
    var options = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    // Generate and save the PDF
    html2pdf().from(resumeElement).set(options).save();
});
