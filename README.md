# Mini Notes App

A modern, responsive note-taking app built with React (Vite), Chakra UI, and Firebase Realtime Database.

![Mini Notes App Screenshot](./public/vite.svg)

## 🚀 Features
- Create, view, and delete notes in real-time
- Beautiful, responsive UI with Chakra UI
- Light and dark mode with custom gradients
- Theme toggle button
- Robust error handling for all network/database operations
- Clean, centered layout for optimal usability

## 🛠 Tech Stack
- **Frontend:** React (Vite), Chakra UI
- **Backend:** Firebase Realtime Database
- **Other:** Context API, React Router

## 📝 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Abhishekgt/Notes_App.git
cd Notes_App
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```
VITE_FIREBASE_DB_URL=https://your-firebase-db-url
```
Replace with your actual Firebase Realtime Database URL.

### 4. Start the development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to use the app.

## 🔒 Firebase Security Rules (for testing)
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

## 🌑 Dark Mode Example
Easily toggle between light and dark themes for a great user experience day or night.

## 📦 Deployment
You can deploy this app for free using [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or [Firebase Hosting](https://firebase.google.com/docs/hosting).

## 🙏 Credits
- [Chakra UI](https://chakra-ui.com/)
- [Firebase](https://firebase.google.com/)
- [Vite](https://vitejs.dev/)

---

> Made with ❤️ by [Abhishekgt](https://github.com/Abhishekgt)
