# Serenity - Yoga & Life Coaching Website

A modern, visually stunning 3D animated yoga and life coaching website built with React, Next.js, and Firebase.

## Features

- **🏠 Homepage**: Beautiful landing page with 3D animations and preview sections
- **👤 About Us**: Detailed information about the life coach and philosophy
- **🧠 Hypnosis**: Calming design with information about hypnosis services
- **🗣️ NLP**: Comprehensive guide to Neuro-Linguistic Programming
- **🥋 Wing Chun**: Information about the Chinese martial art
- **🧘 Meditation**: Peaceful meditation practices and benefits
- **📸 Gallery**: Animated photo gallery with Firebase integration
- **📞 Contact**: Contact form with Firebase backend
- **🔐 Admin Panel**: Protected admin dashboard for content management

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, Three.js, React Three Fiber
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Icons**: Lucide React
- **Development**: ESLint, Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project (for backend features)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd yoga-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your Firebase configuration:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication, Firestore Database, and Storage
3. Configure Authentication for Email/Password
4. Update your environment variables with the Firebase config
5. Set up Firestore security rules for production

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── admin/             # Admin panel
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── hypnosis/          # Hypnosis page
│   ├── meditation/        # Meditation page
│   ├── nlp/               # NLP page
│   ├── wing-chun/         # Wing Chun page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── 3D/               # Three.js components
│   ├── animations/       # Animation components
│   ├── AdminPanel.tsx    # Admin dashboard
│   ├── ContactForm.tsx   # Contact form
│   ├── Footer.tsx        # Site footer
│   ├── Gallery.tsx       # Photo gallery
│   └── Navigation.tsx    # Navigation header
└── lib/
    └── firebase.ts       # Firebase configuration
```

## Features in Detail

### 3D Animations
- Three.js integration with React Three Fiber
- Floating orbs and yoga symbols
- Smooth parallax effects
- Interactive 3D scenes

### Responsive Design
- Mobile-first approach
- Fully responsive across all devices
- Touch-friendly interactions
- Optimized for performance

### Admin Panel
- Protected with Firebase Authentication
- Gallery management
- Contact form submissions
- Real-time updates

### Firebase Integration
- User authentication
- Real-time database (Firestore)
- File storage for gallery images
- Serverless backend

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Firebase Hosting
- Railway

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_FIREBASE_API_KEY` - Firebase API key
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` - Firebase auth domain
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID` - Firebase project ID
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` - Firebase storage bucket
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` - Firebase messaging sender ID
- `NEXT_PUBLIC_FIREBASE_APP_ID` - Firebase app ID

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact [info@serenity.com](mailto:info@serenity.com)

---

Built with ❤️ for wellness and transformation.
