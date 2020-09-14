import React, { Component } from 'react';

// import AppBar from 'material-ui/AppBar'
import Button from '@material-ui/core/Button'
// import TextField from 'material-ui/TextField'
// For Slider
// import { makeStyles } from "@material-ui/core/styles";
// import { values } from './UserForm'
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Line3 from '../images/lines/Line3.png'


export class DirectComp1 extends Component {

    continue = e => {
        e.preventDefault();
        //api here
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange, classes, handleSliderChange, handleBlur } = this.props;
        const myStyle = {
            container: {
                // background: "#fdce16",
                width: "100%",
                height: "100%"
            },
            box: {
                //    background: "blue"

            },
            h2Container: {
                display: "flex",
                alignContent: "flex-start",
                justifyContent: "center"
            },
            h2Box: {
                width: "530px",
                marginBottom: 0
            }
        }

        return (

            <div className='ov1' style={myStyle.container}>
                <div className="ov1-SubCategory" style={myStyle.box}>
                    <div className="h2Container" style={myStyle.h2Container}>
                        <h2 className="h2Box" style={myStyle.h2Box}>DIRECT COMPENSATION</h2>
                    </div>
                    <img src={Line3} alt="Line 3" />

                    <p>Based on the new hire’s skills and experience, how much more or less business value will they create compared to the
                                average hire for this role?</p>
                    <p>Remember, the offer should be firmly tied to the business value the hire will create
                                and you should be prepared to </p>
                    <p>justify the comparison to the skills and experience expected by the market.</p>

                    {/* (Slider from -25% to +25%) */}

                    <Typography
                        id="input-slider"
                        gutterBottom
                        style={{ lineHeight: 3 }}
                    >
                        Slider(%) from -25% - 25%
                            </Typography>
                    <Grid
                        container
                        justify="center"
                    >
                        <Grid item >
                            <Slider
                                className={classes.root}
                                value={values.pct_slider}
                                onChange={handleSliderChange('pct_slider')}
                                step={1}
                                min={-25}
                                max={25}
                                aria-labelledby="input-slider"
                            />
                        </Grid>
                        <Grid item >
                            <Input
                                className={classes.input}
                                value={values.pct_slider}
                                margin="dense"
                                onChange={handleChange('pct_slider')}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 5,
                                    min: -25,
                                    max: 25,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                }}
                            />
                        </Grid>
                    </Grid>


                    <br />

                    <br />
                    <Button                        
                        variant="contained"
                        color="primary"
                        className={styles.button}
                        onClick={this.back}
                    > Back
                    </Button>
                    <Button                        
                        variant="contained"
                        color="secondary"
                        className={styles.button}
                        onClick={this.continue}
                    > Continue
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
    root: {
        width: 250,
        color: '#fdce16',
        // color: 'black'
    },
    input: {
        width: 42,

    },
})

export default withStyles(styles)(DirectComp1);
