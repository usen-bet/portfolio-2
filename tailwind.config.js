/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    width: {
      half: "50%",
      fit: "fit-content",
      btn: '150px',
      full: "100%",
      input: "250px",
      onethird: "75%",
      fuller: "190%"
    },
    height: {
      body: "400px",
      parts: '33px',
      sidebar: "600px",
      full: "100%",
      fit:"fit-content",
      smoke: '50px',
      width: '100vh',
      half: "50%",
      screen: "100vh",
      input: "250px",
      fuller: "190%"
    },
    fontFamily: {
  jostsb: "Jostsb"
    },
    extend: {},
  },
  plugins: [],
}
