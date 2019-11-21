import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class EquityOrStock extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        // const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Equity or Stock" />

                    <h4>
                        Now for equity.
                    </h4>  
                    
                    <h4>
                        Over how many years will the equity vest?
                    </h4>
                    
                    <h4>
                        How often will it vest? 1 month, 3 months, 6 months, 12 months
                    </h4>
                    
                    <h4>
                        Is the company public or private?
                    </h4>
                    
                    <h4>
                        -Public  What is the current price of a share of stock?  How many shares of stock are you offering in total?
                    </h4>
                    
                    <h4>
                        -Private  What is the last priced, post-money valuation of the company?* (We have not yet received a priced investment)
                    </h4>
                    
                    <h4>
                        What percentage of the current outstanding shares are you offering in total?
                    </h4>
                    
                    <h4>
                        *Do not estimate a future value; your employees have the same risk potential as your investors and should be compensated on the same terms. CHECKBOX “We have not yet received a priced investment.”
                    </h4>
                    
                    ((Display Value and Value As Salary))
              
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
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

export default EquityOrStock