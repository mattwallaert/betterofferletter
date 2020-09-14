import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { UserForm } from './components/UserForm';
import purple from 'material-ui/colors/red'
import green from 'material-ui/colors/green' 
// import black from 'material-ui/colors/black' 

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
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
