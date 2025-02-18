# Design Editor

A simple design editor built using **Next.js**, **React**, and **TypeScript**. It allows users to create, modify, and save basic shapes (rectangles and circles) on a canvas. The editor supports drag-and-drop functionality, resizing shapes, undo/redo actions, and exporting the design as a PNG image.

## Features

- **Add Rectangle**: Adds a draggable and resizable rectangle to the canvas.
- **Add Circle**: Adds a draggable and resizable circle to the canvas.
- **Undo/Redo**: Undo and redo actions to revert or reapply changes.
- **Save**: Save the current design to localStorage.
- **Load**: Load the saved design from localStorage.
- **Export as PNG**: Export the design as a PNG image.
- **Remove All Shapes**: Clear the canvas of all shapes.
- **Responsive**: The editor is responsive and adapts to different screen sizes.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly-typed superset of JavaScript.
- **html2canvas**: A library to render HTML to a canvas, allowing image export.
- **React-RND**: A React component for resizable and draggable elements.
- **React Icons**: A library for including icons in the project.

## Folder Structure

```
coolcard/
│── .next/                  # Build artifacts (generated)
│── app/                    # Next.js app directory
│   │── components/          # Reusable UI components
│   │   ├── DesignEditor.tsx # Main design editor component
│   │── favicon.ico          # App favicon
│   │── globals.css          # Global styles
│   │── layout.tsx           # Layout component
│   │── page.tsx             # Main entry page
│── node_modules/            # Installed dependencies
│── public/                  # Static assets
│── .gitignore               # Git ignored files
│── eslint.config.mjs        # ESLint configuration
│── next-env.d.ts            # TypeScript environment types
│── next.config.ts           # Next.js configuration
│── package.json             # Project metadata & dependencies
│── package-lock.json        # Lock file for package versions
│── postcss.config.mjs       # PostCSS configuration
│── README.md                # Project documentation
│── tailwind.config.ts       # Tailwind CSS configuration
│── tsconfig.json            # TypeScript configuration
```

---

## Prerequisites

Ensure you have the following installed before running this project:

- **Node.js** (>= 16.x) - Download from [nodejs.org](https://nodejs.org/)
- **npm** (>= 8.x) or **yarn** (>= 1.22.x) - Comes with Node.js, or install Yarn via:

  ```bash
  npm install -g yarn
  ```

---

## Installation & Setup

### 1. Clone the Repository

Use the following command to clone the project:

```bash
git clone [https://github.com/Ajhar17103/cool-cards.git]
```

Navigate into the project directory:

```bash
cd coolcard
```

### 2. Install Dependencies

Using **npm**:

```bash
npm install
```

Or using **yarn**:

```bash
yarn install
```

---

## Running the Development Server

To start the development server, use:

- **npm**:

  ```bash
  npm run dev
  ```

- **yarn**:

  ```bash
  yarn dev
  ```

By default, the application will be available at:  
📌 [http://localhost:3000](http://localhost:3000)

---

## Building for Production

To create an optimized production build, run:

```bash
npm run build
```

Then, start the production server:

```bash
npm start
```

---

## Project Configuration

- **ESLint**: Linting is configured in `eslint.config.mjs`
- **Tailwind CSS**: Styles are managed via `tailwind.config.ts` and `globals.css`
- **PostCSS**: Configured in `postcss.config.mjs`
- **TypeScript**: Configurations are in `tsconfig.json`
- **Next.js Settings**: Managed via `next.config.ts`

---
