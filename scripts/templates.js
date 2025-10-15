// Templates page functionality

function viewTemplate(templateName) {
    const modal = document.getElementById('template-modal');
    const modalBody = document.getElementById('modal-body');
    const useBtn = document.getElementById('modal-use-btn');

    // Sample data for preview
    const sampleData = {
        firstName: 'John',
        lastName: 'Doe',
        title: 'Senior Software Engineer',
        email: 'john.doe@email.com',
        phone: '+1 (555) 123-4567',
        city: 'San Francisco',
        country: 'USA',
        summary: 'Experienced software engineer with 8+ years of expertise in full-stack development, cloud architecture, and team leadership. Passionate about creating scalable solutions and mentoring junior developers.',
        skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'TypeScript'],
        experience: [{
            title: 'Senior Software Engineer',
            company: 'Tech Corp',
            location: 'San Francisco, CA',
            start: '2020-01',
            end: '',
            current: true,
            description: 'Led development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%.'
        }],
        education: [{
            degree: 'Bachelor of Science in Computer Science',
            school: 'University of Technology',
            location: 'Boston, MA',
            start: '2012-09',
            end: '2016-05',
            description: 'Graduated with honors. Focus on Software Engineering and Artificial Intelligence.'
        }],
        languages: [
            { name: 'English', level: 'Native' },
            { name: 'Spanish', level: 'Professional' }
        ],
        certifications: [{
            name: 'AWS Solutions Architect',
            issuer: 'Amazon Web Services',
            date: '2022-06'
        }]
    };

    // Render template preview
    modalBody.innerHTML = generateResumeHTML(templateName, sampleData);

    // Show modal
    modal.classList.add('active');

    // Set up use button
    useBtn.onclick = () => useTemplate(templateName);
}

function closeModal() {
    const modal = document.getElementById('template-modal');
    modal.classList.remove('active');
}

function useTemplate(templateName) {
    // Save selected template
    localStorage.setItem('selectedTemplate', templateName);

    // Redirect to builder
    window.location.href = 'builder.html';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('template-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Helper function to generate resume HTML
function generateResumeHTML(template, data) {
    switch (template) {
        case 'professional':
            return generateProfessionalTemplate(data);
        case 'creative':
            return generateCreativeTemplate(data);
        case 'minimalist':
            return generateMinimalistTemplate(data);
        default:
            return generateProfessionalTemplate(data);
    }
}

// Template generators will be imported from templates-render.js
