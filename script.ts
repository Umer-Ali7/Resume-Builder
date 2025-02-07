// DOM Elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeImage = document.getElementById('resume-image') as HTMLImageElement;
const resumeName = document.getElementById('resume-name') as HTMLHeadingElement;
const resumeRole = document.getElementById('resume-role') as HTMLElement;
const resumeContact = document.getElementById('resume-contact') as HTMLElement;
const resumeProfile = document.getElementById('resume-profile') as HTMLElement;
const resumeSkills = document.getElementById('resume-skills') as HTMLUListElement;
const resumeExperience = document.getElementById('resume-experience') as HTMLElement;
const resumeEducation = document.getElementById('resume-education') as HTMLElement;

// Form Submit Event
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // Get input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const profile = (document.getElementById('profile') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    // Update resume fields
    resumeName.textContent = name;
    resumeRole.textContent = role;
    resumeContact.textContent = contact;
    resumeProfile.textContent = profile;

    // Update skills
    resumeSkills.innerHTML = '';
    skills.split(',').forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        resumeSkills.appendChild(li);
    });

    // Update experience and education
    resumeExperience.textContent = experience;
    resumeEducation.textContent = education;
});

// Handle image upload
const imageInput = document.getElementById('image') as HTMLInputElement;
imageInput.addEventListener('change', (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            resumeImage.src = reader.result as string;
            resumeImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Resume Download Button
// Declare html2pdf as a global variable (only needed if using CDN)
declare const html2pdf: any;

// Get the download button and resume section
const downloadButton = document.getElementById('download-btn') as HTMLButtonElement;

downloadButton.addEventListener('click', () => {
    const resumeElement = document.getElementById('resume') as HTMLElement;

    // Options for PDF generation
    const options = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    // Generate and save the PDF
    html2pdf().from(resumeElement).set(options).save();
});
