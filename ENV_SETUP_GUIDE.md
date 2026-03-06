# Environment Variables Setup Guide

This guide will help you set up all the required environment variables for the Spotify Clone project.

## Backend Environment Variables (.env)

Create a `.env` file in the `backend` directory with the following variables:

### Server Configuration
```env
PORT=5000
NODE_ENV=development
```

### Database Configuration
```env
MONGODB_URI=your_mongodb_connection_string
```
**How to get MongoDB URI:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string and replace `<password>` with your database password
5. Replace `<dbname>` with your preferred database name (e.g., `spotify_db`)

### Admin Configuration
```env
ADMIN_EMAIL=your_admin_email@example.com
```
**Setup:** Use your email address that will have admin privileges in the application.

### Cloudinary Configuration (File Upload Service)
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
**How to get Cloudinary credentials:**
1. Go to [Cloudinary](https://cloudinary.com/)
2. Create a free account
3. Go to Dashboard
4. Copy the Cloud Name, API Key, and API Secret from the dashboard

### Clerk Authentication
```env
CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
CLERK_SECRET_KEY=sk_test_your_secret_key
```
**How to get Clerk keys:**
1. Go to [Clerk](https://clerk.com/)
2. Create a free account and application
3. Go to "API Keys" in your dashboard
4. Copy the Publishable Key and Secret Key

## Frontend Environment Variables (.env.local)

Create a `.env.local` file in the `frontend` directory:

### Clerk Authentication (Frontend)
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
```
**Note:** Use the same Publishable Key from your Clerk dashboard (same as backend).

## Complete Example Files

### Backend `.env` Example:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/spotify_db?retryWrites=true&w=majority
ADMIN_EMAIL=admin@example.com
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=your_secret_here
NODE_ENV=development
CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here
```

### Frontend `.env.local` Example:
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

## Security Notes

⚠️ **Important Security Guidelines:**
- Never commit `.env` files to version control
- Keep your API keys and secrets private
- Use different keys for development and production
- Regularly rotate your API keys
- The `.env` files are already added to `.gitignore`

## Troubleshooting

### Common Issues:
1. **MongoDB Connection Error:** Ensure your IP is whitelisted in MongoDB Atlas
2. **Cloudinary Upload Fails:** Verify all three Cloudinary credentials are correct
3. **Authentication Issues:** Make sure Clerk keys match between frontend and backend
4. **Port Already in Use:** Change the PORT value in backend `.env`

### Testing Your Setup:
1. Start the backend: `cd backend && npm run dev`
2. Start the frontend: `cd frontend && npm run dev`
3. Check console for any environment variable related errors

## Getting Help

If you encounter issues:
1. Double-check all environment variables are spelled correctly
2. Ensure no extra spaces in your `.env` files
3. Verify all services (MongoDB, Cloudinary, Clerk) are properly configured
4. Check the console logs for specific error messages