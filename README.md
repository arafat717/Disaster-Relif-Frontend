# Post-Disaster Relief Donation Platform - Project README

## Project Overview

The Post-Disaster Relief Donation Platform is a comprehensive web application aimed at facilitating post-disaster relief efforts by providing a centralized hub for donations, donor testimonials, and relevant information. The platform utilizes modern web technologies such as React, Redux, RTK Query, and React Router DOM for efficient data management and user navigation.

## Live Link

[Live Demo](https://disaster-relif.vercel.app/)

## Features

- **Home / Landing Page / Root Page [Public]:**
  - Visual branding elements including a logo and hero section.
  - Navigation links for both authenticated and unauthenticated users.
  - Display of donation posts and donor testimonials.
  - Informative sections about the platform's mission and impact.

- **All Donations Page (/donations) [Public Route]:**
  - Grid layout displaying donation posts.
  - Each card includes key details of the donation and a button to view more details.

- **Donation Detail Page (/donations/:id) [Public Route]:**
  - Detailed presentation of a specific donation post.
  - Description and option to donate now.

- **Login / Register Page [Public Routes]:**
  - Secure registration and login pages for user authentication.

- **Dashboard [Private Routes]:**
  - Visualization of donation statistics using a pie chart.
  - Management of donation posts with options for editing and deleting.
  - Creation of new donation posts via a form-based interface.

## Technology Used

- **Frontend:**
  - React.js - JavaScript library for building user interfaces.
  - Redux - State management library for managing application state.
  - RTK Query - Toolkit for simplified data fetching and caching.
  - React Router DOM - Library for declarative routing in React applications.
  - Framer Motion - Library for creating animations to enhance user experience.

## Setup Instructions

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd disaster-`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:3000` to view the application.

## Contribution Guidelines

- Fork the repository.
- Create a new branch: `git checkout -b feature-new-feature`
- Make your changes and commit them: `git commit -am 'Add new feature'`
- Push to the branch: `git push origin feature-new-feature`
- Submit a pull request.

## Credits

This project was developed by [Arafat Hossen Joni] as part of [Assignment].


