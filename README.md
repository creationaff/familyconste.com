# Family Consultations Website

A modern, responsive website for family therapy and counseling services.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Mobile navigation, smooth scrolling, form validation
- **Professional Services**: Family therapy, couples counseling, child therapy, and more
- **Contact Form**: Functional contact form with validation
- **Team Section**: Showcase of professional therapists
- **Statistics**: Animated counters showing practice success

## Pages/Sections

1. **Hero Section**: Main landing area with call-to-action buttons
2. **Services**: Six core services offered by the practice
3. **About**: Information about the practice with statistics
4. **Team**: Professional team members and their specialties
5. **Contact**: Contact information and inquiry form
6. **Footer**: Additional links and social media

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## Getting Started

### Option 1: Simple Local Server (Recommended)
```bash
# If you have Python installed
python -m http.server 8000

# Or if you have Node.js installed
npx serve .

# Or if you have PHP installed
php -S localhost:8000
```

### Option 2: Live Server Extension (VS Code)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Direct File Opening
Simply double-click `index.html` to open in your browser (some features may not work due to CORS policies)

## File Structure

```
family-consultations/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Colors
The website uses a professional color scheme:
- Primary Blue: `#2c5aa0`
- Accent Red: `#ff6b6b`
- Gradient: `#667eea` to `#764ba2`

### Content
- Update contact information in the HTML
- Replace placeholder text with actual content
- Add real team member photos
- Update statistics with actual numbers

### Form Integration
The contact form currently shows a success message. To make it functional:
1. Replace the form submission handler in `script.js`
2. Add backend integration (PHP, Node.js, etc.)
3. Configure email sending or database storage

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading times
- SEO-friendly structure

## License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## Contact

For questions or support, please refer to the contact information on the website.
