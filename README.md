# Kiran Kumar PM - Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features interactive animations, a video background, and showcase of projects, skills, and experience.

## ✨ Features

- **Modern Design**: Clean, professional layout with glassmorphism effects
- **Interactive Animations**: Smooth transitions and hover effects using Framer Motion
- **Video Background**: Dynamic video background with overlay effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Theme toggle functionality
- **Smooth Navigation**: Scroll-to-section navigation with smooth scrolling
- **Contact Integration**: Direct links to phone and email
- **Social Media Links**: GitHub, LinkedIn, and LeetCode profiles
- **Performance Optimized**: Built with Vite for fast development and optimized builds

## 🚀 Live Demo

Visit the live website: [Kiran Kumar PM Portfolio](https://your-vercel-url.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Icons**: Custom SVG icons
- **Video**: Background video with optimizations

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/KiranKumarPM/kirankumar-portfolio.git
   cd kirankumar-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The site will automatically reload when you make changes

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🚀 Deployment to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your `kirankumar-portfolio` repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"
   - Your site will be live in minutes!

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production deployment**
   ```bash
   vercel --prod
   ```

## 📁 Project Structure

```
kirankumar-portfolio/
├── public/
│   ├── videos/
│   │   └── bg.mp4           # Background video
│   └── certificates/        # Certificate PDFs
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation component
│   │   └── ProfileDropdown.jsx # Profile menu
│   ├── sections/
│   │   ├── Hero.jsx         # Hero/landing section
│   │   ├── Education.jsx    # Education section
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── Certificates.jsx # Certificates section
│   │   ├── Skills.jsx       # Skills section
│   │   ├── Contact.jsx      # Contact section
│   │   └── ...             # Other sections
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.cjs     # Tailwind configuration
├── vite.config.js          # Vite configuration
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the hero section in `src/sections/Hero.jsx`
2. **Projects**: Update `src/sections/Projects.jsx` with your projects
3. **Skills**: Modify `src/sections/TechnicalSkills.jsx`
4. **Education**: Update `src/sections/Education.jsx`
5. **Certificates**: Add certificates to `public/certificates/` and update `src/sections/Certificates.jsx`

### Styling Changes

- **Colors**: Update the brand colors in `tailwind.config.cjs`
- **Fonts**: Modify fonts in the Tailwind config or CSS
- **Animations**: Adjust animation settings in `src/index.css`

### Background Video

Replace `public/videos/bg.mp4` with your own video. For best performance:
- Keep file size under 10MB
- Use MP4 format
- Optimize for web (H.264 codec)
- Consider video dimensions (1920x1080 recommended)

## 🔧 Environment Variables

This project doesn't require environment variables, but if you add external APIs:

Create a `.env` file in the root directory:
```
VITE_API_URL=your-api-url
VITE_CONTACT_FORM_ENDPOINT=your-form-endpoint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Kiran Kumar PM**
- 📧 Email: [kkpm3020@gmail.com](mailto:kkpm3020@gmail.com)
- 📱 Phone: [+91 7411063990](tel:+917411063990)
- 💼 LinkedIn: [kiran-kumar-p-m-462350279](https://www.linkedin.com/in/kiran-kumar-p-m-462350279)
- 🐙 GitHub: [KiranKumarPM](https://github.com/KiranKumarPM)

## 🙏 Acknowledgments

- React team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Vercel for seamless deployment
- The open-source community for inspiration

---

⭐ If you found this portfolio helpful, please consider giving it a star on GitHub!
