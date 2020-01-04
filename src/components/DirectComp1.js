import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
// import TextField from 'material-ui/TextField'
// For Slider
// import { makeStyles } from "@material-ui/core/styles";
// import { values } from './UserForm'
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
// import VolumeUp from "@material-ui/icons/VolumeUp";

// const useStyles = makeStyles({
//     root: {
//       width: 250,
//     },
//     input: {
//       width: 42,
//     },
//   });

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

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Direct Compensation" />

                    <h1>Direct Compensation</h1>

                    <h4>Based on the new hire’s skills and experience, how much more or less business value will they create compared to the 
                        average hire for this role?</h4>  
                    <h4>Remember, the offer should be firmly tied to the business value the hire will create 
                        and you should be prepared to </h4>
                    <h4>justify the comparison to the skills and experience expected by the market.</h4>

                    {/* (Slider from -25% to +25%) */}
                    <div>
                    {/* <div className={classes.root}> */}
                    <Typography id="input-slider" gutterBottom>
                        Slider(%) from -25% - 25%
                    </Typography>
                    <Grid 
                        container 
                        spacing={2} 
                        justify="center"
                        >
                        {/* <Grid item>
                        <VolumeUp />
                        </Grid > */}
                        <Grid item xs={2}>
                        <Slider
                            // className={classes.root}
                            value={values.pct_slider}
                            onChange={handleSliderChange}
                            step={1}
                            min={-25}
                            max={25}
                            aria-labelledby="input-slider"
                        />
                        </Grid>
                        <Grid item>
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
                    </div>
  

                    <br/>

                    {/* <TextField 
                        hintText="Enter Slider Value"
                        floatingLabelText="Percent Slider"
                        onChange={handleChange('pct_slider')}
                        value={values.pct_slider}
                    /> */}
              
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

// DirectComp1.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };


  

const styles = {
    button: {
        margin: 15
    },
    root: {
        width: 250,
    },
    input: {
        width: 42,
    },
}





  

export default withStyles(styles)(DirectComp1);
