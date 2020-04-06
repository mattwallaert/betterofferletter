import React from 'react';
import './App.css';
import { UserForm } from './components/UserForm';




class App extends React.Component {

  state = {
    color: "Purple"
  }

  onChangeHandler = e => {

    if (this.state.color === "Purple") {

      this.setState({
        color : "White"
      })
    }
    if (this.state.color === "White") {

      this.setState({
        color : "Purple"
      })
    }
  }






  render() {
    // const styleObj = {
    //   background: this.state.color
    // }
    return (
      <div
        className="App"
        // style={ styleObj }
      >
        <UserForm />
        {/* <footer
      alignText = ''
      fontSize = {12}>
      <p>a work worth doing project by Patrick "Reese" McCombs and Matt Wallaert. </p>

<p>OfferLetter.com is a start but pay equity is a much larger topic.  See SalaryOrEquity.com 
and GetRaised.com for other tools that employees use to to help close the wage gap. </p>

      </footer> */}
      </div>
    );
  }
}

export default App;
