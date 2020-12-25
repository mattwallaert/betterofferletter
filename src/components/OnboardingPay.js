import React, { Component } from 'react';

// import AppBar from 'material-ui/AppBar'
import TextField from '@material-ui/core/TextField'
// import {List, ListItem} from 'material-ui/List'
import Button from '@material-ui/core/Button'
import Line3 from '../images/lines/Line3.png'

export class OnboardingPay extends Component {
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
                width: '90%'
            },
        }
        return (

            <div className='ov1' style={myStyle.container}>
                <div className="ov1-SubCategorySingle" style={myStyle.box}>
                    <div className="h2Container" style={myStyle.h2Container}>
                        <h2 className="h2Box" style={myStyle.h2Box}>RELOCATION/ONBOARDING PAYMENT</h2>
                    </div>

                    <div
                      style={{width: '57%'}}
                    >

                        <img src={Line3} alt="Line 3" />


                        <p>Now for onboarding payment.</p>

                        <p>This should not be based on a benchmark but rather on the amount of money needed to help your new hire be initially productive.</p>

                        <p>How much are you offering to assist with onboarding?</p>

                        <TextField
                            hintText="Onboarding Assistance"
                            label="Onboarding Assistance"
                            onChange={handleChange('onboard_assist')}
                            defaultValue={values.onboard_assist}
                            type='number'
                        />
                    </div>

                    <br />
                    <div>
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

export default OnboardingPay