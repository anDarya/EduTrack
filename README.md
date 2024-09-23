# EduTrack

Welcome to **EduTrack** and is a mini web application designed to record and manage a group of students. This project leverages modern web technologies to provide an efficient and user-friendly experience.

## Features

- **Student Listing**: Browse and manage student records with detailed information.
- **Notifications**:  Implemented snackbar notifications for successful student deletions or activations, as well as error alerts (e.g., incorrect IDNP format).
- **API Requests**:  Utilizes Mirage.js for mocking API requests.
- **Filtering**: Advanced filtering options to search and narrow down student records based on various criteria.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)
- [react](https://react.dev/) (v18)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/anDarya/EduTrack.git
   cd EduTrack
   
2. **Install dependencies:**
     ```bash
    npm install

3. **Running the Project:**
   ```bash
   npm run dev

### Project Structure
```bash
EduTrack/
├── public/             # Static files
├── src/
│   ├── App/            # Main application component
│   ├── Components/      # Reusable components
│   ├── hook/           # Custom hooks
│   ├── Notification/    # Notification handling (snackbar)
│   ├── Redux/          # Redux store and slices
│   ├── Server/         # Mirage.js server setup
│   ├── Utils/          # Utility functions
│   ├── index.css       # Global CSS styles
│   ├── index.js        # Entry point
│   ├── reportWebVitals.js # Web vitals reporting
│   └── setupTests.js   # Testing setup
├── .gitignore          # Git ignore file
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation