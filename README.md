# 📸 Photography Website – README

A clean and responsive HTML/CSS/JS photography website with:
- Hero slider
- Filterable gallery
- Responsive layout
- Instagram feed with hover effect
- Auto-scrolling Instagram section
- Contact page with map
- Modern design & animations



## ✅ Features

| Feature | Description |
|--------|-------------|
| 🖼️ Hero Slider | Fullscreen background with animated text |
| 🔍 Gallery Section | Filter by category (All, Human, Nature, Country, Video) |
| 👥 Team Section | Hover tilt + info cards |
| 💬 Comments | Nested comment boxes with replies |
| 📝 Contact Form | Leave a message with styled inputs |
| 🗺️ Google Map | Embedded full-width responsive map |
| 📱 Fully Responsive | Works on desktop, tablet, and mobile |
| 🎞️ Instagram Feed | Auto-scrolls every 3 seconds |

---

## 🧱 Folder Structure

```
photography-website/
│
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Global styles
├── script.js           # JavaScript logic
└── images/             # All image assets
    └── insta1.webp
    └── hero.avif
    └── team/
    └── blog/
```

---

## 🛠️ How to Use

### 1. Fonts Used

Add this in `<head>`:

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/brands.min.css" />

<!-- Google Fonts (optional) -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">



### 2. CSS Styling

Link CSS in each HTML file:

<link rel="stylesheet" href="styles.css">


Use media queries for responsiveness:

@media (max-width: 768px) {
  /* Mobile styles */
}



### 3. JavaScript Logic

Include at the bottom of each page:

<script src="script.js"></script>



## 🚀 Sections Included

| Section | File |
|--------|------|
| Hero Slider | `index.html` |
| Why Choose Us | `index.html` |
| Our Team | `about.html` |
| Blog Section | `about.html` |
| Instagram Feed | `index.html`, `about.html` |
| Contact Page | `contact.html` |
| Responsive Layout | All pages |
| Animations | Scroll-based + hover effects |