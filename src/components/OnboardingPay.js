import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class OnboardingPay extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Relocation/Onboarding Payment" />

                    <h1>Relocation/Onboarding Payment</h1>

                    <h4>Now for onboarding payment.</h4>  
                    
                    <h4>This should not be based on a benchmark but rather on the amount of money needed to help your new hire be initially productive.</h4>
    
                    <h4>How much are you offering to assist with onboarding?</h4>

                    <TextField 
                        hintText="Onboarding Assistance"
                        floatingLabelText="Onboarding Assistance"
                        onChange={handleChange('onboard_assist')}
                        defaultValue={values.onboard_assist}
                        type='number'
                    />
              
                    <br/>
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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

export default OnboardingPay