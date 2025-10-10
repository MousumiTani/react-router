# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features of SelfRise (An react-router based application)

## Home Page:

Contains Banner with buttons, Top Apps section with “Show All” button.

## All Apps Page:

It includes total apps count, Search Apps, and all relevant apps in a card format. Clicking on any apps moves to the "AppDetails" page.

## Details Page:

It shows individual app details. React Rechart is included here to display the user ratings. An "Install" button is included which is disabled after installation.

## My Installation Page

Shows all installed apps in a column format, It contains Uninstall functionality and Toast alert.

## Header & Footer

Navigation with active link highlight. "Contribute" button linking to GitHub. The logo and app name section always navigates to Home Page.

The Footer design is simple with a gradient colored background. An "ArrowUp" symbol is included with the help of AI so that users can easily move to top while scrolling.

## Technologies Used:

React.js, React Router, Tailwind CSS, DaisyUI, Recharts, LocalStorage, React Toastify.
