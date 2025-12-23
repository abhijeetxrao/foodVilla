# 🍔 Foodie App - High-Performance Food Delivery UI

A premium, fast, and responsive food ordering web application built with **React**, **Vite**, and **Tailwind CSS**. This project leverages Swiggy's live API to provide real-time restaurant data, featuring a robust global state management system and modern UI/UX principles.



## 🚀 Live Demo
https://food-villa-green.vercel.app/

## ✨ Key Features

- **Real-Time Data Fetching:** Integrates with live Swiggy APIs to display actual restaurants and menus based on location.
- **Global Cart System:** Implemented using **React Context API** for seamless state sharing between the menu and the navigation bar.
- **Modern UI/UX:**
  - **Custom Shimmer UI:** Hand-crafted skeleton loaders for both Home and Menu pages to reduce perceived loading time.
  - **Glassmorphism Navbar:** A sticky, blurred-background navigation bar for a premium feel.
  - **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports.
- **Advanced Routing:** Built with `react-router-dom`, supporting nested routes (Profile inside About) and dynamic URL parameters for restaurants.
- **Performance Optimization:** - **Lazy Loading:** InstaMart module is bundled separately using `React.lazy` and `Suspense`.
  - **Custom Hooks:** Clean separation of concerns with logic extracted into `useRestaurant`, `useStatus`, and `useCart`.
- **CORS Proxy:** Configured Vite dev-server proxy to handle cross-origin requests during development.

---

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Modern Utility-First approach)
- **State Management:** Context API
- **Routing:** React Router
- **Data Fetching:** Axios
- **Icons:** SVG-based iconography



---

## 📂 Project Highlights

### **Context API Logic**
The cart manages adding items, removing items, and quantity toggles (`+` / `-`) globally. It also persists data to `localStorage` so your cart isn't lost on page refresh.

### **Custom Hooks**
- `useRestaurant(id)`: Fetches and cleans complex nested API data for specific restaurants.
- `useStatus()`: Detects if the user has lost internet connection and displays an "Offline" screen.

---

## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/abhijeetxrao/foodVilla.git
   cd foodVilla
   
