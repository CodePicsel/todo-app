Advanced To-Do List App

A modern, customizable to-do list application built with Node.js, Express, HTML, CSS, and JavaScript, featuring local storage, a theme switcher, and a real-time clock. Designed to work in Termux on Android.

Features

✅ Task Management: Add, delete, and mark tasks as completed.

💾 Local Storage: Tasks persist between sessions.

🎨 Theme Toggle: Light and dark mode support.

⏳ Live Date & Time: Displays current date and time.

📱 Runs on Termux: Works seamlessly in a Node.js environment on Android.


Installation

📌 Prerequisites

Make sure you have Termux installed on your Android device and Node.js installed in Termux.

pkg update && pkg upgrade
pkg install nodejs

🚀 Clone the Repository

git clone https://github.com/your-username/todo-app.git
cd todo-app

📦 Install Dependencies

npm install

▶️ Run the Application

node app.js

Open your browser and visit: http://localhost:3000

📂 Project Structure

todo-app/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
├── views/
│   └── index.html
├── app.js
└── package.json

Usage

1. Open the app in your browser.


2. Add tasks using the input box.


3. Click a task to mark it as completed.


4. Click the delete button to remove a task.


5. Toggle between light and dark mode.


6. The current date and time updates automatically.



🚀 Future Improvements

[ ] Database storage with MongoDB

[ ] User authentication and profiles

[ ] Notifications & reminders

[ ] PWA support for offline usage


Contributing

Feel free to fork this repository, create a new branch, and submit a Pull Request with improvements! 🚀

License

This project is MIT Licensed. See the LICENSE file for details.
