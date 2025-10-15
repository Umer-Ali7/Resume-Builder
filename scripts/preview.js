// Preview page functionality
let currentTemplate = 'creative';
let resumeData = {};

document.addEventListener('DOMContentLoaded', function() {
    loadResumeData();
    setupTemplateSwitch();
    setupDownload();
    renderResume();
});

// ========== Load Resume Data ==========
function loadResumeData() {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
        resumeData = JSON.parse(saved);
    } else {
        // Redirect to builder if no data
        alert('No resume data found. Please fill out the form first.');
        window.location.href = 'builder.html';
        return;
    }

    // Get selected template
    const savedTemplate = localStorage.getItem('selectedTemplate');
    if (savedTemplate) {
        currentTemplate = savedTemplate;
    } else if (resumeData.template) {
        currentTemplate = resumeData.template;
    }
}

// ========== Template Switching ==========
function setupTemplateSwitch() {
    const templateButtons = document.querySelectorAll('.template-btn');

    templateButtons.forEach(btn => {
        // Set active button
        if (btn.dataset.template === currentTemplate) {
            btn.classList.add('active');
        }

        // Add click handler
        btn.addEventListener('click', function() {
            // Update active button
            templateButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Update template
            currentTemplate = this.dataset.template;
            localStorage.setItem('selectedTemplate', currentTemplate);

            // Re-render resume
            renderResume();
        });
    });
}

// ========== Render Resume ==========
function renderResume() {
    const container = document.getElementById('resume-container');

    let html = '';
    switch (currentTemplate) {
        case 'professional':
            html = generateProfessionalTemplate(resumeData);
            break;
        case 'creative':
            html = generateCreativeTemplate(resumeData);
            break;
        case 'minimalist':
            html = generateMinimalistTemplate(resumeData);
            break;
        default:
            html = generateCreativeTemplate(resumeData);
    }

    container.innerHTML = html;
}

// ========== PDF Download ==========
function setupDownload() {
    const downloadBtn = document.getElementById('download-pdf');

    downloadBtn.addEventListener('click', function() {
        const resumeContainer = document.getElementById('resume-container');
        const fullName = `${resumeData.firstName || ''} ${resumeData.lastName || ''}`.trim() || 'Resume';

        // Show loading state
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
        downloadBtn.disabled = true;

        // PDF options
        const options = {
            margin: [0.5, 0.5],
            filename: `${fullName}_Resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                logging: false
            },
            jsPDF: {
                unit: 'in',
                format: 'letter',
                orientation: 'portrait'
            }
        };

        // Generate PDF
        html2pdf()
            .set(options)
            .from(resumeContainer)
            .save()
            .then(() => {
                // Reset button
                downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download PDF';
                downloadBtn.disabled = false;
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
                alert('Error generating PDF. Please try again.');
                downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download PDF';
                downloadBtn.disabled = false;
            });
    });
}

// ========== Print Functionality ==========
function printResume() {
    window.print();
}

// Make functions globally available
window.printResume = printResume;
