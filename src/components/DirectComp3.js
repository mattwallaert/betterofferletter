import React, { Component } from 'react';
// import AppBar from 'material-ui/AppBar'
import TextField from '@material-ui/core/TextField'

// Buttons
import Button from '@material-ui/core/Button'
import Line3 from '../images/lines/Line3.png'
// import ButtonGroup from '@material-ui/core/ButtonGroup'


export class DirectComp3 extends Component {
    state = {
        salary: false,
        hourly: false,
        // clickColor: ""
    }

    handleHoverOn = e => {
        e.preventDefault();
        e.target.style.color = "#fdce16";
        e.target.style.cursor = 'pointer';
    }
    handleHoverOff = e => {
        e.preventDefault();
        e.target.style.color = 'black';
    }

    handleSalaryClick = e => {
        e.preventDefault();
        this.setState({
            salary: !this.state.salary,
            hourly: false,

        })
        // if (this.state.salary===true) {
        //     this.setState({
        //         clickColor: "#fdce16"
        //     })
        // } else {
        //     this.setState({
        //         clickColor: "black"
        //     })
        // }

    }

    handleHourlyClick = e => {
        e.preventDefault();
        this.setState({
            hourly: !this.state.hourly,
            salary: false
        })
        e.target.style.color = "#fdce16"
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
            h2Container: {
                display: "flex",
                alignContent: "flex-start",
                justifyContent: "center"
            },
            h2Box: {
                width: "530px",
                marginBottom: 0
            },
            boxContainer: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            },
            boxContainerLink: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }
        }

        return (

            <div className='ov1' style={myStyle.container}>
                <div className="ov1-SubCategorySingle" style={myStyle.box}>
                    <div className="h2Container" style={myStyle.h2Container}>
                        <h2 className="h2Box" style={myStyle.h2Box}>IS THIS POSITION SALARIED OR HOURLY?</h2>
                    </div>

                    <img src={Line3} alt="Line 3" />


                    <div style={myStyle.boxContainerLink}>
                        <p

                            style={{
                                fontWeight: "bold",
                                paddingRight: "1%",
                                // color: this.state.clickColor
                            }}
                            onMouseOver={this.handleHoverOn}
                            onMouseLeave={this.handleHoverOff}
                            onClick={this.handleSalaryClick}
                        >
                            SALARY</p>


                        <br />

                        <p
                            style={{ fontWeight: "bold" }}
                            onMouseOver={this.handleHoverOn}
                            onMouseLeave={this.handleHoverOff}
                            onClick={this.handleHourlyClick}
                        >
                            HOURLY</p>

                    </div>

                    {/* Conditional Render */}
                    {/* Salary */}
                    {this.state.salary &&
                        <div>
                            <br />
                            <p>1. Salary: Great.  What is the benchmark salary?</p>

                            <TextField
                                type="number"
                                // id="Enter The Benchmark Salary"
                                label="Benchmark Salary"
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
                                // hintText="Rate per Hour?"
                                label="Rate per Hour"
                                onChange={handleChange('hour_pay')}
                                value={values.hour_pay}
                            // defaultValue=''
                            />
                            <p>2a. How many hours per month?</p>

                            <TextField
                                type="number"
                                id="hoursPerMo"
                                // hintText="Hours per Month?"
                                label="Hours per Month"
                                onChange={handleChange('hoursPerMo')}
                                value={values.hoursPerMo}
                            // defaultValue=''
                            />

                            {/* <p>Result = (Display Benchmark and Your Offer)</p> */}

                            <p>Benchmark = {values.bench_hourly}, Your Offer = {values.offer_hourly}</p>
                        </div>}

                    {/* /Conditional Render */}

                    <br />
                    <Button
                        variant="contained"
                        color="secondary"
                        className={styles.button}
                        onClick={this.back}
                    > Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className={styles.button}
                        onClick={this.continue}
                    > Continue
                    </Button>
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
})





export default DirectComp3