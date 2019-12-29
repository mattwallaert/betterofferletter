<<<<<<< HEAD
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

// Buttons
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'


export class DirectComp3 extends Component {
    state={
        salary: false,
        hourly: false,
    }

    handleSalaryClick = e => {
    e.preventDefault();
        this.setState({
            salary: !this.state.salary,
            hourly: false
        })
       
    }

    handleHourlyClick = e => {
        e.preventDefault();
            this.setState({
                hourly: !this.state.hourly,
                salary: false
            })    
      }
      
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
                    <AppBar title="Direct Compensation cont." />
                    <h1>Direct Compensation cont.</h1>
                        <h4>Is this position salaried or hourly?</h4><br/>

                        <ButtonGroup
                            variant="contained"
                            color="inherit"
                            aria-label="full-width contained primary button group"
                            >
                                <Button 
                                onClick={this.handleSalaryClick}
                                >Salary</Button>
                                
                                
                                
                                <Button onClick={this.handleHourlyClick}>Hourly</Button>       
                        </ButtonGroup><br/>

                        {/* Conditional Render */}
                        {/* Salary */}
                        { this.state.salary && 
                            <div>
                                <br/>
                                <li>1. Salary: Great.  What is the benchmark salary?</li>
                                        
                                <TextField 
                                    type="number"
                                    hintText="Enter The Benchmark Salary"
                                    floatingLabelText="Benchmark Salary"
                                    onChange={handleChange('bench_salary')}
                                    value={values.bench_salary}
                                    // defaultValue=''
                                />

                                {/* <h4>Result = (Display Benchmark and Your Offer)</h4> */}
                        <h4>Benchmark = {values.bench_salary}, Your Offer = {values.offer_salary}</h4>

                                Note: benchmark value and adjusted value based on slider(offer_salary)
                            </div> }

                        {/* Hourly */}
                        { this.state.hourly && 
                            <div>
                                <li>2. Hourly: Great.  How much per hour?</li>
                            
                                <TextField 
                                    type="number"
                                    id="hour_pay"
                                    hintText="Rate per Hour?"
                                    floatingLabelText="Rate per Hour"
                                    onChange={handleChange('hour_pay')}
                                    value={values.hour_pay}
                                    // defaultValue=''
                                />
                                <li>2a. How many hours per week?</li>
        
                                <TextField 
                                    type="number"
                                    id="hour_week"
                                    hintText="Hours per Week?"
                                    floatingLabelText="Hours per Week"
                                    onChange={handleChange('hour_week')}
                                    value={values.hour_week}
                                    // defaultValue=''
                                />
        
                                <h4>Result = (Display Benchmark and Your Offer)</h4>
                               
                        <h4>Benchmark = { values.bench_hourly }, Your Offer = { values.offer_hourly }</h4>
                            </div> }

                        {/* /Conditional Render */}

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





=======
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
// import direct_comp3 from './formtext/direct_comp3.js'

export class DirectComp3 extends Component {
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
        // const directComp3Text = direct_comp3;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Direct Compensation cont." />

                        <h4>
                            Is this position salaried or hourly?
                        </h4>

                        <li>1.//Salary: Great.  What is the benchmark salary?</li>
                        
                        <li>
                            1a.(Display Benchmark and Your Offer)
                        </li>
                        
                        <li>
                            2.//Hourly: Great.  How much per hour?
                        </li>
                        
                        <li>
                            2a. How many hours per week?
                        </li>

                        <h4>
                            Result = (Display Benchmark and Your Offer)
                        </h4>
                        
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

>>>>>>> 7c541481d9173b1c4301079d44964d034bb615af
export default DirectComp3