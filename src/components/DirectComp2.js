import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
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
        const { values, handleChange } = this.props;
        // const directComp2Text = direct_comp2;
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


                            <h2>IN ORDER TO CREATE A FAIR PROCESS</h2>

                            <p>Avoid biasing the hiring manager. You need to name someone that the candidate can submit additional information to
                            if they believe the benchmark or experience assessment are incorrect.</p>
                            <p>This could be someone in HR, another hiring manager, or the hiring manager’s manager (sometimes called a “skip level”).</p>
                            <br />
                            <p>What is the first and last name of the person to whom the candidate can submit additional information? (text validation)</p>

                            <TextField
                                hintText="Compensation Manager Full Name"
                                floatingLabelText="Compensation Manager Full Name"
                                onChange={handleChange('comp_person_name')}
                                defaultValue={values.comp_person_name}
                            />

                            <p>What is their email? (email validation)</p>

                            <TextField
                                hintText="Compensation Manager Email"
                                floatingLabelText="Compensation Manager Email"
                                onChange={handleChange('comp_person_email')}
                                defaultValue={values.comp_person_email}
                            />

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

export default DirectComp2