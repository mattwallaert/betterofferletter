import React, { Component } from 'react';

// import AppBar from 'material-ui/AppBar'
import TextField from '@material-ui/core/TextField'
// import {List, ListItem} from 'material-ui/List'
import Button from '@material-ui/core/Button'; // v1.x
//SLIDER
import { withStyles } from '@material-ui/core/styles';
import Slider from "@material-ui/core/Slider";
import Typography from '@material-ui/core/Typography';
// Buttons
// import ButtonGroup from '@material-ui/core/ButtonGroup'
//Checkbox
import Checkbox from '@material-ui/core/Checkbox';
//Line
import Line3 from '../images/lines/Line3.png'

export class EquityOrStock extends Component {
    state = {
        public: false,
        private: false,
        ifUnpricedCheck: false,
        ifUnpricedCheckConfirm: false
    }

    handleHoverOn = e => {
        e.preventDefault();
        e.target.style.color = "white";
        e.target.style.cursor = 'pointer';
    }
    handleHoverOff = e => {
        e.preventDefault();
        e.target.style.color = 'black';
    }

    handlePublicClick = e => {
        e.preventDefault();
        this.setState({
            public: !this.state.public,
            private: false
        })

    }

    handlePrivateClick = e => {
        e.preventDefault();
        this.setState({
            private: !this.state.private,
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
                background: "#fdce16",
                textAlign: 'left',
            },
            box: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: '100%'
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
                width: '57%'
            },
        }
        return (

            <div className='ov1' style={myStyle.container}>
                <div className="ov1-SubCategory" style={myStyle.box}>
                    <div className="h2Container" style={myStyle.h2Container}>
                        <h2 className="h2Box" style={myStyle.h2Box}>EQUITY OR STOCK</h2>
                    </div>

                    <div
                        style={{
                            marginLeft: '7%',
                            width: '85%'
                        }}
                    >

                        <img src={Line3} alt="Line 3" />

                        
                        <p> Over how many years will the equity vest? </p>

                        <TextField
                            type='number'
                            hintText="Years of Equity Vest"
                            label="Years of Equity Vest"
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
                                onClick={this.handlePublicClick}
                            >
                                PUBLIC</p>

                            <br />

                            <p
                                style={{
                                    fontWeight: "bold",
                                    fontSize: '1.5vw',
                                    paddingLeft: "2.5%"
                                }}
                                onMouseOver={this.handleHoverOn}
                                onMouseLeave={this.handleHoverOff}
                                onClick={this.handlePrivateClick}
                            >
                                PRIVATE</p>
                        </div>
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


                    {this.state.public &&
                        <div>

                            <p> -Public- What is the current price of a share of stock? </p>

                            <TextField
                                type='number'
                                hintText="Stock Share Price"
                                label="Stock Share Price"
                                onChange={handleChange('if_public_price')}
                                defaultValue={values.if_public_price}
                            />

                            <p> -Public- How many shares of stock are you offering in total? </p>

                            <TextField
                                type='number'
                                hintText="Stock Share Offer"
                                label="Stock Share Offer"
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
                                type='number'
                                hintText="If Private Value"
                                label="If Private Value"
                                onChange={handleChange('if_private_value')}
                                defaultValue={values.if_private_value}
                                disabled={this.state.ifUnpricedCheck}
                            />

                            <p> What percentage of the current outstanding shares are you offering in total? </p>

                            <TextField
                                type='number'
                                hintText="Outstanding Share Offer"
                                label="Outstanding Share Offer"
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
Value as Salary per year = {this.state.public && values.publicValueAsSalary}
                        {this.state.private && values.privateValueAsSalary} </p>

                    <br />
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
        width: 250,
        // color: '#fdce16',
        color: 'black',
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