# TypeScript Todo List Application

A clean, modern, and responsive Todo List application built with TypeScript and Snowpack. This application allows users to manage their tasks with a beautiful user interface and persistent storage.

## Features

- ✨ Clean and modern UI
- 📱 Responsive design
- ✅ Create new tasks
- ❌ Remove tasks
- ☑️ Mark tasks as complete/incomplete
- 💾 Persistent storage using localStorage
- 🎨 Smooth animations and transitions
- 🌈 Modern color scheme

## Technologies Used

- TypeScript
- Snowpack (Build tool)
- HTML5
- CSS3
- Local Storage API
- UUID for unique task IDs

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nimasaghi-dev/TODO-List---TS.git
cd TODO-List---TS
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:8080`.

## Usage

- **Adding a Task**: Type your task in the input field and click "Add Task" or press Enter
- **Completing a Task**: Click the checkbox next to the task
- **Removing a Task**: Click the "Remove" button next to the task
- **Task Persistence**: Tasks are automatically saved to localStorage and will persist between page reloads

## Project Structure

```
todo-list-ts/
├── public/
│   └── index.html
├── src/
│   ├── index.ts
│   └── styles.css
├── types/
│   └── static.d.ts
├── package.json
├── tsconfig.json
└── snowpack.config.mjs
```

## Development

The project uses TypeScript for type safety and better developer experience. The main components are:

- `index.ts`: Contains the main application logic
- `styles.css`: Contains all styling with CSS variables for easy theming
- `index.html`: The main HTML structure

## Features in Detail

### Task Management
- Each task has a unique ID (UUID)
- Tasks are stored with the following properties:
  - id: string
  - title: string
  - completed: boolean
  - createdAt: Date

### Storage
- Uses browser's localStorage for persistent data storage
- Automatically saves changes when:
  - Adding new tasks
  - Completing tasks
  - Removing tasks

### UI/UX Features
- Hover effects on tasks
- Smooth transitions
- Clear visual feedback for task status
- Responsive design that works on all screen sizes

## Acknowledgments

- Built with TypeScript and Snowpack
- Uses UUID for unique task identification
- Modern CSS features for styling
