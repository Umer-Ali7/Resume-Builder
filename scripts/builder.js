// Resume Builder functionality
let currentStep = 1;
const totalSteps = 5;
let resumeData = {};
let skills = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadSavedData();
    initializeFormHandlers();
    updateProgressBar();
});

// ========== Form Step Navigation ==========
function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const percentage = (currentStep / totalSteps) * 100;
    progressFill.style.width = percentage + '%';

    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        const stepNumber = index + 1;
        step.classList.remove('active', 'completed');

        if (stepNumber < currentStep) {
            step.classList.add('completed');
        } else if (stepNumber === currentStep) {
            step.classList.add('active');
        }
    });

    // Update form steps
    document.querySelectorAll('.form-step').forEach((step, index) => {
        if (index + 1 === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    // Update navigation buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const previewBtn = document.getElementById('preview-btn');

    if (currentStep === 1) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
    }

    if (currentStep === totalSteps) {
        nextBtn.style.display = 'none';
        previewBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'flex';
        previewBtn.style.display = 'none';
    }
}

// Next button handler
document.getElementById('next-btn').addEventListener('click', function() {
    if (validateCurrentStep()) {
        saveFormData();
        currentStep++;
        updateProgressBar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Previous button handler
document.getElementById('prev-btn').addEventListener('click', function() {
    currentStep--;
    updateProgressBar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Preview button handler
document.getElementById('preview-btn').addEventListener('click', function() {
    saveFormData();
    window.location.href = 'preview.html';
});

// Step click handlers
document.querySelectorAll('.step').forEach((step, index) => {
    step.addEventListener('click', function() {
        const stepNumber = index + 1;
        if (stepNumber < currentStep || validateCurrentStep()) {
            saveFormData();
            currentStep = stepNumber;
            updateProgressBar();
        }
    });
});

// ========== Form Validation ==========
function validateCurrentStep() {
    const currentFormStep = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    const requiredFields = currentFormStep.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ef4444';
            isValid = false;

            setTimeout(() => {
                field.style.borderColor = '';
            }, 2000);
        }
    });

    if (!isValid) {
        alert('Please fill in all required fields');
    }

    return isValid;
}

// ========== Photo Upload ==========
const photoInput = document.getElementById('photo');
const photoPreview = document.getElementById('photo-preview');

photoInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            photoPreview.innerHTML = `<img src="${e.target.result}" alt="Profile Photo">`;
            resumeData.photo = e.target.result;
            autoSave();
        };
        reader.readAsDataURL(file);
    }
});

// Click preview to trigger file input
photoPreview.addEventListener('click', function() {
    photoInput.click();
});

// ========== Skills Management ==========
const skillInput = document.getElementById('skill-input');
const skillsList = document.getElementById('skills-list');

skillInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const skill = skillInput.value.trim();
        if (skill && !skills.includes(skill)) {
            skills.push(skill);
            addSkillTag(skill);
            skillInput.value = '';
            autoSave();
        }
    }
});

function addSkillTag(skill) {
    const tag = document.createElement('div');
    tag.className = 'skill-tag';
    tag.innerHTML = `
        ${skill}
        <button type="button" onclick="removeSkill('${skill}')">
            <i class="fas fa-times"></i>
        </button>
    `;
    skillsList.appendChild(tag);
}

function removeSkill(skill) {
    skills = skills.filter(s => s !== skill);
    renderSkills();
    autoSave();
}

function renderSkills() {
    skillsList.innerHTML = '';
    skills.forEach(skill => addSkillTag(skill));
}

// ========== Dynamic Experience ==========
let experienceCount = 1;

document.getElementById('add-experience').addEventListener('click', function() {
    experienceCount++;
    const container = document.getElementById('experience-container');
    const newItem = document.querySelector('.experience-item').cloneNode(true);

    // Clear input values
    newItem.querySelectorAll('input, textarea').forEach(input => {
        input.value = '';
    });
    newItem.querySelector('.exp-current').checked = false;

    container.appendChild(newItem);

    // Add current checkbox handler
    newItem.querySelector('.exp-current').addEventListener('change', function() {
        const endDateInput = this.closest('.form-row').querySelector('.exp-end');
        endDateInput.disabled = this.checked;
        if (this.checked) {
            endDateInput.value = '';
        }
    });
});

function removeExperience(button) {
    const container = document.getElementById('experience-container');
    if (container.children.length > 1) {
        button.closest('.experience-item').remove();
        autoSave();
    } else {
        alert('You must have at least one experience entry');
    }
}

// Current checkbox handlers for initial experience
document.querySelectorAll('.exp-current').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const endDateInput = this.closest('.form-row').querySelector('.exp-end');
        endDateInput.disabled = this.checked;
        if (this.checked) {
            endDateInput.value = '';
        }
    });
});

// ========== Dynamic Education ==========
document.getElementById('add-education').addEventListener('click', function() {
    const container = document.getElementById('education-container');
    const newItem = document.querySelector('.education-item').cloneNode(true);

    // Clear input values
    newItem.querySelectorAll('input, textarea').forEach(input => {
        input.value = '';
    });

    container.appendChild(newItem);
});

function removeEducation(button) {
    const container = document.getElementById('education-container');
    if (container.children.length > 1) {
        button.closest('.education-item').remove();
        autoSave();
    } else {
        alert('You must have at least one education entry');
    }
}

// ========== Dynamic Languages ==========
document.getElementById('add-language').addEventListener('click', function() {
    const container = document.getElementById('language-container');
    const newItem = document.querySelector('.language-item').cloneNode(true);

    newItem.querySelectorAll('input').forEach(input => {
        input.value = '';
    });

    container.appendChild(newItem);
});

function removeLanguage(button) {
    const container = document.getElementById('language-container');
    if (container.children.length > 1) {
        button.closest('.language-item').remove();
        autoSave();
    }
}

// ========== Dynamic Certifications ==========
document.getElementById('add-certification').addEventListener('click', function() {
    const container = document.getElementById('certification-container');
    const newItem = document.querySelector('.certification-item').cloneNode(true);

    newItem.querySelectorAll('input').forEach(input => {
        input.value = '';
    });

    container.appendChild(newItem);
});

function removeCertification(button) {
    const container = document.getElementById('certification-container');
    if (container.children.length > 1) {
        button.closest('.certification-item').remove();
        autoSave();
    }
}

// ========== Template Selection ==========
document.querySelectorAll('.template-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.template-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        this.classList.add('selected');

        const template = this.dataset.template;
        localStorage.setItem('selectedTemplate', template);
    });
});

// ========== Form Data Management ==========
function initializeFormHandlers() {
    // Add input listeners for auto-save
    const form = document.getElementById('resume-form');
    form.addEventListener('input', debounce(autoSave, 1000));
}

