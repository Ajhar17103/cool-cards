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

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. You can download it from [nodejs.org](https://nodejs.org/).
  
- **npm** or **yarn**: These are package managers that come bundled with Node.js. You can use either npm or yarn to install dependencies.

To verify if you have Node.js and npm installed, run the following commands:

```bash
node -v
npm -v
