# SGFitness 🏋️ - Gym Website

**SGFitness** is a full-stack gym website built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. It offers essential fitness features like a BMI Calculator, membership joining plans, and a contact page that sends user queries directly via email.

## 🚀 Features

- 🧮 **BMI Calculator** – Calculate your Body Mass Index in real-time
- 📋 **Joining Plans** – View and choose from available gym membership plans
- 📩 **Contact Us Page** – Sends email to admin with user queries
- 💡 Modern UI with smooth user experience

## 🛠️ Tech Stack

**Frontend:**
- React.js
- CSS / Styled JSX

**Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose)

**Email Integration:**
- Nodemailer

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/sgfitness.git
cd sgfitness
```

2. **Install server and client dependencies**

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. **Set up environment variables**

Create a `.env` file inside the `/backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```

4. **Run the app**

```bash
# In /backend
npm run server

# In /frontend
npm start
```

The frontend will be running on `http://localhost:3000` and backend on `http://localhost:5000`.

## 🖼️ Pages Overview

- **Home Page** – Introduction to the gym
- **BMI Calculator** – Input height and weight to calculate BMI
- **Plans Page** – List of available membership plans with pricing
- **Contact Page** – User fills a form, and admin receives an email
- **Thank You Page** – Shown after successful contact form submission

## 📧 Email Functionality

- Uses **Nodemailer** to send form submissions directly to the admin email.
- Works securely via environment variables and email provider authentication.

## 🔒 Security Notes

- Use environment variables to hide sensitive email credentials.
- Consider using a service like SendGrid or Mailgun in production.

## 📌 Folder Structure

```plaintext
sgfitness/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## 📈 Future Enhancements

- Admin dashboard for managing user queries and memberships
- Online payment gateway for joining plans
- Image gallery or virtual gym tour

## 🙋‍♂️ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

## 📬 Contact

For any queries or collaborations:  
📧 your.email@example.com  
🌐 [GitHub Profile](https://github.com/yourusername)

---

© 2025 SGFitness. All rights reserved.
