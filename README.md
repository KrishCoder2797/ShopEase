# 🛒 ShopEase – MERN E-Commerce Application

ShopEase is a **full-stack, production-ready e-commerce web application** built using the **MERN stack**. It provides a complete online shopping experience with features such as product browsing, cart management, secure checkout, and online payment integration.

The project is designed using a **modular and scalable architecture**, ensuring clean separation of concerns between frontend, backend, and database layers.

---

## 🚀 Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Context API
* React Router DOM
* Axios
* CSS / Styled Components

### Backend

* Node.js
* Express.js
* RESTful API Architecture
* Mongoose 

### Database

* MongoDB Atlas (Cloud Database)

### Payment Integration

* Razorpay Payment Gateway

---

## ✨ Features

### 👤 User Management

* User registration and login
* Persistent authentication state
* Form validation and improved UX
* Secure session handling

### 🛍️ Product Management

* Product listing page
* Product detail page
* Search functionality
* Category-based filtering

### 🛒 Cart Management

* Add items to cart
* Remove items from cart
* Update product quantity
* Auto-sync cart with backend
* Cart persistence across sessions

### 💳 Checkout & Payment

* Razorpay payment workflow
* Secure backend payment verification
* Order creation after successful payment
* Payment status handling

---

## 🧩 Project Architecture

```

│
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       ├── context/
│       ├── api/
│       ├── utils/
│       └── App.js
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── config/
│   ├── utils/
│   └── server.js
│
└── README.md
```

---

## 📡 API Endpoints

### Product Routes

```
GET    /api/products
GET    /api/products/:id
```

### Cart Routes

```
POST   /api/cart/add
POST   /api/cart/remove
GET    /api/cart/:userId
```

### Payment Route

```
POST   /api/payment/razorpay
```


## 🔐 Security Practices

* Environment variables for sensitive data
* Secure payment verification on backend
* Proper API validation and error handling

---

## 🚧 Future Enhancements

* Admin dashboard for managing products and orders
* Order history page
* Wishlist feature
* Email notifications
* Product reviews and ratings

## 📱 Screenshots

Below are some screenshots of the **ShopEase** app.  

## Screenshots

| Feature       | Preview                    |
|---------------|----------------------------|
| Login Screen   | ![Home](client/assets/images/login.png)|
| SignUp Screen   | ![Home2](client/assets/images/reg.png) |
| Home Screen   | ![Home](client/assets/images/Home.png) |
| Products Screen   | ![Home](client/assets/images/products.png) |
| Product Page Screen   | ![Home](client/assets/images/productPage.png) |
| Cart Screen   | ![Home](client/assets/images/cart.png) |
| Empty Cart Screen   | ![Home](client/assets/images/emptyCart.png) |
| Payment Options  Screen   | ![Home](client/assets/images/paymentOptions.png) |
| Razorpay Screen   | ![Home](client/assets/images/rozorpay.png) |
| Payment Success Screen   | ![Home](client/assets/images/paymentSuccess.png) |

