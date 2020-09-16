import React, { Component } from 'react';

// import AppBar from 'material-ui/AppBar'
import TextField from '@material-ui/core/TextField'
// import {List, ListItem} from 'material-ui/List'
import Button from '@material-ui/core/Button'
import Line5 from '../images/lines/Line5.png'

export class Optional extends Component {
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
                width: '79%',
                paddingLeft: '100%',
            },
            h2Box: {
                marginBottom: 0,
                alignSelf: 'center'
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
                width: '77%'
            },
        }
        return (

            <div className='ov1' style={myStyle.container}>
                <div className="ov1-SubCategory" style={myStyle.box}>
                    <div className="h2Container" style={myStyle.h2Container}>
                        <h2 className="h2Box" style={myStyle.h2Box}>OPTIONAL</h2>
                    </div>

                    <div
                        style={{ marginLeft: '4%' }}
                    >

                        <img
                            src={Line5}
                            alt="Line 5"
                            style={{
                                paddingLeft: '65%',
                                
                                alignSelf: 'center'
                            }}
                        />
                        <p
                            style={{
                                // width: '60%',
                                position: 'absolute',
                                paddingLeft: '5%',
                                paddingRight: '5%'
                            }}
                        >As a reminder, no data is collected in this tool and all processing is done on your browser and not sent back to a server.</p>
                        <br />
                        <br />
                        <br />
                        {/* <p>Finally, a page of optional information.</p>
                        <p>Anything you don’t complete will be left as a variable in the letter text.</p> */}

                        <p>What is the date of the offer?</p>

                        <TextField
                            hintText="Offer Date"
                            floatingLabelText="Offer Date"
                            onChange={handleChange('offer_date')}
                            defaultValue={values.offer_date}
                        />

                        <p>What is the first name of the candidate?</p>

                        <TextField
                            hintText="Candidate Name"
                            floatingLabelText="Candidate Name"
                            onChange={handleChange('nhire_first_name')}
                            defaultValue={values.nhire_first_name}
                        />

                        <p>What would be the title of the candidate?</p>

                        <TextField
                            hintText="Candidate Title"
                            floatingLabelText="Candidate Title"
                            onChange={handleChange('nhire_title')}
                            defaultValue={values.nhire_title}
                        />


                    </div>

                    <br />
                    <div
                    style={{ transform: 'translate(200%, 250%)' }}
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
                <div className="ov1-SubCategory" style={myStyle.box}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>What is the name of the company?</p>

                    <TextField
                        hintText="Company Name"
                        floatingLabelText="Company Name"
                        onChange={handleChange('co_name')}
                        defaultValue={values.co_name}
                    />

                    <p>What is the hiring manager’s first name?</p>


                    <TextField
                        hintText="Hiring Manager's First Name"
                        floatingLabelText="Hiring Manager's First Name"
                        onChange={handleChange('hman_first_name')}
                        defaultValue={values.hman_first_name}
                    />

                    <p>What is the hiring manager’s phone number?</p>

                    <TextField
                        hintText="Hiring Manager's Phone Number"
                        floatingLabelText="Hiring Manager's Phone Number"
                        onChange={handleChange('hman_phone')}
                        defaultValue={values.hman_phone}
                    />


                    <p>What is the hiring manager’s email address?</p>

                    <TextField
                        hintText="Hiring Manager's Email"
                        floatingLabelText="Hiring Manager's Email"
                        onChange={handleChange('hman_email')}
                        defaultValue={values.hman_email}
                    />
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

export default Optional