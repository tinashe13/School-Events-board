
Skip to content
Navigation Menu

    tinashe13

    School-Events-board

Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights

    Settings

Comparing changes
Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also
or learn more about diff comparisons.
...

1 commit
1 file changed

    1 contributor

Commits on Mar 2, 2025

    readme :)
    @tinashe13
    tinashe13 committed Mar 2, 2025

Showing
with 102 additions and 1 deletion.
103 changes: 102 additions & 1 deletion 103
README.md
Copied!
Original file line number 	Diff line number 	Diff line change
@@ -1 +1,102 @@
# School-Events-board
# 🏆 Event Manager App

A event management application built with **Vite + React** for the frontend and **Node.js + Express** for the backend. The app allows users to **Create, Read, Update, and Delete (CRUD) events** with a sleek, responsive UI. This app was made on a time crunch for my final project for Applied restful APIs & intergration, so please don't judge

## 🚀 Features
- 📅 **Create, Update, Delete Events** via a REST API
- 🎨 **Floating Cards** UI with **animated buttons**
- 🌆 **Full-page background image with 60% transparency**
- 🖥 **Custom modal for delete confirmations**
- 🔥 **Responsive & modern UI** using Tailwind-like styling

---

## 🛠 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/event-manager.git
cd event-manager
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Frontend**
```sh
npm run dev
```
The frontend will now run at **`http://localhost:5173/`**.

---

## 📡 Backend API (Express Server)

### **1️⃣ Clone the Backend (If separate)**
If the backend is hosted separately, make sure to clone and navigate to it:
```sh
git clone https://github.com/your-username/event-manager-api.git
cd event-manager-api
```

### **2️⃣ Install Backend Dependencies**
```sh
npm install
```

### **3️⃣ Start the Backend Server**
```sh
node server.js
```
or use nodemon for hot reloading:
```sh
npx nodemon server.js
```
The backend API will run at **`http://localhost:3000/api/events`**.

---

## 🔗 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/events/create` | Create a new event |
| `GET` | `/api/events/` | Get all events |
| `GET` | `/api/events/:id` | Get a single event |
| `PUT` | `/api/events/update/:id` | Update an event |
| `DELETE` | `/api/events/delete/:id` | Delete an event |

---

## 🎨 Customizations

### **📌 Change Background Image**
To update the background, replace **`public/cuw.jpg`** with your own image.

### **📌 Modify Styling**
Update `src/index.css` to customize:
- 🎨 **Button Colors**
- 🏠 **Floating Cards**
- 📱 **Responsive Design**

---

## 💡 Technologies Used
- **Frontend:** Vite + React, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB
- **Styling:** Tailwind-inspired CSS

---

## 🎯 Future Improvements
- ✅ Add **User Authentication**
- ✅ Implement **Search & Filters**
- ✅ Deploy to **Netlify & Vercel**

---

## 🙌 Author
Made with ❤️ by **Tinashe Dzemwa**  
Feel free to ⭐ this repo and contribute!

Footer
© 2025 GitHub, Inc.
Footer navigation

    Terms
    Privacy
    Security
    Status
    Docs
    Contact

Copied!
