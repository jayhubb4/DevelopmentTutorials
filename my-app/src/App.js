import { createMuiTheme, ThemeProvider } from '@mui/styled-engine-sc';
import CustomBtn from './components/CustomBtn';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "2e1667",
    },
    secondary: {
      main: "#c7d8ed"
    },
  },
  typography: {
    fontFamil: [
      'Roboto'
    ],
    h4: { 
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
  },
  h5: {
    fontWeight: 100,
    lineHeight: '2rem',
  },
},
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CustomBtn/>
        
      </ThemeProvider>
    </div>
  );
}

export default App;
