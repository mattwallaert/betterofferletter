import React, { Component } from 'react';

// import AppBar from 'material-ui/AppBar'
import TextField from '@material-ui/core/TextField'
// import {List, ListItem} from 'material-ui/List'
import Button from '@material-ui/core/Button'; // v1.x
// import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Line5 from '../images/lines/Line5.png'


export class Benefits extends Component {


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }




    otherBenefitsMap = () => {
        return (
            this.props.values.otherBenefits.map((item, key) =>
                <FormControlLabel
                    key={key}
                    control={
                        <Checkbox
                            checked={true}
                            onChange={this.handleOtherBenefitsCheck}
                            color="primary"
                        />
                    } label={`${item}`}
                />
            )
        )
    }



    handleSaveButtonChange = () => {
        // this.props.values.other_benefit
    }





    render() {
        const { values, handleBenefitsCheck, classes, handleAddOtherBenefits, handleChange } = this.props
        const myStyle = {
            container: {
                background: "#fdce16",
            },
            box: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // width:"100%"

            },
            h2Container: {
                display: "flex",
                alignContent: "flex-start",
                justifyContent: "center"
            },
            h2Box: {
                // width: "530px",
                marginBottom: 0
            }
        }
        return (

            <div className='ov1' style={myStyle.container}>
                <div className="ov1-SubCategorySingle" style={myStyle.box}>
                    <div className="h2Container" style={myStyle.h2Container}>
                        <h2 className="h2Box" style={myStyle.h2Box}>BENEFITS</h2>
                    </div>

                    <img src={Line5} alt="Line 5" />

                    <div
                        style={{ width: '56%' }}
                    >


                        <p>Now for benefits.  While the full list of benefits may be too long to include in an offer letter,
                    it is important to make sure your new hire has a general idea of what is available.</p>
                        <p>
                            Check all that apply.
                    </p>
                    </div>

                    {/* <p><input type="checkbox" name="health-insurance" /> Health Insurance</p> */}

                    <FormGroup
                        className={classes.root}
                        style={{ fontFamily: 'gilroy-medium' }}
                    >
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
                        {
                            this.otherBenefitsMap()
                        }

                    </FormGroup>
                    <div
                    >
                        <TextField
                            hintText="Other Benefit"
                            label="Other Benefit"
                            onChange={handleChange('other_benefit')}
                            defaultValue={values.other_benefit}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={handleAddOtherBenefits}
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                            Save
                    </Button>
                    </div>

                    <br />
                    <div>
                        <Button
                            style={{ right: "5%" }}
                            variant="contained"
                            color="secondary"
                            className={styles.button}
                            onClick={this.back}
                        > Back
                    </Button>
                        <Button
                            style={{ left: "5%" }}
                            variant="contained"
                            color="primary"
                            className={styles.button}
                            onClick={this.continue}
                        > Continue
                    </Button>
                    </div>
                </div>
            </div>

        )
    }
}

const styles = theme => ({
    button: {
        '& > *': {
            margin: theme.spacing(.1),
        },
    },

    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
        fontFamily: 'gilroy-medium',
        width: '47%'

    }
})

export default withStyles(styles)(Benefits)