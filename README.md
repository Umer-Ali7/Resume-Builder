# Modern Resume Builder

A complete, modern multi-page resume builder application with beautiful templates, live preview, and PDF export functionality.

## Features

### Multi-Page Architecture
- **Homepage**: Professional landing page with features showcase
- **Templates Gallery**: Browse and preview 3 different resume templates
- **Resume Builder**: Step-by-step form with progress tracking
- **Live Preview**: Real-time resume preview with template switching

### Resume Templates
1. **Professional**: Clean, modern design perfect for corporate roles
2. **Creative**: Colorful sidebar design that stands out
3. **Minimalist**: Simple, elegant design focusing on content

### Key Functionality
- ✨ Step-by-step form wizard with progress tracking
- 💾 Auto-save with localStorage (never lose your progress)
- 📱 Fully responsive design (works on all devices)
- 🎨 Multiple professional templates
- 👁️ Live preview as you type
- 📄 PDF download functionality
- 🔄 Template switching on preview page
- 📸 Photo upload support
- 🏷️ Dynamic skills, experience, education sections
- 🌐 Social links integration
- 🎓 Certifications and languages support

## Project Structure

```
Resume Builder/
├── pages/
│   ├── index.html          # Homepage
│   ├── builder.html        # Resume builder form
│   ├── templates.html      # Templates gallery
│   └── preview.html        # Resume preview & download
├── styles/
│   ├── main.css           # Base styles & utilities
│   ├── home.css           # Homepage styles
│   ├── builder.css        # Builder page styles
│   ├── templates.css      # Templates gallery styles
│   └── preview.css        # Preview page & resume templates
├── scripts/
│   ├── navigation.js      # Navigation & mobile menu
│   ├── builder.js         # Form handling & auto-save
│   ├── templates.js       # Templates gallery functionality
│   ├── templates-render.js # Resume template generators
│   └── preview.js         # Preview & PDF download
└── README.md

## Getting Started

1. Open `pages/index.html` in your browser
2. Click "Start Building" or "View Templates"
3. Fill in your information step-by-step
4. Preview your resume with different templates
5. Download as PDF

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, animations
- **JavaScript**: ES6+ vanilla JavaScript
- **Font Awesome**: Icons
- **html2pdf.js**: PDF generation
- **localStorage**: Data persistence

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Features in Detail

### Form Builder
- **Step 1**: Personal information (name, contact, photo, summary)
- **Step 2**: Work experience (multiple entries, current job toggle)
- **Step 3**: Education (multiple entries)
- **Step 4**: Skills, languages, certifications
- **Step 5**: Template selection and preview

### Auto-Save
Your data is automatically saved to localStorage as you type, so you never lose your progress even if you close the browser.

### Template Switching
On the preview page, you can switch between different templates to see which one looks best for your resume.

### PDF Export
High-quality PDF generation with proper formatting, ready to send to employers.

## Customization

### Adding New Templates
1. Create template HTML in `scripts/templates-render.js`
2. Add template styles in `styles/preview.css`
3. Add template option in builder and templates pages

### Styling
All colors and design tokens are defined as CSS variables in `styles/main.css` for easy customization.

## License

Free to use for personal and commercial projects.

## Credits

Built with modern web technologies and best practices.
Icons by Font Awesome.
PDF generation by html2pdf.js.
