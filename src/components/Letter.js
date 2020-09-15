import React, { Component } from 'react';

// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import {List, ListItem} from 'material-ui/List'
import Button from '@material-ui/core/Button'
// PDF
import { Page, Text, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
// import styled from '@react-pdf/styled-components';
import Line4 from '../images/lines/Line4.png'

export class Letter extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    mapSlidesAB = (values) => {
        var i = 0
        for (i = 0; i < values.step.length; i++) {
            if (values.step[i] === '/annual_bonus') {
                return true
            }
        }
    }
    mapSlidesEoS = (values) => {
        var i = 0
        for (i = 0; i < values.step.length; i++) {
            if (values.step[i] === '/equity_or_stock') {
                return true
            }
        }
    }
    mapSlidesB = (values) => {
        var i = 0
        for (i = 0; i < values.step.length; i++) {
            if (values.step[i] === '/benefits') {
                return true
            }
        }
    }
    mapSlidesOP = (values) => {
        var i = 0
        for (i = 0; i < values.step.length; i++) {
            if (values.step[i] === '/onboarding_pay') {
                return true
            }
        }
    }

    render() {
        const { values, printBenefits } = this.props;
        const myStyle = {
            container: {
                // background: "#fdce16",
                flexDirection: 'column'
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
                        <h2 className="h2Box" style={myStyle.h2Box}>LETTER</h2>
                    </div>
                    <div>
                        <img src={Line4} alt="Line 2" />
                    </div>

                    <PDFViewer
                        height={'75%'}
                        width={800}
                    >

                        <Document>
                            <Page style={styles.body}>
                                <Text style={styles.date} fixed>
                                    ~ ({values.offer_date}) ~
                                </Text>
                                <Text style={styles.newHireName}>({values.nhire_first_name})</Text>

                                <Text style={styles.text}>
                                    The success of ({values.co_name}) depends on the close collaboration of the talented people on our team.
                                     And so I’m happy to invite you to join us as ({values.nhire_title}), reporting to ({values.hman_first_name}).
                                </Text>

                                <Text style={styles.text}>
                                    Before I share the details of your offer, I want to help you understand how we arrive at compensation
                                    here at ({values.co_name}).
                                </Text>

                                <Text style={styles.text}>
                                    First, we make an assessment of the candidate’s experiences and skills and compare them to those of the
                                    average candidate for this position.  This assessment is based on information from both their resume
                                    and interviews and tries to take into account all of the factors that make them a great hire.
                                </Text>

                                <Text style={styles.text}>
                                    Next, we look at normalized compensation data for roles similar to the one they will take on.
                                    This data comes from salary databases, government benchmarks, and open job postings both at
                                    ({values.co_name}) and in the wider market.
                                </Text>

                                <Text style={styles.text}>
                                    Finally, we combine the two, adjusting the compensation up or down relative to your assessed seniority.
                                </Text>

                                <Text style={styles.text}>
                                    Given the information available to us, we have assessed your seniority as ({values.pct_slider})% of the average
                                    person in this role, which has a median market salary of $({values.bench_salary}). Collectively, that means our offer
                                    is an annual salary of $({values.offer_salary}).
                                </Text>

                                <Text style={styles.text}>
                                    ({values.co_name}) strives to be data-driven and fair in our salaries and to do that, we need your help.
                                    If you feel that we have either misunderstood your expertise or the market, we are open to data that
                                    helps us understand our error.  Feel free to forward along any additional information we may have
                                    overlooked, like expertise not captured in your interviews or on your resume, other salary offers
                                    that we can use to normalize against, or anything you feel is relevant.  To avoid biasing me as
                                    your hiring manager, please send additional materials to ({values.comp_person_name}) at ({values.comp_person_email})
                                    for review.
                                </Text>

                                {this.mapSlidesOP(values) &&
                                    <Text style={styles.text}>
                                        (OPTIONAL) To support you transition into the role, we would also like to make a one-time onboarding
                                    payment of $({values.onboard_assist}).  This is not merit-based but rather situational, and it is our hope that you would
                                    use this money to help you smooth your transition into the new position and hit the ground running.
                                </Text>}

                                {this.mapSlidesB(values) &&
                                    <Text style={styles.text}>
                                        (OPTIONAL) In addition to your pay, you will be eligible for a range of other benefits. In general terms,
                                     these include ({printBenefits()}); we’re happy to chat through the details at any time.
                                </Text>}

                                {this.mapSlidesAB(values) &&
                                    <Text style={styles.text}>
                                        (OPTIONAL) You will also be eligible for bonuses of up to (BONUS), based (on your performance throughout
                                        the year) (the performance of the company throughout the year).  Specifically, your bonus is based on
                                        (BONUS CRITERIA).  You’ll receive regular feedback during your 1:1s with me and should feel free to ask
                                        about what you need to do in order to earn that bonus as you settle into your work.
                                </Text>}

                                {this.mapSlidesEoS(values) &&
                                    <Text style={styles.text}>
                                        (OPTIONAL) Part of your compensation is also equity-based, which means you’ll directly own a portion of
                                    {values.co_name}.  At our current market value, which is defined as (PUBLIC OR PRIVATE OR UNPRICED),
                                    this equity is worth (EQUITY) and you’ll receive it over the course of X years, every X months, so long
                                    as you continue to work at {values.co_name}.  So you can think of it as worth about $X per year; as with
                                    your benefits, happy to chat through the details at any time.
                                </Text>}

                                <Text style={styles.text}>
                                    Once you accept this offer, we’ll have to do some paperwork to do before you can begin working at
                                    {values.co_name}.  But for the moment, let me end by thanking you.  I know how intense our application
                                    process is and I’m looking forward to the great good we will do together.  This will be work worth doing.
                                </Text>

                                <Text style={styles.text}>
                                    If you have any questions or need to talk, feel free to call me at XXX.XXX.XXXX or email me.
                                    Otherwise, please take the day to consult friends and family and sleep on the decision, then send your
                                    acceptance or withdrawal so we can move forward.  And remember, if you feel that this offer is incorrect
                                    based on either data about the market or your experience, please let (comp_person_name); it is important
                                    that we start from a place we both believe is fair.
                                </Text>

                                <Text style={styles.text}>
                                    Looking forward to next steps,
                                    (hman_first_name)
                                </Text>
                                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                                    `${pageNumber} / ${totalPages}`
                                )} fixed />
                            </Page>
                        </Document>
                    </PDFViewer>
                    <br />
                    <Button                        
                        variant="contained"
                        color="secondary"
                        className={ButtonStyles.button}
                        onClick={this.back}
                        > Back
                    </Button>
                    {/* <Button                        
                        variant="contained"
                        color="primary"
                        className={ButtonStyles.button}
                        onClick={this.continue}
                    > Continue
                    </Button> */}
                </div>
            </div>

        )
    }
}

const ButtonStyles = theme => ({
    button: {
        '& > *': {
            margin: theme.spacing(.1),
        },
    },

})

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    date: {
        fontSize: 12,
        marginBottom: 20,
        color: 'grey',
        textAlign: 'right',
    },
    newHireName: {
        fontSize: 24,
        textAlign: 'left',
        fontFamily: 'Oswald',
        margin: 12,
    }
});

export default (Letter)