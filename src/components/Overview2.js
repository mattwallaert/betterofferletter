import React, { Component } from 'react';
// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
import Button from '@material-ui/core/Button'
// Checkboxes
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

// Shapes
import Triangle3 from '../images/shapes/Shape3_crop.png'
import Line2 from '../images/lines/Line2.png'


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
        const myStyle = {
            container: {
                background: "#fdce16",
                textAlign: 'left',
            },
            box: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // justifyItems: "center"

            },
            h2Container: {
                // marginBottom: 0,
                flexDirection: 'column',
                // textAlign: 'left',
                display: "flex",
                alignContent: "flex-start",
                justifyContent: "start",
                width: '79%'
            },
            h2Box: {
                // width: "575px",
                marginBottom: 0

            }

        }
        return (

            <div className='ov1' style={myStyle.container}>
                <div className="ov1-SubCategory" style={myStyle.box}>
                    <div className="h2Container" style={myStyle.h2Container}>
                        <h2 className="h2Box" style={myStyle.h2Box}>
                            FIRST UP, LET’S DETERMINE
                            THE COMPONENTS OF
                            YOUR OFFER</h2>
                    </div>

                    <div
                    style={{marginLeft: '9%'}}
                    >
                    <img src={Line2} alt="Line 2" />
                    {/* Checkboxes add slides to queue */}

                    <p
                    style={{color: 'white'}}
                    >(Non optional) Direct Compensation (hourly or salaried wages)</p>

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
                    </div>

                    <br />
                    <div
                    style= {{ transform: 'translate(200%, 0%)' }}
                    >
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
                </div> {/* BOX 1*/}

                <div className="ov1-SubCategory" style={myStyle.box}>
                    {/* <div style= {image1}> */}
                    <img src={Triangle3} alt="Shape3" />
                    {/* </div> */}
                </div> {/*BOX 2*/}

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
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: "center",
        fontFamily: 'gilroy-medium'
        // alignContent: "center",

    },

    // row: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    // },
})

export default withStyles(styles)(Overview2)