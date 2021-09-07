import React, { Component } from 'react';
// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
import Button from '@material-ui/core/Button'

import Checkbox from '@material-ui/core/Checkbox';
// import overview from './formtext/overview.js'

export class Overview1 extends Component {

    state = {
        overviewCheck: false
    }

    handleOverviewCheck = e => {
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
        const myStyle = {
            container: {
                background: "#fdce16",

            },
            box: {
                // fontSize: '5vw',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                // width:"100%"

            },
        }
        return (

            <div className='ov1' style={myStyle.container}>
                {/* <AppBar title="Overview" /> */}
                <div className="ov1-SubCategorySingle" style={myStyle.box} >

                    <h2
                    >ONE OF THE BEST WAYS TO FIGHT BIAS IS STANDARDIZATION</h2>

                    <p
                        style={{
                            width: '57%',
                        }}
                    ><span style={{ fontFamily: "gilroyextrabold" }}>BetterOfferLetter</span> is designed to help you make equitable offers that are easy for people of every background to understand, with a clear, data-driven process for resolving disagreements about fair pay.</p>

                    <p
                        style={{
                            width: '57%',
                            fontSize: '1vw'

                        }}
                    > Please note that this is a free tool and the authors don’t make any money from it. No data is collected (all processing is done on your browser and not sent back to a server) and the explicit goal is to increase pay equity.</p>
                    <p
                        style={{
                            width: '57%',
                            fontFamily: "gilroyextrabold"

                        }}
                    >In order to continue, please indicate your agreement with the following:</p>

                    {/* <br/> */}
                    <p
                        style={{ width: '62%' }}
                    >
                    <Checkbox
                            checked={this.state.overviewCheck}
                            // checked={this.handleOverviewCheck}
                            onChange={this.handleOverviewCheck}
                            // value= 'overview_check'
                            color="primary"
                            label="Overview Check"
                        />“I am committed to increasing pay equity through a transparent and direct compensation process.”
                        {/* Need Italics */}


                    </p>


                    <Button
                        variant="contained"
                        color="primary"
                        className={styles.button}
                        onClick={this.continue}
                        disabled={!this.state.overviewCheck}
                    > GET STARTED
                    </Button>
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


export default Overview1
