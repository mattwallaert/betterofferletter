import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        });
    }

    // Go Back to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        const { step } = this.state
        const { firstName, lastName, email, occupation, city, bio } = this.state
        const values = { firstName, lastName, email, occupation, city, bio }
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails //Overview1
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails //Overview2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                )
            case 3:
                return (
                    <Confirm //DC
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
                )
            case 4:
                return (<Success //AB
                />
                )
            case 5:
                return (
                    <EquityOrStock 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
                )
            case 6:
                return (
                    <Benefits 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
                )
            case 7:
                return (
                    <OnboardingPayment
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
                )
            case 8:
                return (
                    <Optional
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
                )
            case 9:
                return (
                    <Letter 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
                )

            default:
                // do nothing
        }
    }
}

export default UserForm
