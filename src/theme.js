import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#fff',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#fff'
        },
        cover:{
          main: '#fff',
          bg1: "#030e23",
          bg2: "#042b73",
          bg3: "#031b4b",
          bg4: "#000717",
          light: '#1a2a3c',
          overplay1:'#333',
        },
        text:{
          primary: '#fff'
        }
      },
      
    },
    dark: {
      palette: {
        primary: {
          main: '#fff',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: '#fff'
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1080,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  // ...other properties
})

export default theme
