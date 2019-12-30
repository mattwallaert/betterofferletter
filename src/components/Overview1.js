import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Checkbox from '@material-ui/core/Checkbox';
// import overview from './formtext/overview.js'

export class Overview1 extends Component {

    state = {
        overviewCheck: false
    }

    handleOverviewClick = e => {
        this.setState({
            overviewCheck: e.target.checked,

        })
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        // const overviewText = overview;
        // const { values, handleBenefitsCheck, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Overview" />

                    <h1>Overview</h1>
                    <br />
                    <p>One of the best ways to fight bias is standardization.  OfferLetter is designed to help you make equitable offers that are easy for people of every background to understand, with a clear, data-driven process for resolving disagreements about what is fair.
                    Please note that this is a free tool and is not designed to be monetized.  No data is collected (all processing is done on your browser and not sent back to a server) and the goal is to increase pay equity.
                    In order to continue, please certify that the following is true. </p>

                    <p>“I am committed to increasing pay equity through a transparent and direct compensation process.”

                    <Checkbox
                            checked={this.state.overview_check}
                            onChange={this.handleOverviewClick}
                            // value= 'overview_check'
                            color="primary"
                            label="Overview Check"
                        />
                    </p>
                    <p>Let’s get started.</p>

                    <br />

                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                        disabled={!this.state.overviewCheck}
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

export default Overview1
