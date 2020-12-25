import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { UserForm } from './components/UserForm';
// import purple from 'material-ui/colors/red'
// import green from 'material-ui/colors/green' 
import grey from 'material-ui/colors/grey'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[50],
    },
  },
});





class App extends React.Component {

  render() {

    return (
      <div className="App" >
        <MuiThemeProvider theme={theme}>
          <UserForm />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
