# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
Perfect 👌 Below is a clean, professional **README.md** for your current React Playground Builder application based on everything we’ve built so far.

You can copy this directly into your `README.md`.

---

# 🧩 React Playground Builder

A dynamic drag-and-drop React UI builder that allows users to:

* Drag components from a sidebar
* Drop them into a canvas layout
* Organize components in rows using MUI `Stack`
* Select components
* Edit component properties dynamically
* Adjust spacing per row

---

## 🚀 Features Implemented

### ✅ Layout Structure

* Header (AppBar)
* Sidebar (Component Palette)
* Canvas (Drop Area)
* Property Panel (Right Side Editor)

### ✅ Drag and Drop

* Implemented using `@dnd-kit/core`
* Drag components from sidebar
* Drop onto canvas to create rows

### ✅ Row Management

* Each drop creates a new row
* Uses MUI `Stack`
* Adjustable spacing per row using slider

### ✅ Dynamic Component Rendering

Each dropped component is stored as a structured object:

```js
{
  id: 12345,
  type: "Button",
  props: {
    label: "Button",
    variant: "contained"
  }
}
```

### ✅ Property Panel

* Click any component to select it
* Edit component props (e.g., Button label, TextField name)
* Updates live on the canvas

### ✅ Proper React State Architecture

* `rows` managed in `App.js`
* `selectedComponentId` stored instead of full object
* Selected component derived from rows
* Immutable state updates

---

## 🏗 Project Structure

```
src/
 ├── App.js
 ├── Components/
 │     ├── Header/
 │     │     └── index.js
 │     ├── Sidebar/
 │     │     └── index.js
 │     ├── Canvas/
 │     │     └── index.js
 │     ├── RowStack/
 │     │     └── index.js
 │     └── PropertyPanel/
 │           └── index.js
 ├── Utils/
 │     └── ComponentConfig.js
```

---

## 🛠 Technologies Used

* React
* Material UI (MUI)
* @dnd-kit/core (Drag & Drop)
* Functional Components
* React Hooks (useState)

---

## 📦 Installation

```bash
git clone <your-repo>
cd playground-app
npm install
npm start
```

App runs on:

```
http://localhost:3000
```

---

## 🧠 Architecture Overview

### 1️⃣ Component Factory Pattern

All components are generated using a config factory:

```js
createComponentConfig(type)
```

This ensures:

* Structured component data
* Dynamic props
* Easy extension

---

### 2️⃣ State Model

Rows Structure:

```js
[
  {
    id: 1,
    spacing: 2,
    components: [
      {
        id: 101,
        type: "Button",
        props: { label: "Submit" }
      }
    ]
  }
]
```

---

### 3️⃣ Selection Model

Instead of storing full object:

```js
selectedComponentId
```

The selected component is derived dynamically from `rows`.

This prevents stale state issues.

---

## 🎯 Currently Supported Components

* Button
* TextField
* Card

Each component has editable props via Property Panel.

---

## 🔥 Future Enhancements (Planned)

* Multiple components per row
* Drag reorder inside row
* Delete component
* Delete row
* Responsive breakpoints
* JSON export/import
* Save layout to backend
* Undo/Redo
* Grid system instead of stack
* Nested layouts
* Form validation engine

---

## 📸 UI Layout

```
-------------------------------------------------
| Header                                        |
-------------------------------------------------
| Sidebar | Canvas (Rows) | Property Panel     |
-------------------------------------------------
```

---

## 🧩 How It Works

1. Drag component from sidebar
2. Drop onto canvas
3. Click component to select
4. Edit properties in property panel
5. Changes update instantly

---

## 💡 Purpose

This project demonstrates:

* Advanced React state management
* Dynamic component rendering
* Builder-style architecture
* Low-code UI design patterns
* Clean immutable updates

---

## 🧑‍💻 Author

Built as part of a dynamic React UI builder playground project.
