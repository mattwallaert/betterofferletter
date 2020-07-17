import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
//SLIDER
import { withStyles } from '@material-ui/core/styles';
import Slider from "@material-ui/core/Slider";
import Typography from '@material-ui/core/Typography';
// Buttons
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
//Checkbox
import Checkbox from '@material-ui/core/Checkbox';

export class EquityOrStock extends Component {
    state = {
        public: false,
        private: false,
        ifUnpricedCheck: false,
        ifUnpricedCheckConfirm: false
    }

    handlePublicClick = e => {
        e.preventDefault();
        this.setState({
            public: !this.state.salary,
            private: false
        })

    }

    handlePrivateClick = e => {
        e.preventDefault();
        this.setState({
            private: !this.state.hourly,
            public: false
        })
    }

    handleCheck = place => e => {
        this.setState({
            [place]: e.target.checked,
        })
    }

    confirmUnpriced = () => {
        if (this.state.public === true) {
            return true
        }
        else if (this.state.ifUnpricedCheck) {
            return true
        }
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
        const { values, handleChange, classes, handleSliderChange } = this.props;
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
            <MuiThemeProvider>
                <React.Fragment>
                    <div className='ov1' style={myStyle.container}>
                        <div className="ov1-SubCategory" style={myStyle.box}>

                            <h2>EQUITY OR STOCK</h2>

                            <p> Now for equity. </p>

                            <p> Over how many years will the equity vest? </p>

                            <TextField
                                hintText="Years of Equity Vest"
                                floatingLabelText="Years of Equity Vest"
                                onChange={handleChange('vest_years')}
                                defaultValue={values.vest_years}
                            />

                            <p> How often will it vest? 1 month, 3 months, 6 months, 12 months </p>

                            <Typography >
                                Vest in months
                    </Typography>

                            <Slider
                                className={classes.root}
                                value={values.vest_rate_mos}
                                onChange={handleSliderChange('vest_rate_mos')}
                                step={null}
                                min={1}
                                max={12}
                                marks={marks}
                                aria-labelledby="vest_rate_mos"
                                valueLabelDisplay="auto"
                            />

                            {/* Note: 4 buttons, 1 for each option (vest_rate_mos) */}

                            <p> Is the company public or private? </p>

                            <ButtonGroup
                                variant="contained"
                                color="inherit"
                                aria-label="full-width contained primary button group"
                            >
                                <Button
                                    onClick={this.handlePublicClick}
                                >Public</Button>



                                <Button onClick={this.handlePrivateClick}>Private</Button>
                            </ButtonGroup><br />

                            {this.state.public &&
                                <div>

                                    <p> -Public- What is the current price of a share of stock? </p>

                                    <TextField
                                        hintText="Stock Share Price"
                                        floatingLabelText="Stock Share Price"
                                        onChange={handleChange('if_public_price')}
                                        defaultValue={values.if_public_price}
                                    />

                                    <p> -Public- How many shares of stock are you offering in total? </p>

                                    <TextField
                                        hintText="Stock Share Offer"
                                        floatingLabelText="Stock Share Offer"
                                        onChange={handleChange('if_public_shares')}
                                        defaultValue={values.if_public_shares}
                                    />
                                </div>}

                            {this.state.private &&

                                <div>

                                    <p> -Private  What is the last priced, post-money valuation of the company?* (We have not yet received a priced investment)

                            <Checkbox
                                            checked={this.state.ifUnpricedCheck}
                                            onChange={this.handleCheck('ifUnpricedCheck')}
                                            // value= 'overview_check'
                                            color="primary"
                                            label="Unpriced Check"
                                        />
                                    </p>

                                    <TextField
                                        hintText="If Private Value"
                                        floatingLabelText="If Private Value"
                                        onChange={handleChange('if_private_value')}
                                        defaultValue={values.if_private_value}
                                        disabled={this.state.ifUnpricedCheck}
                                    />

                                    <p> What percentage of the current outstanding shares are you offering in total? </p>

                                    <TextField
                                        hintText="Outstanding Share Offer"
                                        floatingLabelText="Outstanding Share Offer"
                                        onChange={handleChange('pct_share_offer')}
                                        defaultValue={values.pct_share_offer}
                                        disabled={this.state.ifUnpricedCheck}
                                    />

                                    <p> *Do not estimate a future value; your employees have the same risk potential as your investors
                                and should be compensated on the same terms.</p>


                                </div>}


                            {/* <p>
                        <Checkbox
                            checked={this.state.ifUnpricedCheckConfirm}
                            onChange={this.handleCheck('ifUnpricedCheckConfirm')}
                            // value= 'overview_check'
                            color="primary"
                            label="Unpriced Check Confirm"
                            disabled={!this.state.public === true}
                        />
                        CHECKBOX “We have not yet received a priced investment.” </p> */}

                    ((Display Value and Value As Salary))
                    <p>Value = {this.state.public && values.if_public_price}
                                {this.state.private && values.if_private_value},
                    Value as Salary = {this.state.public && values.publicValueAsSalary}
                                {this.state.private && values.privateValueAsSalary} </p>

                            <br />
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
                                disabled={!this.confirmUnpriced()}
                            />
                        </div>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = theme => ({
    button: {
        margin: 15
    },
    root: {
        width: 250,
        // alignItems: 'center',
        // justifyContent: 'center',
        // margin: theme.spacing(1)

    },
    input: {
        width: 42,

    },
});

const marks = [
    {
        value: 1,
        label: '1 mo',
    },
    {
        value: 3,
        label: '3 mos',
    },
    {
        value: 6,
        label: '6 mos',
    },
    {
        value: 12,
        label: '12 mos',
    },
];

export default withStyles(styles)(EquityOrStock)