function saveFormData() {
    // Personal Information
    resumeData.firstName = document.getElementById('firstName').value;
    resumeData.lastName = document.getElementById('lastName').value;
    resumeData.title = document.getElementById('title').value;
    resumeData.email = document.getElementById('email').value;
    resumeData.phone = document.getElementById('phone').value;
    resumeData.city = document.getElementById('city').value;
    resumeData.country = document.getElementById('country').value;
    resumeData.summary = document.getElementById('summary').value;
    resumeData.linkedin = document.getElementById('linkedin').value;
    resumeData.github = document.getElementById('github').value;
    resumeData.website = document.getElementById('website').value;

    // Experience
    resumeData.experience = [];
    document.querySelectorAll('.experience-item').forEach(item => {
        const exp = {
            title: item.querySelector('.exp-title').value,
            company: item.querySelector('.exp-company').value,
            location: item.querySelector('.exp-location').value,
            start: item.querySelector('.exp-start').value,
            end: item.querySelector('.exp-end').value,
            current: item.querySelector('.exp-current').checked,
            description: item.querySelector('.exp-description').value
        };
        if (exp.title || exp.company) {
            resumeData.experience.push(exp);
        }
    });

    // Education
    resumeData.education = [];
    document.querySelectorAll('.education-item').forEach(item => {
        const edu = {
            degree: item.querySelector('.edu-degree').value,
            school: item.querySelector('.edu-school').value,
            location: item.querySelector('.edu-location').value,
            start: item.querySelector('.edu-start').value,
            end: item.querySelector('.edu-end').value,
            description: item.querySelector('.edu-description').value
        };
        if (edu.degree || edu.school) {
            resumeData.education.push(edu);
        }
    });

    // Skills
    resumeData.skills = skills;

    // Languages
    resumeData.languages = [];
    document.querySelectorAll('.language-item').forEach(item => {
        const lang = {
            name: item.querySelector('.lang-name').value,
            level: item.querySelector('.lang-level').value
        };
        if (lang.name) {
            resumeData.languages.push(lang);
        }
    });

    // Certifications
    resumeData.certifications = [];
    document.querySelectorAll('.certification-item').forEach(item => {
        const cert = {
            name: item.querySelector('.cert-name').value,
            issuer: item.querySelector('.cert-issuer').value,
            date: item.querySelector('.cert-date').value
        };
        if (cert.name) {
            resumeData.certifications.push(cert);
        }
    });

    // Template selection
    const selectedTemplate = document.querySelector('.template-option.selected');
    if (selectedTemplate) {
        resumeData.template = selectedTemplate.dataset.template;
    }

    // Save to localStorage
    localStorage.setItem('resumeData', JSON.stringify(resumeData));

    return resumeData;
}

function loadSavedData() {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
        resumeData = JSON.parse(saved);

        // Load personal info
        if (resumeData.firstName) document.getElementById('firstName').value = resumeData.firstName;
        if (resumeData.lastName) document.getElementById('lastName').value = resumeData.lastName;
        if (resumeData.title) document.getElementById('title').value = resumeData.title;
        if (resumeData.email) document.getElementById('email').value = resumeData.email;
        if (resumeData.phone) document.getElementById('phone').value = resumeData.phone;
        if (resumeData.city) document.getElementById('city').value = resumeData.city;
        if (resumeData.country) document.getElementById('country').value = resumeData.country;
        if (resumeData.summary) document.getElementById('summary').value = resumeData.summary;
        if (resumeData.linkedin) document.getElementById('linkedin').value = resumeData.linkedin;
        if (resumeData.github) document.getElementById('github').value = resumeData.github;
        if (resumeData.website) document.getElementById('website').value = resumeData.website;

        // Load photo
        if (resumeData.photo) {
            photoPreview.innerHTML = `<img src="${resumeData.photo}" alt="Profile Photo">`;
        }

        // Load skills
        if (resumeData.skills) {
            skills = resumeData.skills;
            renderSkills();
        }

        // Load template selection
        if (resumeData.template) {
            const templateOption = document.querySelector(`.template-option[data-template="${resumeData.template}"]`);
            if (templateOption) {
                document.querySelectorAll('.template-option').forEach(opt => opt.classList.remove('selected'));
                templateOption.classList.add('selected');
            }
        }
    }
}

function autoSave() {
    saveFormData();
    console.log('Auto-saved');
}

// ========== Utility Functions ==========
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========== Preview Toggle (Mobile) ==========
const togglePreview = document.getElementById('toggle-preview');
if (togglePreview) {
    togglePreview.addEventListener('click', function() {
        const previewSection = document.querySelector('.preview-section');
        previewSection.classList.toggle('mobile-visible');
    });
}

// Make functions globally available
window.removeExperience = removeExperience;
window.removeEducation = removeEducation;
window.removeLanguage = removeLanguage;
window.removeCertification = removeCertification;
window.removeSkill = removeSkill;
