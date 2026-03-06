# 🎵 Spotify Clone

A full-stack music streaming application built with modern web technologies, featuring real-time functionality and a sleek user interface.

## 🌐 Live Demo

**[🎧 Try the Live App](https://better-spotify-clone-8jf1.onrender.com/)**

> Experience the full functionality of this Spotify clone with real music streaming, user authentication, and real-time chat features.

## ✨ Features

### 🎧 Core Music Features
- **Music Streaming** - Play, pause, skip tracks with custom audio controls
- **Playlist Management** - Create, edit, and manage personal playlists
- **Album Browsing** - Explore music organized by albums and artists
- **Search Functionality** - Find songs, albums, and artists instantly
- **Queue Management** - Add songs to queue and manage playback order

### 👥 Social Features
- **Real-time Chat** - Chat with other users while listening to music
- **User Profiles** - Personalized user accounts and preferences
- **Activity Feed** - See what others are listening to
- **Social Interactions** - Like and share favorite tracks

### 🔐 Authentication & Security
- **Secure Authentication** - Powered by Clerk for robust user management
- **Role-based Access** - Admin panel for content management
- **Protected Routes** - Secure access to user-specific features

### 📱 User Experience
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Dark/Light Theme** - Toggle between themes for comfortable viewing
- **Intuitive UI** - Clean, modern interface inspired by Spotify
- **Real-time Updates** - Live updates using WebSocket connections

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Socket.io** - Real-time bidirectional communication
- **Cloudinary** - Media storage and optimization
- **Clerk** - Authentication and user management

### Development Tools
- **ESLint** - Code linting and formatting
- **Git** - Version control
- **npm** - Package management

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account
- Cloudinary account
- Clerk account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Clone-Spotify
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   Follow the detailed setup guide in [ENV_SETUP_GUIDE.md](./ENV_SETUP_GUIDE.md)
   
   **Backend (.env)**
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ADMIN_EMAIL=your_admin_email@example.com
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NODE_ENV=development
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```
   
   **Frontend (.env.local)**
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. **Run the application**
   ```bash
   # Start backend (from backend directory)
   npm run dev
   
   # Start frontend (from frontend directory)
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
Clone-Spotify/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── lib/            # Database and utility functions
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API routes
│   │   ├── seeds/          # Database seeders
│   │   └── index.js        # Server entry point
│   ├── .env                # Backend environment variables
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── layout/         # Layout components
│   │   ├── lib/           # Utilities and configurations
│   │   ├── pages/         # Page components
│   │   ├── providers/     # Context providers
│   │   ├── stores/        # Zustand stores
│   │   └── types/         # TypeScript type definitions
│   ├── .env.local         # Frontend environment variables
│   └── package.json
└── ENV_SETUP_GUIDE.md     # Environment setup guide
```

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/callback` - Handle authentication callback

### Users
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update user profile

### Songs
- `GET /api/songs` - Get all songs
- `GET /api/songs/:id` - Get song by ID
- `POST /api/songs` - Upload new song (Admin)
- `DELETE /api/songs/:id` - Delete song (Admin)

### Albums
- `GET /api/albums` - Get all albums
- `GET /api/albums/:id` - Get album by ID
- `POST /api/albums` - Create new album (Admin)

### Admin
- `GET /api/admin/stats` - Get platform statistics
- `POST /api/admin/songs` - Upload songs
- `POST /api/admin/albums` - Create albums

## 🔧 Features in Detail

### Music Player
- Custom audio controls with play/pause/skip functionality
- Progress bar with seek functionality
- Volume control
- Shuffle and repeat modes
- Queue management

### Real-time Chat
- WebSocket-based messaging
- User presence indicators
- Message history
- Emoji support

### Admin Panel
- Upload and manage songs
- Create and organize albums
- View platform statistics
- User management

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly controls
- Optimized performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Spotify for design inspiration
- The open-source community for amazing tools and libraries
- Contributors and testers who helped improve this project

## 📞 Support

If you encounter any issues or have questions:
1. Check the [ENV_SETUP_GUIDE.md](./ENV_SETUP_GUIDE.md) for setup help
2. Review the troubleshooting section in the environment guide
3. Open an issue on GitHub with detailed information

---

**Built with ❤️ using modern web technologies**