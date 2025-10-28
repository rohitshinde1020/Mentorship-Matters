# MentorshipMatters - College Mentorship Platform

A modern, elegant frontend platform connecting new college students with experienced seniors for mentorship sessions on academics, career planning, networking, and personal development.

## 🚀 Features

- **Landing Page** with hero section and featured sessions
- **Sessions Browse** with advanced filtering and search
- **Session Details** with mentor profiles and booking
- **Create Session** form for mentors to share knowledge
- **About Us** page with team information and mission
- **Responsive Design** that works on all devices
- **Modern UI** with Tailwind CSS and smooth animations

## 🛠️ Tech Stack

- **React 19** with modern hooks
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for fast development and building

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mentorship-matters-v1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

Follow the prompts to configure your deployment.

### Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

The site will be automatically deployed and you'll get a live URL.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   └── SessionCard.jsx # Session display card
├── pages/              # Page components
│   ├── LandingPage.jsx
│   ├── SessionsPage.jsx
│   ├── SessionDetailsPage.jsx
│   ├── CreateSessionPage.jsx
│   └── AboutPage.jsx
├── data/               # Mock data
│   └── mockSessions.js
├── assets/             # Static assets
└── App.jsx            # Main app component
```

## 🎨 Customization

### Colors
The app uses a purple/indigo color scheme. To change colors, modify the Tailwind classes throughout the components.

### Content
Update the mock data in `src/data/mockSessions.js` to reflect your actual sessions and mentors.

### Styling
All styling is done with Tailwind CSS. Modify classes directly in components or extend the configuration in `tailwind.config.js`.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email support@mentorshipmatters.com or create an issue in the repository.
