import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class AnnualBonus extends Component {
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
                    <AppBar title="Annual Bonus" />

                    <h4>
                        Now for annual bonus.  What is the benchmark’s maximum potential yearly bonus?
                    </h4>
    
                    <h4>
                        Is it based on company performance or the potential hires performance?
                    </h4>
                    
                    <h4>In order to earn the maximum bonus, the company needs to ___
                    (be specific: increase revenue by 50%, increase the stock value by 5%, launch the next version of our product).</h4>
                    
                    <h4>In order to earn the maximum bonus, the new hire needs to ___
                    (be specific: close three new deals per quarter, launch the next version of our product, recruit an engineer every month).</h4>
                    
                    ((Display Benchmark Mean Bonus and Your Offer))
              
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

export default AnnualBonus