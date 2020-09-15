import React, { Component } from 'react';
// import AppBar from 'material-ui/AppBar'
import TextField from '@material-ui/core/TextField'
// import {List, ListItem} from 'material-ui/List'
import Button from '@material-ui/core/Button'
// import direct_comp2 from './formtext/direct_comp2.js'
import Line2 from '../images/lines/Line2.png'
// import Button from '@material-ui/core/Button';


export class DirectComp2 extends Component {
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
        // const directComp2Text = direct_comp2;
        const myStyle = {
            container: {
                background: "#fdce16",
                textAlign: 'left',
            },
            box: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

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
            }
        }
        return (

            <div className='ov1' style={myStyle.container}>
                <div className="ov1-SubCategory" style={myStyle.boxContainer}>
                    <div className="h2Container" style={myStyle.h2Container}>
                        <h2 className="h2Box" style={myStyle.h2Box}>IN ORDER TO CREATE A FAIR PROCESS</h2>
                    </div>
                    <div
                        style={{ marginLeft: '11%' }}
                    >
                        <img src={Line2} alt="Line 2" />

                        <p>Avoid biasing the hiring manager. You need to name someone that the candidate can submit additional information to
                            if they believe the benchmark or experience assessment are incorrect.</p>
                        <p>This could be someone in HR, another hiring manager, or the hiring manager’s manager (sometimes called a “skip level”).</p>
                        
                        <p>What is the first and last name of the person to whom the candidate can submit additional information? (text validation)</p>

                    </div>
                    <br />
                    <div
                        style={{ transform: 'translate(200%, 0%)' }}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            className={styles.button}
                            onClick={this.back}
                        > Back
                    </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={styles.button}
                            onClick={this.continue}
                        > Continue
                    </Button>
                    </div>
                </div>
                <div className="ov1-SubCategory" style={myStyle.boxContainer}>

                    <p>First and last name?</p>
                    <TextField
                        style={{ 
                            paddingTop: '1%',
                            width: '45%'
                        }}
                        // id="Compensation Manager Full Name"
                        type="text"
                        label="Compensation Manager Full Name"
                        onChange={handleChange('comp_person_name')}
                        defaultValue={values.comp_person_name}
                    />
                    <img src={Line2} alt="Line 2" />

                    <p>What is their email? (email validation)</p>

                    <TextField
                        style={{ 
                            paddingTop: '1%',
                            width: '45%'
                        }}
                        // id="Compensation Manager Email"
                        type='email'
                        label="Compensation Manager Email"
                        onChange={handleChange('comp_person_email')}
                        defaultValue={values.comp_person_email}
                    />
                    <img src={Line2} alt="Line 2" />

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
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: "center",
        alignContent: "center"

    },
})

export default DirectComp2