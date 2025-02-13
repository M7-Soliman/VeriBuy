# VeriBuy Mobile App

A React Native mobile application that combines social media features with e-commerce functionality.

Features
User Authentication (Firebase)
Feed with Grid and TV-style viewing modes
Shopping Cart functionality
User Profiles
Real-time notifications
Camera integration for posting
Gesture handling support

Tech Stack
React Native
Firebase Authentication
Redux for state management
React Query for data fetching
React Navigation for routing
React Native Gesture Handler
Tailwind CSS (via React Native classes)

Getting Started

Prerequisites
Node.js
npm or yarn
React Native development environment setup
Firebase account

Installation

1. Clone the repository
git clone [repository-url]

2. Install dependencies
npm install
or
yarn install

3. Configure Firebase
- Create a Firebase project
- Create a .env file in the root directory with the following variables:
  ```
  FIREBASE_API_KEY=your_api_key
  FIREBASE_AUTH_DOMAIN=your_auth_domain
  FIREBASE_DATABASE_URL=your_database_url
  FIREBASE_PROJECT_ID=your_project_id
  FIREBASE_STORAGE_BUCKET=your_storage_bucket
  FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  FIREBASE_APP_ID=your_app_id
  FIREBASE_MEASUREMENT_ID=your_measurement_id
  ```
- Never commit the .env file to version control

4. Start the application
npx react-native run-ios
or
npx react-native run-android

