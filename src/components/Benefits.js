import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class Benefits extends Component {
    

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleBenefitsCheck, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Benefits" />

                    <h1>Benefits</h1>

                    <h4>Now for benefits.  While the full list of benefits may be too long to include in an offer letter,
                    it is important to make sure your new hire has a general idea of what is available.</h4>
                    <h4>
                        Check all that apply.
                    </h4>
    
                    {/* <p><input type="checkbox" name="health-insurance" /> Health Insurance</p> */}

                    <FormGroup row>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.health_insurance}
                                onChange={handleBenefitsCheck('health_insurance')}
                                // value= 'health_insurance'
                                color="primary"
                            />
                            } label="Health Insurance"
                        />
                         <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.dental_insurance}
                                onChange={handleBenefitsCheck('dental_insurance')}
                                // value= 'dental_insurance'
                                color="primary"
                            />
                            } label="Dental Insurance"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.vision_insurance}
                                onChange={handleBenefitsCheck('vision_insurance')}
                                // value= 'vision_insurance'
                                color="primary"
                            />
                            } label="Vision Insurance"
                        />
                         <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.pre_tax_spending}
                                onChange={handleBenefitsCheck('pre_tax_spending')}
                                // value= 'pre_tax_spending'
                                color="primary"
                            />
                            } label="Pre-Tax Spending Accounts"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.retirement_matching}
                                onChange={handleBenefitsCheck('retirement_matching')}
                                // value= 'retirement_matching'
                                color="primary"
                            />
                            } label="Retirement Matching"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.tuition_reimbursement}
                                onChange={handleBenefitsCheck('tuition_reimbursement')}
                                // value= 'tuition_reimbursement'
                                color="primary"
                            />
                            } label="Tuition Reimbursement"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.childcare}
                                onChange={handleBenefitsCheck('childcare')}
                                // value= 'childcare'
                                color="primary"
                            />
                            } label="Childcare Benefits"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.wellness}
                                onChange={handleBenefitsCheck('wellness')}
                                // value= 'wellness'
                                color="primary"
                            />
                            } label="Wellness Benefits"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.lunch}
                                onChange={handleBenefitsCheck('lunch')}
                                // value= 'lunch'
                                color="primary"
                            />
                            } label="Free Lunch"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.student_loan_assist}
                                onChange={handleBenefitsCheck('student_loan_assist')}
                                // value= 'student_loan_assist'
                                color="primary"
                            />
                            } label="Student Loan Assistance"
                        />
                    </FormGroup>
                    <TextField 
                            hintText="Other Benefit"
                            floatingLabelText="Other Benefit"
                            onChange={handleChange('other_benefit')}
                            defaultValue={values.other_benefit}
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

export default Benefits