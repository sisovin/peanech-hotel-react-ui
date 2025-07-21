# Peanech-Hotel-Hub

## 🚀 Roadmap to React JSX: Peanech-HMS Design

**Goal**:  
Build a futuristic, responsive **Peanech-HMS** hotel website and management system using React JSX for the frontend, while retaining robust backend functionality in native PHP (CLI) + PDO MySQL. The modern UI is powered by **Tailwind CSS**, with support for dynamic theming.

---

## 🧱 Tech Stack

| Layer            | Tools Used                                           |
|------------------|------------------------------------------------------|
| Language         | PHP 8.3.12 (CLI scripts), JavaScript (modular JSX)  |
| Frontend         | React JSX, Tailwind CSS (custom themes via OKLCH)   |
| Backend          | PHP (MVC-style), PDO MySQL                          |
| UI Features      | AJAX, jQuery (legacy bridging), HTML5               |
| Server Options   | XAMPP / IIS (PHP CGI compatible)                    |
| Browsers Targeted| Chrome, Firefox, Edge, Opera                        |

---

## 🎨 Tailwind CSS Theme Architecture

- **Customizable color standards**: `default`, `red`, `rose`, `orange`, `green`, `blue`, `yellow`, `violet`
- **Theme variables** follow OKLCH format and support dark mode with precise chromatic control.
- Easily extend and switch themes for a unique user experience.

---

## 🛠️ Modules Breakdown

### 🔐 Admin Panel

- Admin Authentication
- Admin Profile + Password Management
- Room Setup & Availability Controls
- Booking Management (Create/Edit/Delete)
- User Registration & Profile Oversight
- Complaint Handling Workflow
- Feedback Moderation & Display
- Password Recovery System

### 🧑‍💼 User Panel

- User Registration & Login
- Password Reset Flow
- Personalized Dashboard
- Profile Management
- Room Booking + History
- Complaint Registration & Tracking
- Feedback Submission Interface
- Account Activity Logs

---

## 📋 Development Milestones

1. **Phase 1 – Setup & Boilerplate**
    - CLI-based PHP backend initialization
    - React JSX structure bootstrapping
    - Tailwind base theme injection with dark/light variants

2. **Phase 2 – Core Features**
    - Admin module UI with protected routes
    - Room CRUD & user profile management
    - Booking engine integration with PHP-PDO transactions

3. **Phase 3 – User Experience**
    - Registration/login forms with AJAX feedback
    - Complaint and feedback system via React forms
    - Tailored dashboards for Admin/User roles

4. **Phase 4 – Enhancements**
    - Theme customization panel with OKLCH sliders
    - Activity logs, printable views
    - Responsive layout refinements

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sisovin/peanech-hotel-react-ui.git
   ```

2. **Install frontend dependencies:**
   ```bash
   cd peanech-hotel-react-ui
   npm install
   ```

3. **Setup backend:**
   - Ensure PHP 8.3.12+ is installed.
   - Configure database credentials in `/backend/config.php`.
   - Import the provided SQL schema to your MySQL server.

4. **Run the development servers:**
   - **Frontend:**  
     ```bash
     npm start
     ```
   - **Backend:**  
     Use CLI or configure with XAMPP/IIS as per documentation.

---

## 🌐 Project Structure

```
peanech-hotel-react-ui/
├── backend/         # PHP scripts, MVC controllers
├── src/             # React JSX components, Tailwind config
├── public/          # Static assets
├── tailwind.config.js
├── package.json
└── README.md
```

---

## ✨ Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Open a Pull Request!

---

## 📄 License

This project is licensed under the MIT License.

---

## 💬 Contact & Support

For questions, feedback, or reporting issues:  
Open an [issue](https://github.com/sisovin/peanech-hotel-react-ui/issues) or contact the maintainer via GitHub.

---

**Enjoy building the next-gen hotel management system with Peanech-HMS!**
