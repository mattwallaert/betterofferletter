import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
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
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Equity or Stock" />

                    <h1>Equity or Stock</h1>

                    <h4> Now for equity. </h4>  
                    
                    <h4> Over how many years will the equity vest? </h4>

                    <TextField 
                        hintText="Years of Equity Vest"
                        floatingLabelText="Years of Equity Vest"
                        onChange={handleChange('vest_years')}
                        defaultValue={values.vest_years}
                    />
                    
                    <h4> How often will it vest? 1 month, 3 months, 6 months, 12 months </h4>
                    
                    Note: 4 buttons, 1 for each option (vest_rate_mos)
                    
                    <h4> Is the company public or private? </h4>

                    Note: Button for public or private(co_public/co_private)
                    
                    <h4> -Public- What is the current price of a share of stock? </h4>

                    <TextField 
                        hintText="Stock Share Price"
                        floatingLabelText="Stock Share Price"
                        onChange={handleChange('if_public_price')}
                        defaultValue={values.if_public_price}
                    />
                    
                    <h4> -Public- How many shares of stock are you offering in total? </h4>
                    
                    <TextField 
                        hintText="Stock Share Offer"
                        floatingLabelText="Stock Share Offer"
                        onChange={handleChange('if_public_shares')}
                        defaultValue={values.if_public_shares}
                    />
                    
                    <h4> -Private  What is the last priced, post-money valuation of the company?* (We have not yet received a priced investment) </h4>

                    Note: TextField (if_private_value) with disable check box (if_unpriced)
                    
                    <h4> What percentage of the current outstanding shares are you offering in total? </h4>
                    
                    <TextField 
                        hintText="Outstanding Share Offer"
                        floatingLabelText="Outstanding Share Offer"
                        onChange={handleChange('pct_share_offer')}
                        defaultValue={values.pct_share_offer}
                    />
                    
                    <h4> *Do not estimate a future value; your employees have the same risk potential as your investors and should be compensated on the same terms. CHECKBOX “We have not yet received a priced investment.” </h4>
                    
                    ((Display Value and Value As Salary))
              
                    <br/>
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
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

export default EquityOrStock