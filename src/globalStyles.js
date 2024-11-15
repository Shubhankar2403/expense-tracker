import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset some default styles for consistency */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Base font settings */
  html {
    font-size: 16px; /* Sets the base font size for better scalability */
    scroll-behavior: smooth; /* Enables smooth scrolling */
    -webkit-font-smoothing: antialiased; /* Improves text rendering */
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Poppins', sans-serif; /* Consistent font across the app */
    line-height: 1.6; /* Improved readability */
    color: #333; /* Neutral text color */
    background-color: #f9f9f9; /* Light background for better contrast */
    overflow-x: hidden; /* Prevents horizontal scrolling issues */
  }

  /* Links */
  a {
    text-decoration: none;
    color: inherit; /* Use the same color as the text by default */
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: #007BFF; /* Accent color for links on hover */
  }

  /* Buttons */
  button {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, transform 0.1s ease;
  }

  button:hover {
    transform: translateY(-1px);
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block; /* Prevents extra space below images */
  }

  /* Input fields */
  input, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.2s ease;
  }

  input:focus, textarea:focus {
    border-color: #007BFF; /* Accent color for focused input */
  }

  /* Utility classes */
  .hidden {
    display: none !important;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export default GlobalStyles;
