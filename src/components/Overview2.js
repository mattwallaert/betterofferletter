import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// Checkboxes
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

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
        const { values, handleSlideCheck, classes } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                <div className='ov1' style = {{background: "#fdce16"}}>
                    <h2>First up, let’s determine the components of your offer.</h2>
                    {/* Checkboxes add slides to queue */}
                    <li>(Non optional) Direct Compensation (hourly or salaried wages)</li>


                    <FormGroup className={classes.root}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={values.annual_bonus_slide}
                                    onChange={handleSlideCheck('annual_bonus_slide')}
                                    // value='/annual_bonus'
                                    color="primary"
                                />
                            } label="Annual Bonus"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={values.equity_or_stock_slide}
                                    onChange={handleSlideCheck('equity_or_stock_slide')}
                                    // value='/equity_or_stock'
                                    color="primary"
                                />
                            } label="Equity or Stock"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={values.benefits_slide}
                                    onChange={handleSlideCheck('benefits_slide')}
                                    // value='/benefits'
                                    color="primary"
                                />
                            } label="Benefits"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={values.onboarding_pay_slide}
                                    onChange={handleSlideCheck('onboarding_pay_slide')}
                                    // value='/onboarding_pay'
                                    color="primary"
                                />
                            } label="Relocation/Onboarding Payment"
                        />
                    </FormGroup >

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
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    },

    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center"
        
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
}

export default withStyles(styles)(Overview2)