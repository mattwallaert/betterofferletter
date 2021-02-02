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

    // test

    handleHoverOn = e => {
        e.preventDefault();
        e.target.style.color = 'white';
        e.target.style.cursor = 'pointer';
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
                textAlign: 'left',
            },
            box: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            },
            h2Container: {
                flexDirection: 'column',
                display: "flex",
                alignContent: "flex-start",
                justifyContent: "start",
                width: '79%'
            },
            h2Box: {
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
                justifyContent: "center",
                width: '77%'
            },
            boxContainerLink2: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: '80%'
            }
        }
        return (


            <div className='ov1' style={myStyle.container}>
                <div className="ov1-SubCategory" style={myStyle.box}>
                    <div className="h2Container" style={myStyle.h2Container}>
                        <h2 className="h2Box" style={myStyle.h2Box}>ANNUAL BONUS</h2>
                    </div>

                    <div
                        style={{ marginLeft: '11%' }}
                    >
                        <img src={Line5} alt="Line 5" />

                        <p> What is the benchmark’s maximum potential yearly bonus? </p>

                        <TextField
                            color='secondary'
                            type='number'
                            hintText="Maximum Potential Yearly Bonus"
                            label="Yearly Bonus"
                            onChange={handleChange('bench_bonus')}
                            defaultValue={values.bench_bonus}
                        />

                        <p> Is it based on company performance or the potential hires performance? </p>
                    </div>

                    <div
                        style={myStyle.boxContainerLink}
                    >

                        <p
                            style={{
                                fontWeight: "bold",
                                fontSize: '1.5vw',
                                paddingRight: "2.5%"
                            }}
                            onMouseOver={this.handleHoverOn}
                            onMouseLeave={this.handleHoverOff}
                            onClick={this.handleCompanyClick}
                        >
                            COMPANY PERFORMANCE</p>

                        <br />

                        <p
                            style={{
                                fontWeight: "bold",
                                fontSize: '1.5vw',
                                paddingLeft: "2.5%"
                            }}
                            onMouseOver={this.handleHoverOn}
                            onMouseLeave={this.handleHoverOff}
                            onClick={this.handleNewHireClick}
                        >
                            NEW HIRE PERFORMANCE</p>


                    </div>

                    <div
                        style={{ transform: 'translate(200%, 0%)' }}
                    >
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
                <div className="ov1-SubCategory" style={myStyle.boxContainer}>
                    {this.state.company &&
                        <div
                            style={{ width: '53%' }}
                        >
                            <p>In order to earn the maximum bonus, the company needs to ___
                        (be specific: increase revenue by 50%, increase the stock value by 5%, launch the next version of our product).</p>

                            <TextField
                                style={{
                                    paddingTop: '1%',
                                    width: '100%'
                                }}
                                hintText="Maximum Bonus Company Needs"
                                label="Maximum Bonus Company"
                                onChange={handleChange('comp_max_bonus')}
                                defaultValue={values.comp_max_bonus}
                            />
                        </div>
                    }

                    {this.state.newHire &&
                        <div
                            style={{ width: '53%' }}
                        >

                            <p>In order to earn the maximum bonus, the new hire needs to ___
                        (be specific: close three new deals per quarter, launch the next version of our product, recruit an engineer every month).</p>

                            <TextField
                                style={{
                                    paddingTop: '1%',
                                    width: '100%'
                                }}
                                hintText="Maximum Bonus New Hire Needs"
                                label="Maximum Bonus New Hire"
                                onChange={handleChange('nhire_max_bonus')}
                                defaultValue={values.nhire_max_bonus}
                            />
                        </div>
                    }



                    <p>Benchmark = {values.bench_bonus}, Your Offer = {values.benchBonusOffer}</p>
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