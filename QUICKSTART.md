# Quick Start Guide - Resume Builder

## Project Overview

This is a complete, modern multi-page resume builder with:
- **4 Pages**: Home, Templates Gallery, Builder, Preview
- **3 Resume Templates**: Professional, Creative, Minimalist
- **Auto-save**: Never lose your progress
- **PDF Export**: Download professional PDFs
- **Fully Responsive**: Works on all devices

## File Structure

```
Resume Builder/
├── index.html              # Root redirect page
├── README.md              # Full documentation
├── QUICKSTART.md          # This file
│
├── pages/                 # Application pages
│   ├── index.html         # Homepage (landing page)
│   ├── builder.html       # Resume builder form
│   ├── templates.html     # Templates gallery
│   └── preview.html       # Resume preview & download
│
├── styles/                # Stylesheets
│   ├── main.css          # Base styles, variables, utilities
│   ├── home.css          # Homepage styles
│   ├── builder.css       # Builder page styles
│   ├── templates.css     # Templates gallery styles
│   └── preview.css       # Preview & resume templates
│
└── scripts/              # JavaScript files
    ├── navigation.js     # Mobile menu & navigation
    ├── builder.js        # Form handling, auto-save
    ├── templates.js      # Templates gallery
    ├── templates-render.js # Resume HTML generators
    └── preview.js        # Preview & PDF download
```

## How to Run

### Option 1: Open Directly
Simply open `index.html` in your browser (redirects to pages/index.html)

### Option 2: Use Live Server (Recommended)
```bash
# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server

# Or using Python
python -m http.server 8000

# Or using Node.js http-server
npx http-server
```

### Option 3: Direct Access
Open `pages/index.html` directly in your browser

## User Flow

1. **Homepage** (`pages/index.html`)
   - View features and benefits
   - Click "Start Building" or "View Templates"

2. **Templates Gallery** (`pages/templates.html`)
   - Browse 3 professional templates
   - Preview templates with sample data
   - Select a template to start building

3. **Resume Builder** (`pages/builder.html`)
   - **Step 1**: Personal Information
     - Name, title, contact, photo
     - Professional summary
     - Social links (LinkedIn, GitHub, Website)

   - **Step 2**: Work Experience
     - Add multiple positions
     - Company, role, dates, description
     - "Currently working here" toggle

   - **Step 3**: Education
     - Add multiple degrees
     - School, degree, dates, description

   - **Step 4**: Skills & More
     - Skills (tag-based input)
     - Languages with proficiency levels
     - Certifications

   - **Step 5**: Template Selection
     - Choose final template
     - Preview before download

4. **Preview & Download** (`pages/preview.html`)
   - See final resume
   - Switch between templates
   - Download as PDF
   - Edit if needed

## Key Features

### Auto-Save
- Data automatically saved to browser localStorage
- Never lose progress when closing browser
- Data persists across sessions

### Responsive Design
- Mobile-friendly navigation
- Adapts to all screen sizes
- Touch-optimized controls

### PDF Export
- High-quality PDF generation
- Proper formatting preserved
- Ready to send to employers

### Template System
- **Professional**: Corporate, clean, ATS-friendly
- **Creative**: Colorful sidebar, eye-catching
- **Minimalist**: Simple, elegant, content-focused

## Customization

### Change Colors
Edit CSS variables in `styles/main.css`:
```css
:root {
    --primary-color: #2563eb;  /* Main brand color */
    --accent-color: #10b981;   /* Success/accent color */
    /* ... more variables */
}
```

### Add New Template
1. Create generator in `scripts/templates-render.js`
2. Add styles in `styles/preview.css`
3. Add option in builder/templates pages

### Modify Form Fields
Edit `pages/builder.html` to add/remove fields
Update `scripts/builder.js` to handle new fields

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS, Android)

## Dependencies

### External Libraries
- **Font Awesome 6.5.1**: Icons
- **html2pdf.js 0.9.3**: PDF generation

### CDN Links (already included)
```html
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- html2pdf.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
```

## Troubleshooting

### Resume Not Saving
- Check browser localStorage is enabled
- Don't use incognito/private mode

### PDF Download Not Working
- Ensure html2pdf.js library loads correctly
- Check browser console for errors
- Try different browser

### Images Not Showing in PDF
- Use smaller image files (< 2MB)
- Ensure images are fully loaded before download

## Next Steps

1. **Open the app**: Start with `index.html`
2. **Fill your info**: Complete all steps in builder
3. **Choose template**: Pick the one that suits you best
4. **Download PDF**: Export and send to employers

## Support

For issues or questions:
- Check browser console for errors
- Ensure all files are in correct directories
- Verify CDN libraries are loading

## Credits

Built with vanilla JavaScript, modern CSS, and best practices.
No frameworks required - pure web technologies!

---

**Happy Resume Building!** 🚀
