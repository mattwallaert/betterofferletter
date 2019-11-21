import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// import overview2 from './formtext/overview2.js'

export class Overview2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        // const { values, handleChange } = this.props;
        // const overview2Text = overview2;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Overview cont." />

                    <h1>First up, let’s determine the components of your offer.</h1>
                        {/* Checkboxes add slides to queue */}
                        <li>(Non optional) Direct Compensation (hourly or salaried wages)</li>
                        <li>Annual Bonus</li>
                        <li>Equity or Stock</li>
                        <li>Benefits</li>
                        <li>Relocation/Onboarding Payment</li>
                    
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Overview2