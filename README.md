# Moodle

[Link to Website](google.com)

**Moodle** is a beautiful and responsive web application built with **Next.js** and **Tailwind CSS**, designed to help users track their mood over time. With seamless **Firebase** integration for authentication and data storage, Moodle lets users log their daily mood and provides insightful analytics on how their mood changes over weeks, months, and even years.

## Features

- **Daily Mood Logging**: Users can record their mood each day and reflect on how they feel over time.
- **Mood Analytics**: Displays the average mood across different time periods (week, month, year) to offer insights into emotional patterns.
- **Responsive Design**: Optimized for both desktop and mobile devices using Tailwind CSS.
- **Firebase Authentication**: Secure login and logout functionality powered by Firebase.
- **Data Storage**: Mood data is stored in Firebase, ensuring persistence and security.

## Technologies Used

- **Next.js**: For building the fast and efficient React-based web app.
- **Tailwind CSS**: For creating a modern, responsive, and customizable design.
- **Firebase**: For user authentication (login/logout) and storing mood data.

## Installation

1. Clone the repository, install dependencies, create the `.env.local` file, and run the development server:

   ```bash
   git clone [Your-Repository-URL]
   cd moodle
   npm install

   # Create .env.local file and add your Firebase configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-sender-id>
   NEXT_PUBLIC_FIREBASE_APP_ID=<your-app-id>

   # Run the development server
   npm run dev

   # Open the app in your browser
   open http://localhost:3000
   ```
