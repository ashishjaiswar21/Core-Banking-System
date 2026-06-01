# 🏦 Core Banking System API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

A robust, production-ready backend REST API for a core banking system. Built with Node.js, Express, and MongoDB, this platform handles secure user authentication, ACID-compliant ledger transactions, and precise account balance management for a seamless financial experience.

**🔗 Live API Base URL:** `[Your Render URL Will Go Here]`
**📂 Project Repository:** [Core-Banking-System](https://github.com/ashishjaiswar21/Core-Banking-System)

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Nodemailer
- MongoDB Transactions (Sessions)
- Render Deployment

---

## ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- JWT-Based Authentication
- Protected Routes
- Secure Password Hashing using bcrypt

### 🏦 Account Management

- Create Bank Accounts
- Fetch User Accounts
- Get Real-Time Account Balance

### 💸 Transaction Management

- Initial Funds Transaction
- Account-to-Account Transfers
- Ledger-Based Accounting
- Idempotency Key Protection
- Transaction History

### 📊 Ledger System

Every transaction creates:

- Debit Entry
- Credit Entry

This ensures proper bookkeeping and accurate balance calculations.

---

## ⚡ Advanced Engineering Concepts

### ACID Transactions

MongoDB Sessions ensure:

- Complete Success OR Complete Failure
- No Partial Transactions
- Data Consistency

### Idempotency Protection

Prevents duplicate money transfers caused by:

- Network Retries
- Multiple Clicks
- API Timeouts

### JWT Blacklisting

Implements secure logout functionality using:

- Token Blacklist Collection
- TTL Indexes
- Automatic Cleanup

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/ashishjaiswar21/Core-Banking-System.git

cd Core-Banking-System
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email

EMAIL_PASS=your_email_password
```

### Run Development Server

```bash
npm run dev
```

### Run Production Server

```bash
npm start
```

---

## 🛤️ API Endpoints

### Authentication

| Method | Endpoint |
|----------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| POST | /api/auth/logout |

---

### Accounts

| Method | Endpoint |
|----------|----------|
| POST | /api/accounts |
| GET | /api/accounts |
| GET | /api/accounts/balance/:accountId |

---

### Transactions

| Method | Endpoint |
|----------|----------|
| POST | /api/transactions/system/initial-funds |
| POST | /api/transactions |
| GET | /api/transactions |

---

## 🗂️ Project Structure

```bash
src/
│
├── config/
│
├── controllers/
│   ├── auth.controller.js
│   ├── account.controller.js
│   └── transaction.controller.js
│
├── middleware/
│   └── auth.middleware.js
│
├── models/
│   ├── user.model.js
│   ├── account.model.js
│   ├── transaction.model.js
│   └── ledger.model.js
│
├── routes/
│   ├── auth.routes.js
│   ├── account.routes.js
│   └── transaction.routes.js
│
├── services/
│   └── email.services.js
│
├── app.js
└── server.js
```

---

## 🔒 Security Features

- bcrypt Password Hashing
- JWT Authentication
- Protected API Routes
- MongoDB Transactions
- Idempotency Key Validation
- Secure Environment Variables

---

## 🧪 Future Enhancements

- [ ] Loan Management System
- [ ] Admin Dashboard
- [ ] Role-Based Access Control (RBAC)
- [ ] Docker Support
- [ ] Automated Testing (Jest)
- [ ] React / Next.js Frontend
- [ ] Transaction Analytics Dashboard
- [ ] Account Freeze & Unfreeze

---

## 👨‍💻 Author

### Ashish Kumar (Ashish Jaiswar)

GitHub:
https://github.com/ashishjaiswar21

If you found this project useful, consider giving it a ⭐ on GitHub.