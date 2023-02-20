import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { Component } from 'react';
import Mapping from './components/Mapping';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Mapping/>
      </MuiThemeProvider>
    );
  }
}

export default App;
