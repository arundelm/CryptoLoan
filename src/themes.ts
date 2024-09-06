import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 300,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 300,
      },
      body1: {
        fontSize: '1rem',
      },
      // Add other typography customizations here
    },

  });
  
  export default theme;