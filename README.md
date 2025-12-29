# Meetora

Many learners struggle to practice a new language with real speakers. This platform bridges that gap by connecting learners with people who already know the language, enabling natural and practical learning through conversation.

## 🚀 Technologies Used

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on TailwindCSS (with multiple themes configured)
- **React Router** - Client-side routing
- **TanStack Query (React Query)** - Data fetching and state management
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Stream Chat SDK** - Real-time chat functionality
- **JSON Web Token (JWT)** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie handling
- **dotenv** - Environment variable management

## 📁 Project Structure

```
Meetora/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions (API, Axios)
│   │   └── constants/     # Constants
│   ├── public/        # Static assets
│   └── package.json
│
└── backend/           # Express backend API
    ├── src/
    │   ├── controller/    # Route controllers
    │   ├── routes/        # API routes
    │   ├── models/        # Mongoose models
    │   ├── middleware/    # Express middleware
    │   ├── lib/           # Utilities (DB, Stream)
    │   └── server.js      # Entry point
    └── package.json
```

## 🛠️ Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (local or cloud instance)
- Stream Chat account (for API keys)

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd Meetora
```

### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd ../backend
npm install
```

### Step 4: Environment Variables

#### Backend (.env)
Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET=your_jwt_secret_key
```

#### Frontend
The frontend is configured to connect to `http://localhost:5173` (Vite default). The backend CORS is set to allow requests from `http://localhost:5173`.

## 🏃 Running the Project

### Development Mode

#### Start Backend Server
```bash
cd backend
npm start
```
The server will run on the port specified in your `.env` file (default: 5000).

#### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will be available at `http://localhost:5173`

### Production Build

#### Build Frontend
```bash
cd frontend
npm run build
```
The production build will be in the `frontend/dist/` directory.

#### Preview Production Build
```bash
cd frontend
npm run preview
```

## 🎨 DaisyUI Themes

The project is configured with multiple DaisyUI themes. Currently using the **"halloween"** theme. You can change the theme in `frontend/src/App.jsx` by modifying the `data-theme` attribute.

Available themes configured:
- light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset

## 📝 Key Features

- User authentication (Signup/Login)
- User onboarding flow
- Real-time chat using Stream Chat
- Friend request system
- Notification system
- Protected routes with authentication middleware

## 🔧 Development Notes

- Backend uses ES modules (`"type": "module"` in package.json)
- Frontend uses Vite for fast development and building
- TanStack Query handles all API data fetching and caching
- JWT tokens are stored in HTTP-only cookies for security
- Stream Chat SDK handles real-time messaging functionality

