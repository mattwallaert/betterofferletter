import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
// import direct_comp1 from './formtext/direct_comp1.js'

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
        //const { values, handleChange } = this.props;
        // const directComp1Text = direct_comp1;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Direct Compensation" />

                    <h4>Based on the new hire’s skills and experience, how much more or less business value will they create compared to the 
                        average hire for this role?</h4>  
                    <h4>Remember, the offer should be firmly tied to the business value the hire will create 
                        and you should be prepared to justify the comparison to the skills and experience expected by the market.</h4>

                    (Slider from -25% to +25%)
              
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

export default DirectComp1