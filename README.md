# 🌞 SunCart – Summer Essentials Store

# 🌐 Live Demo
### 🔗 Visit Now:
👉 

---

## 🛍️ Project Overview

**SunCart** is a modern summer-themed eCommerce web application built with **Next.js**.  
Users can explore seasonal products like sunglasses, summer outfits, skincare items, and beach accessories.  

The platform includes authentication, protected routes, dynamic product pages, and a clean responsive UI designed for all devices.

---

## 🎯 Purpose

The goal of this project is to build a **full-stack modern eCommerce UI experience** with authentication, protected routing, and dynamic product rendering using Next.js App Router.

---

## ✨ Key Features

### 🧭 Navbar & Layout
- Logo + navigation links (Home, Products, My Profile)
- Conditional UI based on authentication:
  - Logged in → Avatar + Logout button
  - Logged out → Login / Register buttons

---

### 🏠 Home Page
- 🌅 Hero section with summer sale banners
- 🔥 Popular Products section 

---

### 📦 Product System
- JSON-based product data (15+ products)
- Dynamic product rendering
- Product Details page with full information

---

### 🔒 Protected Product Details Page
- Only accessible after login
- Unauthorized users are redirected to Signup page
- After signup → redirect back to login page
- After login → redirected back to Home page

---

# 🔐 Authentication (BetterAuth)
## Login Page
- Email & Password login
- Google Social Login
- Redirect to Home after login
- Error handling with toast notifications
- Link to Register page

## Register Page
- Name, Email, Photo URL, Password form
- Google Social Login
- Redirect to Login after registration
- Error handling with toast notifications
- Link to Login page

---

## 👤 My Profile
- Displays user info:
  - Name
  - Email
  - Profile photo
- Update profile feature:
  - Update Name
  - Update Image URL

---

## ✏️ Update Profile Feature
- Separate update page
- Uses BetterAuth user update API
- Saves updated profile instantly

---

## 📱 Fully Responsive Design
- Mobile 📱
- Tablet 📟
- Desktop 💻

---

## ⚙️ Extra Features
- Environment variables for secure config
- Smooth navigation with Next.js App Router
- Toast notifications for feedback

---

## 📁 Project File Structure

```
sun-cart/
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── public/
│   ├── Data.json
│   └── Assets/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── loading.jsx
│   │   ├── page.js
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.js
│   │   ├── login/
│   │   │   └── page.jsx
│   │   ├── my-profile/
│   │   │   ├── page.jsx
│   │   │   └── [update-profile]/
│   │   │       └── page.jsx
│   │   ├── products/
│   │   │   ├── layout.jsx
│   │   │   ├── page.jsx
│   │   │   ├── [category]/
│   │   │   │   └── [price]/
│   │   │   │       └── page.jsx
│   │   │   └── product/
│   │   │       └── [id]/
│   │   │           ├── loading.jsx
│   │   │           └── page.jsx
│   │   └── signup/
│   │       └── page.jsx
│   ├── Components/
│   │   ├── Banner.jsx
│   │   ├── Brands.jsx
│   │   ├── Care.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Products.jsx
│   │   └── Toastify.jsx
│   └── lib/
│       ├── auth-client.js
│       ├── auth.js
│       └── db.js
```

---

## 📝 File Descriptions

### 🔧 Root Configuration Files
- `next.config.mjs` – Next.js configuration
- `eslint.config.mjs` – ESLint rules
- `jsconfig.json` – JavaScript/Path aliases
- `postcss.config.mjs` – CSS processing
- `package.json` – Project dependencies

### 📂 Public Directory
- `Data.json` – Product data (JSON format)
- `Assets/` – Static images and media files

### 🎨 App Directory (`src/app/`)
- `layout.js` – Root layout wrapper
- `page.js` – Home page
- `globals.css` – Global styles
- `loading.jsx` – Loading skeleton/spinner
- **API Routes** (`api/auth/[...all]/`) – BetterAuth endpoints
- **Pages:**
  - `login/` – Login page
  - `signup/` – Sign up page
  - `my-profile/` – User profile page
  - `products/` – Products listing & filtering by category/price
  - `products/product/[id]/` – Individual product details (protected)

### 🧩 Components (`src/Components/`)
- `Navbar.jsx` – Header navigation
- `Banner.jsx` – Hero/promotional banners
- `Products.jsx` – Product grid component
- `Brands.jsx` – Brand showcase
- `Care.jsx` – Care/tips section
- `Footer.jsx` – Footer component
- `Toastify.jsx` – Toast notification setup

### 📚 Library (`src/lib/`)
- `auth.js` – BetterAuth server-side configuration
- `auth-client.js` – BetterAuth client-side setup
- `db.js` – Database configuration
- Clean UI with Tailwind CSS
- Custom loading states
- 404 Not Found page

---

## 🧰 Tech Stack

- ⚛️ Next.js (App Router)
- 🎨 Tailwind CSS
- 🧩 DaisyUI
- 🔐 BetterAuth
- 💡 JavaScript (ES6+)
- 🔔 React Toastify
- 📦 Static JSON Data
- 🎨 Animated.CSS

---

## 📁 Project Structure



---

## 🔐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=your_app_url
BETTER_AUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```
---

# 🚀 Getting Started

## 1️⃣ Clone the Repository
```js
git clone https://github.com/Abid-Hossain-Sifat/Assignment8-SunCart.git
cd Assignment8-SunCart
```

## 2️⃣ Install Dependencies
```js
npm install
```

## 3️⃣ Run Development Server
```js
npm run dev
```

## 4️⃣ Open in Browser
```js
http://localhost:3000
```

---
# 👨‍💻 Author

**Abid Hossain Sifat**  
SunCart Assignment Project  
Built with ❤️ using Next.js