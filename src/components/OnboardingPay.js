import React, { Component } from 'react';

// import AppBar from 'material-ui/AppBar'
import TextField from '@material-ui/core/TextField'
// import {List, ListItem} from 'material-ui/List'
import Button from '@material-ui/core/Button'

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
                //    background: "blue"

            },
        }
        return (

            <div className='ov1' style={myStyle.container}>
                <div className="ov1-SubCategory" style={myStyle.box}>


                    <h2>Relocation/Onboarding Payment</h2>

                    <p>Now for onboarding payment.</p>

                    <p>This should not be based on a benchmark but rather on the amount of money needed to help your new hire be initially productive.</p>

                    <p>How much are you offering to assist with onboarding?</p>

                    <TextField
                        hintText="Onboarding Assistance"
                        floatingLabelText="Onboarding Assistance"
                        onChange={handleChange('onboard_assist')}
                        defaultValue={values.onboard_assist}
                        type='number'
                    />

                    <br />
                    <Button
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <Button
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </div>
            </div>

        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default OnboardingPay