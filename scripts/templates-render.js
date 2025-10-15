// Template Rendering Functions

// ========== Professional Template ==========
function generateProfessionalTemplate(data) {
    const fullName = `${data.firstName || ''} ${data.lastName || ''}`.trim();
    const location = [data.city, data.country].filter(Boolean).join(', ');

    return `
        <div class="resume-professional">
            <div class="resume-header">
                ${data.photo ? `
                    <div class="profile-photo">
                        <img src="${data.photo}" alt="${fullName}">
                    </div>
                ` : ''}
                <h1 class="name">${fullName || 'Your Name'}</h1>
                <p class="title">${data.title || 'Your Professional Title'}</p>
                <div class="contact-info">
                    ${data.email ? `<div class="contact-item"><i class="fas fa-envelope"></i> ${data.email}</div>` : ''}
                    ${data.phone ? `<div class="contact-item"><i class="fas fa-phone"></i> ${data.phone}</div>` : ''}
                    ${location ? `<div class="contact-item"><i class="fas fa-map-marker-alt"></i> ${location}</div>` : ''}
                </div>
            </div>

            ${data.summary ? `
                <div class="section">
                    <h2 class="section-title">Professional Summary</h2>
                    <p class="summary-text">${data.summary}</p>
                </div>
            ` : ''}

            ${data.skills && data.skills.length > 0 ? `
                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-list">
                        ${data.skills.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
                    </div>
                </div>
            ` : ''}

            ${data.experience && data.experience.length > 0 ? `
                <div class="section">
                    <h2 class="section-title">Work Experience</h2>
                    ${data.experience.map(exp => {
                        const startDate = formatDate(exp.start);
                        const endDate = exp.current ? 'Present' : formatDate(exp.end);
                        return `
                            <div class="experience-item">
                                <div class="item-header">
                                    <div>
                                        <h3 class="item-title">${exp.title || ''}</h3>
                                        <p class="item-company">${exp.company || ''} ${exp.location ? `• ${exp.location}` : ''}</p>
                                    </div>
                                    <div class="item-date">${startDate}${endDate ? ` - ${endDate}` : ''}</div>
                                </div>
                                ${exp.description ? `<p class="item-description">${exp.description}</p>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            ` : ''}

            ${data.education && data.education.length > 0 ? `
                <div class="section">
                    <h2 class="section-title">Education</h2>
                    ${data.education.map(edu => {
                        const startDate = formatDate(edu.start);
                        const endDate = formatDate(edu.end);
                        return `
                            <div class="education-item">
                                <div class="item-header">
                                    <div>
                                        <h3 class="item-title">${edu.degree || ''}</h3>
                                        <p class="item-company">${edu.school || ''} ${edu.location ? `• ${edu.location}` : ''}</p>
                                    </div>
                                    <div class="item-date">${startDate}${endDate ? ` - ${endDate}` : ''}</div>
                                </div>
                                ${edu.description ? `<p class="item-description">${edu.description}</p>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            ` : ''}

            ${data.certifications && data.certifications.length > 0 ? `
                <div class="section">
                    <h2 class="section-title">Certifications</h2>
                    <ul class="certifications-list">
                        ${data.certifications.map(cert => `
                            <li class="certification-item">
                                <span><strong>${cert.name}</strong> - ${cert.issuer || ''}</span>
                                <span>${formatDate(cert.date)}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}

            ${data.languages && data.languages.length > 0 ? `
                <div class="section">
                    <h2 class="section-title">Languages</h2>
                    <ul class="languages-list">
                        ${data.languages.map(lang => `
                            <li class="language-item">
                                <span>${lang.name}</span>
                                <span>${lang.level}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}

            ${(data.linkedin || data.github || data.website) ? `
                <div class="section">
                    <h2 class="section-title">Links</h2>
                    <div class="social-links">
                        ${data.linkedin ? `<a href="${data.linkedin}" class="social-link" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>` : ''}
                        ${data.github ? `<a href="${data.github}" class="social-link" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
                        ${data.website ? `<a href="${data.website}" class="social-link" target="_blank"><i class="fas fa-globe"></i> Website</a>` : ''}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// ========== Creative Template ==========
function generateCreativeTemplate(data) {
    const fullName = `${data.firstName || ''} ${data.lastName || ''}`.trim();
    const location = [data.city, data.country].filter(Boolean).join(', ');

    return `
        <div class="resume-creative">
            <div class="sidebar">
                ${data.photo ? `
                    <div class="profile-photo">
                        <img src="${data.photo}" alt="${fullName}">
                    </div>
                ` : ''}
                <h1 class="name">${fullName || 'Your Name'}</h1>
                <p class="title">${data.title || 'Your Professional Title'}</p>

                <div class="section">
                    <h2 class="section-title">Contact</h2>
                    ${data.email ? `<div class="contact-item"><i class="fas fa-envelope"></i> ${data.email}</div>` : ''}
                    ${data.phone ? `<div class="contact-item"><i class="fas fa-phone"></i> ${data.phone}</div>` : ''}
                    ${location ? `<div class="contact-item"><i class="fas fa-map-marker-alt"></i> ${location}</div>` : ''}
                    ${data.linkedin ? `<div class="contact-item"><i class="fab fa-linkedin"></i> LinkedIn</div>` : ''}
                    ${data.github ? `<div class="contact-item"><i class="fab fa-github"></i> GitHub</div>` : ''}
                    ${data.website ? `<div class="contact-item"><i class="fas fa-globe"></i> Website</div>` : ''}
                </div>

                ${data.skills && data.skills.length > 0 ? `
                    <div class="section">
                        <h2 class="section-title">Skills</h2>
                        <div class="skills-list">
                            ${data.skills.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
                        </div>
                    </div>
                ` : ''}

                ${data.languages && data.languages.length > 0 ? `
                    <div class="section">
                        <h2 class="section-title">Languages</h2>
                        ${data.languages.map(lang => `
                            <div class="contact-item">
                                <span>${lang.name}</span> - ${lang.level}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>

            <div class="main-content">
                ${data.summary ? `
                    <div class="section">
                        <h2 class="section-title">About Me</h2>
                        <p>${data.summary}</p>
                    </div>
                ` : ''}

                ${data.experience && data.experience.length > 0 ? `
                    <div class="section">
                        <h2 class="section-title">Experience</h2>
                        ${data.experience.map(exp => {
                            const startDate = formatDate(exp.start);
                            const endDate = exp.current ? 'Present' : formatDate(exp.end);
                            return `
                                <div class="experience-item">
                                    <h3 class="item-title">${exp.title || ''}</h3>
                                    <p class="item-company">${exp.company || ''} ${exp.location ? `• ${exp.location}` : ''}</p>
                                    <p class="item-date">${startDate}${endDate ? ` - ${endDate}` : ''}</p>
                                    ${exp.description ? `<p class="item-description">${exp.description}</p>` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                ` : ''}

                ${data.education && data.education.length > 0 ? `
                    <div class="section">
                        <h2 class="section-title">Education</h2>
                        ${data.education.map(edu => {
                            const startDate = formatDate(edu.start);
                            const endDate = formatDate(edu.end);
                            return `
                                <div class="education-item">
                                    <h3 class="item-title">${edu.degree || ''}</h3>
                                    <p class="item-company">${edu.school || ''} ${edu.location ? `• ${edu.location}` : ''}</p>
                                    <p class="item-date">${startDate}${endDate ? ` - ${endDate}` : ''}</p>
                                    ${edu.description ? `<p class="item-description">${edu.description}</p>` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                ` : ''}

                ${data.certifications && data.certifications.length > 0 ? `
                    <div class="section">
                        <h2 class="section-title">Certifications</h2>
                        ${data.certifications.map(cert => `
                            <p><strong>${cert.name}</strong> - ${cert.issuer || ''} (${formatDate(cert.date)})</p>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// ========== Minimalist Template ==========
function generateMinimalistTemplate(data) {
    const fullName = `${data.firstName || ''} ${data.lastName || ''}`.trim();
    const contactItems = [data.email, data.phone, [data.city, data.country].filter(Boolean).join(', ')].filter(Boolean);

    return `
        <div class="resume-minimalist">
            <div class="resume-header">
                <h1 class="name">${fullName || 'Your Name'}</h1>
                <p class="title">${data.title || 'Your Professional Title'}</p>
                <div class="contact-info">
                    ${contactItems.join(' • ')}
                </div>
            </div>

            ${data.summary ? `
                <div class="section">
                    <h2 class="section-title">Summary</h2>
                    <p class="summary-text">${data.summary}</p>
                </div>
            ` : ''}

            ${data.experience && data.experience.length > 0 ? `
                <div class="section">
                    <h2 class="section-title">Experience</h2>
                    ${data.experience.map(exp => {
                        const startDate = formatDate(exp.start);
                        const endDate = exp.current ? 'Present' : formatDate(exp.end);
                        return `
                            <div class="experience-item">
                                <div class="item-header">
                                    <h3 class="item-title">${exp.title || ''}</h3>
                                    <span class="item-date">${startDate}${endDate ? ` - ${endDate}` : ''}</span>
                                </div>
                                <p class="item-company">${exp.company || ''} ${exp.location ? `• ${exp.location}` : ''}</p>
                                ${exp.description ? `<p class="item-description">${exp.description}</p>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            ` : ''}

            ${data.education && data.education.length > 0 ? `
                <div class="section">
                    <h2 class="section-title">Education</h2>
                    ${data.education.map(edu => {
                        const startDate = formatDate(edu.start);
                        const endDate = formatDate(edu.end);
                        return `
                            <div class="education-item">
                                <div class="item-header">
                                    <h3 class="item-title">${edu.degree || ''}</h3>
                                    <span class="item-date">${startDate}${endDate ? ` - ${endDate}` : ''}</span>
                                </div>
                                <p class="item-company">${edu.school || ''} ${edu.location ? `• ${edu.location}` : ''}</p>
                                ${edu.description ? `<p class="item-description">${edu.description}</p>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            ` : ''}

            ${data.skills && data.skills.length > 0 ? `
                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-list">
                        ${data.skills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
                    </div>
                </div>
            ` : ''}

            ${data.certifications && data.certifications.length > 0 ? `
                <div class="section">
                    <h2 class="section-title">Certifications</h2>
                    ${data.certifications.map(cert => `
                        <p><strong>${cert.name}</strong>, ${cert.issuer || ''} (${formatDate(cert.date)})</p>
                    `).join('')}
                </div>
            ` : ''}

            ${data.languages && data.languages.length > 0 ? `
                <div class="section">
                    <h2 class="section-title">Languages</h2>
                    <p>${data.languages.map(lang => `${lang.name} (${lang.level})`).join(', ')}</p>
                </div>
            ` : ''}

            ${(data.linkedin || data.github || data.website) ? `
                <div class="section">
                    <h2 class="section-title">Links</h2>
                    <p>
                        ${[
                            data.linkedin ? `LinkedIn: ${data.linkedin}` : '',
                            data.github ? `GitHub: ${data.github}` : '',
                            data.website ? `Website: ${data.website}` : ''
                        ].filter(Boolean).join(' • ')}
                    </p>
                </div>
            ` : ''}
        </div>
    `;
}

// ========== Utility Functions ==========
function formatDate(dateString) {
    if (!dateString) return '';

    const date = new Date(dateString + '-01');
    const options = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
}

// Make functions globally available
if (typeof window !== 'undefined') {
    window.generateProfessionalTemplate = generateProfessionalTemplate;
    window.generateCreativeTemplate = generateCreativeTemplate;
    window.generateMinimalistTemplate = generateMinimalistTemplate;
    window.formatDate = formatDate;
}
