import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
// import Checkbox from '@material-ui/core/Checkbox';
//Switch
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


export class AnnualBonus extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange, handleCheck, classes } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Annual Bonus" />

                    <h1>Annual Bonus</h1>

                    <h4> Now for annual bonus.  What is the benchmark’s maximum potential yearly bonus? </h4>

                    <TextField
                        hintText="Maximum Potential Yearly Bonus"
                        floatingLabelText="Yearly Bonus"
                        onChange={handleChange('bench_bonus')}
                        defaultValue={values.bench_bonus}
                    />

                    <h4> Is it based on company performance or the potential hires performance? </h4>

                    {/* <TextField 
                        hintText="Potential Hires Performance"
                        floatingLabelText="Hires Performance"
                        onChange={handleChange('perform_bonus')}
                        defaultValue={values.perform_bonus}
                    /> */}

                    {/* <Checkbox
                            checked={values.perform_bonus}
                            onChange={handleCheck('perform_bonus')}
                            // value= 'perform_bonus'
                            color="primary"
                            label="Perform Bonus"
                        /> */}

                    <Typography component="div" >
                        <Grid component="label" container className={classes.root}>
                            <Grid item>Company Performance</Grid>
                            <Grid item>
                                <Switch
                                    checked={values.perform_bonus}
                                    onChange={handleCheck('perform_bonus')}
                                    color="primary"
                                    
                                //   value="checkedC"
                                />
                            </Grid>
                            <Grid item>New Hire Performance</Grid>
                        </Grid>
                    </Typography>


                    <h4>In order to earn the maximum bonus, the company needs to ___
                        (be specific: increase revenue by 50%, increase the stock value by 5%, launch the next version of our product).</h4>

                    <TextField
                        hintText="Maximum Bonus Company Needs"
                        floatingLabelText="Maximum Bonus Company"
                        onChange={handleChange('comp_max_bonus')}
                        defaultValue={values.comp_max_bonus}
                    />

                    <h4>In order to earn the maximum bonus, the new hire needs to ___
                        (be specific: close three new deals per quarter, launch the next version of our product, recruit an engineer every month).</h4>

                    <TextField
                        hintText="Maximum Bonus New Hire Needs"
                        floatingLabelText="Maximum Bonus New Hire"
                        onChange={handleChange('nhire_max_bonus')}
                        defaultValue={values.nhire_max_bonus}
                    />

                    <br />

                    ((Display Benchmark Mean Bonus and Your Offer))

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
        justifyContent: "center",
        spacing: 1
    }
}

export default withStyles(styles)(AnnualBonus)