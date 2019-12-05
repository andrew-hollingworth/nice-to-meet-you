import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';

const App = () => {
  // THEMING
  // https://codesandbox.io/s/wz9r8330p7?from-embed
  const theme = {
    palette: {
      primary: {
        main: '#0e4686',
      },
    },
  };

  const muiTheme = createMuiTheme(theme);

  return (
    <ThemeProvider theme={muiTheme}>
      <Header />
      <Body />
    </ThemeProvider>
  );
}

export default App;
