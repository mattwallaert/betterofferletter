import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
// import RaisedButton from 'material-ui/RaisedButton'
import Button from '@material-ui/core/Button'; // v1.x
// import Switch from '@material-ui/core/Switch';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// Shapes
import Line5 from '../images/lines/Line5.png'
// import { Link } from 'react-router-dom';


export class AnnualBonus extends Component {
    state = {
        company: false,
        newHire: false,
    }

    handleHoverOn = e => {
        e.preventDefault();
        e.target.style.color = 'white';
        e.target.style.cursor = 'pointer';
        // e.target.style.fontWeight = 'bold';

    }
    handleHoverOff = e => {
        e.preventDefault();
        e.target.style.color = 'black';
    }

    handleCompanyClick = e => {
        e.preventDefault();
        this.setState({
            company: !this.state.company,
            newHire: false
        })

    }

    handleNewHireClick = e => {
        e.preventDefault();
        this.setState({
            newHire: !this.state.newHire,
            company: false
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
                background: "#fdce16",
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
                <div className="ov1-SubCategory" style={myStyle.box}>
                    <div className="h2Container" style={myStyle.h2Container}>
                        <h2 className="h2Box" style={myStyle.h2Box}>ANNUAL BONUS</h2>
                    </div>
                    <img src={Line5} alt="Line 5" />

                    <p> Now for annual bonus.  What is the benchmark’s maximum potential yearly bonus? </p>

                    <TextField
                        color='secondary'
                        hintText="Maximum Potential Yearly Bonus"
                        floatingLabelText="Yearly Bonus"
                        onChange={handleChange('bench_bonus')}
                        defaultValue={values.bench_bonus}
                    />

                    <p> Is it based on company performance or the potential hires performance? </p>
                    <br />

                    <div style={myStyle.boxContainerLink}>

                        <p
                            style={{ fontWeight: "bold" }}
                            onMouseOver={this.handleHoverOn}
                            onMouseLeave={this.handleHoverOff}
                            onClick={this.handleCompanyClick}
                        >
                            COMPANY PERFORMANCE</p>

                        <p
                            style={{ fontWeight: "bold" }}
                            onMouseOver={this.handleHoverOn}
                            onMouseLeave={this.handleHoverOff}
                            onClick={this.handleNewHireClick}
                        >
                            NEW HIRE PERFORMANCE</p>

                        {/* <a href="#" onMouseOver="this.style.color='red'"
                                    onMouseOut="this.style.color='green'" >GeeksforGeeks</a> */}
                    </div>
                    <br />

                    {this.state.company &&
                        <div>
                            <p>In order to earn the maximum bonus, the company needs to ___
                        (be specific: increase revenue by 50%, increase the stock value by 5%, launch the next version of our product).</p>

                            <TextField
                                hintText="Maximum Bonus Company Needs"
                                floatingLabelText="Maximum Bonus Company"
                                onChange={handleChange('comp_max_bonus')}
                                defaultValue={values.comp_max_bonus}
                            />
                        </div>
                    }

                    {this.state.newHire &&
                        <div>

                            <p>In order to earn the maximum bonus, the new hire needs to ___
                        (be specific: close three new deals per quarter, launch the next version of our product, recruit an engineer every month).</p>

                            <TextField
                                hintText="Maximum Bonus New Hire Needs"
                                floatingLabelText="Maximum Bonus New Hire"
                                onChange={handleChange('nhire_max_bonus')}
                                defaultValue={values.nhire_max_bonus}
                            />
                        </div>
                    }

                    <br />


                    <p>Benchmark = {values.bench_bonus}, Your Offer = {values.benchBonusOffer}</p>

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
    root: {
        justifyContent: "center",
        spacing: 1
    },
    textField: {
        color: 'black'
    },

})


export default withStyles(styles)(AnnualBonus)