import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Optional extends Component {
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
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Optional" />

                    <h4>Finally, a page of optional information.</h4>
                    <h4>Anything you don’t complete will be left as a variable in the letter text.</h4>
                    <h4>As a reminder, no data is collected in this tool and all processing is done on your browser and not sent back to a server.</h4>

                    <h4>What is the date of the offer?</h4>

                    <h4>What is the first name of the candidate?</h4>

                    <h4>What is the name of the company?</h4>

                    <h4>What is the hiring manager’s first name?</h4>

                    <h4>What is the hiring manager’s phone number?</h4>

                    <h4>What is the hiring manager’s email address?</h4>
              
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

export default Optional