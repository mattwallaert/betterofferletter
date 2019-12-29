<<<<<<< HEAD
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Letter extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Letter" />

                    <h1>Letter</h1>

                    <p>{values.offer_date}</p><br/>
 
                    <p>{values.nhire_first_name}</p><br/>
                    
                    <p>The success of {values.co_name} depends on the close collaboration of the talented people on our team.  And so I’m happy to invite you to join us as (nhire_title), reporting to (hman_first_name).</p>  
                    <p>Before I share the details of your offer, I want to help you understand how we arrive at compensation here at {values.co_name}.</p>
                    <p>First, we make an assessment of the candidate’s experiences and skills and compare them to those of the average candidate for this position.  This assessment is based on information from both their resume and interviews and tries to take into account all of the factors that make them a great hire.</p>
                    <p>Next, we look at normalized compensation data for roles similar to the one they will take on.  This data comes from salary databases, government benchmarks, and open job postings both at {values.co_name} and in the wider market.</p>
                    <p>Finally, we combine the two, adjusting the compensation up or down relative to your assessed seniority.</p>
                    <p>Given the information available to us, we have assessed your seniority as (seniority)% of the average person in this role, which has a median market salary of $XXX,XXX.  Collectively, that means our offer is an annual salary of $XXX,XXX.</p>
                    <p>{values.co_name} strives to be data-driven and fair in our salaries and to do that, we need your help.  If you feel that we have either misunderstood your expertise or the market, we are open to data that helps us understand our error.  Feel free to forward along any additional information we may have overlooked, like expertise not captured in your interviews or on your resume, other salary offers that we can use to normalize against, or anything you feel is relevant.  To avoid biasing me as your hiring manager, please send additional materials to (comp_person_name) at (comp_person_email) for review.</p>
                    <p>(OPTIONAL) To support you transition into the role, we would also like to make a one-time onboarding payment of $X,XXX.  This is not merit-based but rather situational, and it is our hope that you would use this money to help you smooth your transition into the new position and hit the ground running.</p>
                    <p>(OPTIONAL) In addition to your pay, you will be eligible for a range of other benefits. In general terms, these include (BENEFITS); we’re happy to chat through the details at any time.</p>
                    <p>(OPTIONAL) You will also be eligible for bonuses of up to (BONUS), based (on your performance throughout the year) (the performance of the company throughout the year).  Specifically, your bonus is based on (BONUS CRITERIA).  You’ll receive regular feedback during your 1:1s with me and should feel free to ask about what you need to do in order to earn that bonus as you settle into your work.</p>
                    <p>(OPTIONAL) Part of your compensation is also equity-based, which means you’ll directly own a portion of {values.co_name}.  At our current market value, which is defined as (PUBLIC OR PRIVATE OR UNPRICED), this equity is worth (EQUITY) and you’ll receive it over the course of X years, every X months, so long as you continue to work at {values.co_name}.  So you can think of it as worth about $X per year; as with your benefits, happy to chat through the details at any time.</p>
                    <p>Once you accept this offer, we’ll have to do some paperwork to do before you can begin working at {values.co_name}.  But for the moment, let me end by thanking you.  I know how intense our application process is and I’m looking forward to the great good we will do together.  This will be work worth doing.</p>
                    <p>If you have any questions or need to talk, feel free to call me at XXX.XXX.XXXX or email me.  Otherwise, please take the day to consult friends and family and sleep on the decision, then send your acceptance or withdrawal so we can move forward.  And remember, if you feel that this offer is incorrect based on either data about the market or your experience, please let (comp_person_name); it is important that we start from a place we both believe is fair.</p>
                    
                    <p>Looking forward to next steps,</p>
                    <p>(hman_first_name)</p>
              
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

=======
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Letter extends Component {
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
                    <AppBar title="Letter" />

                    (DATE)
 
                    (FIRST NAME)
                    
                    <p>The success of (COMPANYNAME) depends on the close collaboration of the talented people on our team.  And so I’m happy to invite you to join us as (TITLE), reporting to (MANAGER NAME).</p>  
                    <p>Before I share the details of your offer, I want to help you understand how we arrive at compensation here at (COMPANYNAME).</p>
                    <p>First, we make an assessment of the candidate’s experiences and skills and compare them to those of the average candidate for this position.  This assessment is based on information from both their resume and interviews and tries to take into account all of the factors that make them a great hire.</p>
                    <p>Next, we look at normalized compensation data for roles similar to the one they will take on.  This data comes from salary databases, government benchmarks, and open job postings both at (COMPANYNAME) and in the wider market.</p>
                    <p>Finally, we combine the two, adjusting the compensation up or down relative to your assessed seniority.</p>
                    <p>Given the information available to us, we have assessed your seniority as (seniority)% of the average person in this role, which has a median market salary of $XXX,XXX.  Collectively, that means our offer is an annual salary of $XXX,XXX.</p>
                    <p>(COMPANYNAME) strives to be data-driven and fair in our salaries and to do that, we need your help.  If you feel that we have either misunderstood your expertise or the market, we are open to data that helps us understand our error.  Feel free to forward along any additional information we may have overlooked, like expertise not captured in your interviews or on your resume, other salary offers that we can use to normalize against, or anything you feel is relevant.  To avoid biasing me as your hiring manager, please send additional materials to (COMPENSATION PERSON NAME) at (COMPENSATION PERSON EMAIL) for review.</p>
                    <p>(OPTIONAL) To support you transition into the role, we would also like to make a one-time onboarding payment of $X,XXX.  This is not merit-based but rather situational, and it is our hope that you would use this money to help you smooth your transition into the new position and hit the ground running.</p>
                    <p>(OPTIONAL) In addition to your pay, you will be eligible for a range of other benefits. In general terms, these include (BENEFITS); we’re happy to chat through the details at any time.</p>
                    <p>(OPTIONAL) You will also be eligible for bonuses of up to (BONUS), based (on your performance throughout the year) (the performance of the company throughout the year).  Specifically, your bonus is based on (BONUS CRITERIA).  You’ll receive regular feedback during your 1:1s with me and should feel free to ask about what you need to do in order to earn that bonus as you settle into your work.</p>
                    <p>(OPTIONAL) Part of your compensation is also equity-based, which means you’ll directly own a portion of (COMPANYNAME).  At our current market value, which is defined as (PUBLIC OR PRIVATE OR UNPRICED), this equity is worth (EQUITY) and you’ll receive it over the course of X years, every X months, so long as you continue to work at (COMPANYNAME).  So you can think of it as worth about $X per year; as with your benefits, happy to chat through the details at any time.</p>
                    <p>Once you accept this offer, we’ll have to do some paperwork to do before you can begin working at (COMPANYNAME).  But for the moment, let me end by thanking you.  I know how intense our application process is and I’m looking forward to the great good we will do together.  This will be work worth doing.</p>
                    <p>If you have any questions or need to talk, feel free to call me at XXX.XXX.XXXX or email me.  Otherwise, please take the day to consult friends and family and sleep on the decision, then send your acceptance or withdrawal so we can move forward.  And remember, if you feel that this offer is incorrect based on either data about the market or your experience, please let (COMPENSATION PERSON NAME); it is important that we start from a place we both believe is fair.</p>
                    
                    <p>Looking forward to next steps,</p>
                    <p>(MANAGER NAME)</p>
              
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

>>>>>>> 7c541481d9173b1c4301079d44964d034bb615af
export default Letter