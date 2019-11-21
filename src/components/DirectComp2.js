import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
// import direct_comp2 from './formtext/direct_comp2.js'

export class DirectComp2 extends Component {
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
        // const directComp2Text = direct_comp2;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Direct Compensation cont." />
                        <h4>In order to create a fair process and avoid biasing the hiring manager, you need to name someone that the candidate can submit additional information to 
                            if they believe the benchmark or experience assessment are incorrect.</h4>  
                        <h4>This could be someone in HR, another hiring manager, or the hiring manager’s manager (sometimes called a “skip level”).</h4>
                        <h4>What is the first and last name of the person to whom the candidate can submit additional information? (text validation)</h4>
                        <h4>What is their email? (email validation)</h4>
                    
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

export default DirectComp2