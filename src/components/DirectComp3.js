import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

// Buttons
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'


export class DirectComp3 extends Component {
    state = {
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
        const myStyle = {
            container: {
                // background: "#fdce16",
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
                    <div className='ov1'style={myStyle.container}>
                        <div className="ov1-SubCategory" style={myStyle.box}>
                            <h2>Direct Compensation cont.</h2>
                            <p>Is this position salaried or hourly?</p><br />

                            <ButtonGroup
                                variant="contained"
                                color="inherit"
                                aria-label="full-width contained primary button group"
                            >
                                <Button
                                    onClick={this.handleSalaryClick}
                                >Salary</Button>



                                <Button onClick={this.handleHourlyClick}>Hourly</Button>
                            </ButtonGroup><br />

                            {/* Conditional Render */}
                            {/* Salary */}
                            {this.state.salary &&
                                <div>
                                    <br />
                                    <p>1. Salary: Great.  What is the benchmark salary?</p>

                                    <TextField
                                        type="number"
                                        hintText="Enter The Benchmark Salary"
                                        floatingLabelText="Benchmark Salary"
                                        onChange={handleChange('bench_salary')}
                                        value={values.bench_salary}
                                    // defaultValue=''
                                    />

                                    {/* <p>Result = (Display Benchmark and Your Offer)</p> */}
                                    <p>Benchmark = {values.bench_salary}, Your Offer = {values.offer_salary}</p>

                                Note: benchmark value and adjusted value based on slider(offer_salary)
                            </div>}

                            {/* Hourly */}
                            {this.state.hourly &&
                                <div>
                                    <p>2. Hourly: Great.  How much per hour?</p>

                                    <TextField
                                        type="number"
                                        id="hour_pay"
                                        hintText="Rate per Hour?"
                                        floatingLabelText="Rate per Hour"
                                        onChange={handleChange('hour_pay')}
                                        value={values.hour_pay}
                                    // defaultValue=''
                                    />
                                    <p>2a. How many hours per month?</p>

                                    <TextField
                                        type="number"
                                        id="hoursPerMo"
                                        hintText="Hours per Month?"
                                        floatingLabelText="Hours per Month"
                                        onChange={handleChange('hoursPerMo')}
                                        value={values.hoursPerMo}
                                    // defaultValue=''
                                    />

                                    <p>Result = (Display Benchmark and Your Offer)</p>

                                    <p>Benchmark = {values.bench_hourly}, Your Offer = {values.offer_hourly}</p>
                                </div>}

                            {/* /Conditional Render */}

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





export default DirectComp3