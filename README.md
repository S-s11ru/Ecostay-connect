# EcoStay Connect

EcoStay Connect is an AI-assisted homestay and eco-tourism booking web application that helps users discover sustainable accommodations and travel experiences.

## Live Demo

https://ecostay-connect.vercel.app/



## Features

* User registration and login
* Browse eco-friendly homestays
* View property details
* Booking functionality
* AI-assisted travel recommendations
* Responsive user interface

## Tech Stack

**Frontend**

* React.js
* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**AI**

* OpenAI API

**Deployment**

* Vercel

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/S-s11ru/Ecostay-connect.git
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

Add your MongoDB connection string and OpenAI API key.

4. Run the project

```bash
npm start
```

## API Endpoints

| Method | Endpoint           | Description    |
| ------ | ------------------ | -------------- |
| POST   | /api/auth/register | Register user  |
| POST   | /api/auth/login    | Login user     |
| GET    | /api/homestays     | Get homestays  |
| POST   | /api/bookings      | Create booking |

## Project Structure

```
client/
server/
routes/
models/
components/
public/
```

## Known Limitations

* Free-tier hosting may have slower response times.
* Payment integration is not implemented.
* Some AI responses depend on API availability.

## Credits

Developed by **Sheetal Saru** as part of the AI-Assisted Full Stack Web Development Internship.

AI tools used: ChatGPT and GitHub Copilot.
