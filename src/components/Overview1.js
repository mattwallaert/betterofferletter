import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// import overview from './formtext/overview.js'

export class Overview1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        // const overviewText = overview;
        // const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Overview" />

                    <h1>Overview</h1>
                        <br/>
                        <p>One of the best ways to fight bias is standardization.  OfferLetter is designed to help you make equitable offers that are easy for people of every background to understand, with a clear, data-driven process for resolving disagreements about what is fair.
                        Please note that this is a free tool and is not designed to be monetized.  No data is collected (all processing is done on your browser and not sent back to a server) and the goal is to increase pay equity.
                        In order to continue, please certify that the following is true.
                        “I am committed to increasing pay equity through a transparent and direct compensation process.” (CHECKBOX)
                        Let’s get started.</p> (button)
                    
                        <br/>

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

export default Overview1
