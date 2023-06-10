import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import { Component } from 'react';
import { Mapping } from './components/Mapping';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <Mapping/>
        </SnackbarProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
