import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { UserForm } from './components/UserForm';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // main: purple[500],
//     },
//     secondary: {
//       // main: green[500],
//     },
//   },
// });





class App extends React.Component {

  render() {

    return (
      <div className="App" >
        <MuiThemeProvider>
          <UserForm />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
