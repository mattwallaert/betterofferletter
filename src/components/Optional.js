import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
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
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Optional" />

                    <h1>Optional</h1>

                    <h4>Finally, a page of optional information.</h4>
                    <h4>Anything you don’t complete will be left as a variable in the letter text.</h4>
                    <h4>As a reminder, no data is collected in this tool and all processing is done on your browser and not sent back to a server.</h4>

                    <h4>What is the date of the offer?</h4>

                    <TextField 
                        hintText="Offer Date"
                        floatingLabelText="Offer Date"
                        onChange={handleChange('offer_date')}
                        defaultValue={values.offer_date}
                    />
                    
                    <h4>What is the first name of the candidate?</h4>
                    
                    <TextField 
                        hintText="Candidate Name"
                        floatingLabelText="Candidate Name"
                        onChange={handleChange('nhire_first_name')}
                        defaultValue={values.nhire_first_name}
                    />
                    
                    <h4>What would be the title of the candidate?</h4>
                    
                    <TextField 
                        hintText="Candidate Title"
                        floatingLabelText="Candidate Title"
                        onChange={handleChange('nhire_title')}
                        defaultValue={values.nhire_title}
                    />
                    
                    <h4>What is the name of the company?</h4>

                    <TextField 
                        hintText="Company Name"
                        floatingLabelText="Company Name"
                        onChange={handleChange('co_name')}
                        defaultValue={values.co_name}
                    />
                    
                    <h4>What is the hiring manager’s first name?</h4>

                    
                    <TextField 
                        hintText="Hiring Manager's First Name"
                        floatingLabelText="Hiring Manager's First Name"
                        onChange={handleChange('hman_first_name')}
                        defaultValue={values.hman_first_name}
                    />
                    
                    <h4>What is the hiring manager’s phone number?</h4>

                    <TextField 
                        hintText="Hiring Manager's Phone Number"
                        floatingLabelText="Hiring Manager's Phone Number"
                        onChange={handleChange('hman_phone')}
                        defaultValue={values.hman_phone}
                    />
                    
                    
                    <h4>What is the hiring manager’s email address?</h4>
              
                    <TextField 
                        hintText="Hiring Manager's Email"
                        floatingLabelText="Hiring Manager's Email"
                        onChange={handleChange('hman_email')}
                        defaultValue={values.hman_email}
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

export default Optional