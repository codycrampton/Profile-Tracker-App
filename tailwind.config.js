/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

// tailwind.config.js
module.exports = {
    content: ['./pages/**/*.{js,jsx}','./components/**/*.{js,jsx}'],
    theme: { extend: {} },
    plugins: []
  };