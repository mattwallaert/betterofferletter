import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
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
        const myStyle = {
            container: {
                background: "#fdce16",
                width: "100%",
                height: "100%"
            },
            box: {
                //    background: "blue"

            },
        }
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className='ov1' style={myStyle.container}>
                        <div className="ov1-SubCategory" style={myStyle.box}>

                            <h2>Optional</h2>

                            <p>Finally, a page of optional information.</p>
                            <p>Anything you don’t complete will be left as a variable in the letter text.</p>
                            <p>As a reminder, no data is collected in this tool and all processing is done on your browser and not sent back to a server.</p>

                            <p>What is the date of the offer?</p>

                            <TextField
                                hintText="Offer Date"
                                floatingLabelText="Offer Date"
                                onChange={handleChange('offer_date')}
                                defaultValue={values.offer_date}
                            />

                            <p>What is the first name of the candidate?</p>

                            <TextField
                                hintText="Candidate Name"
                                floatingLabelText="Candidate Name"
                                onChange={handleChange('nhire_first_name')}
                                defaultValue={values.nhire_first_name}
                            />

                            {/* <p>What would be the title of the candidate?</p>
                    
                    <TextField 
                        hintText="Candidate Title"
                        floatingLabelText="Candidate Title"
                        onChange={handleChange('nhire_title')}
                        defaultValue={values.nhire_title}
                    />
                    
                    <p>What is the name of the company?</p>

                    <TextField 
                        hintText="Company Name"
                        floatingLabelText="Company Name"
                        onChange={handleChange('co_name')}
                        defaultValue={values.co_name}
                    />
                    
                    <p>What is the hiring manager’s first name?</p>

                    
                    <TextField 
                        hintText="Hiring Manager's First Name"
                        floatingLabelText="Hiring Manager's First Name"
                        onChange={handleChange('hman_first_name')}
                        defaultValue={values.hman_first_name}
                    />
                    
                    <p>What is the hiring manager’s phone number?</p>

                    <TextField 
                        hintText="Hiring Manager's Phone Number"
                        floatingLabelText="Hiring Manager's Phone Number"
                        onChange={handleChange('hman_phone')}
                        defaultValue={values.hman_phone}
                    />
                    
                    
                    <p>What is the hiring manager’s email address?</p>
              
                    <TextField 
                        hintText="Hiring Manager's Email"
                        floatingLabelText="Hiring Manager's Email"
                        onChange={handleChange('hman_email')}
                        defaultValue={values.hman_email}
                    /> */}

                            <br />
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
                        </div>
                    </div>
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