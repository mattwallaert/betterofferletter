import React, { Component } from 'react';
import { Router, Switch, Route, NavLink } from 'react-router-dom'
import history from "../services/history"
import Overview1 from './Overview1';
import Overview2 from './Overview2';
import DirectComp1 from './DirectComp1';
import DirectComp2 from './DirectComp2';
import DirectComp3 from './DirectComp3';
import AnnualBonus from './AnnualBonus';
import EquityOrStock from './EquityOrStock';
import Benefits from './Benefits';
import OnboardingPay from './OnboardingPay';
import Optional from './Optional';
import Letter from './Letter';


export class UserForm extends Component {
    state = {
        step: [
            "/overview/1",
            "/overview/2",

            "/direct_comp/1",
            "/direct_comp/2",
            "/direct_comp/3",

            // "/annual_bonus",
            // "/equity_or_stock",
            // "/benefits",
            // "/onboarding_pay",

            "/optional",
            "/letter",
        ],
        //Slides
        annual_bonus_slide: false,
        equity_or_stock_slide: false,
        benefits_slide: false,
        onboarding_pay_slide: false,
        //OV1
        // overview_check: false,
        // DC1
        pct_slider: 0,
        //DC2
        comp_person_name: 'Alan A. Dollar',
        comp_person_email: 'test@test.com',
        //DC3
        // salary: false, add to render
        bench_salary: '',
        offer_salary: 0,
        hour_pay: '',
        hoursPerMo: '',
        bench_hourly: 0,
        offer_hourly: 0,
        //AB
        compOrNhirePerform: 'Company Performance',
        bench_bonus: 0,
        benchBonusOffer: 0,
        perform_bonus: false,
        comp_max_bonus: '',
        nhire_max_bonus: '',
        //EoS
        vest_years: 1,
        vest_rate_mos: 1,
        co_public: false,
        co_private: false,
        if_public_price: 0,
        if_public_shares: 0,
        if_private_value: 0, //option for blank
        if_unpriced: false,
        pct_share_offer: 0,
        privateValueAsSalary: 0,
        publicValueAsSalary: 0,
        //B
        benefits: [],
        health_insurance: false,
        dental_insurance: false,
        vision_insurance: false,
        pre_tax_spending: false,
        retirement_matching: false,
        tuition_reimbursement: false,
        childcare: false,
        wellness: false,
        lunch: false,
        student_loan_assist: false,
        other_benefit: '',
        //ROP
        onboard_assist: 0,
        //Opt
        offer_date: '11/22/19',
        nhire_first_name: 'John',
        nhire_title: 'Title',
        co_name: 'My Company',
        hman_first_name: 'Jane',
        hman_phone: '888-888-8888',
        hman_email: 'test@test.com'

    }



    componentDidMount() {
        const links = this.state.step
        history.push(links[0])
    }

    //Go forward to next step

    nextStep = () => {
        const links = this.state.step
        // compare links array with history.location.pathname
        const nextLink = () => {
            for (var i = 0; i < links.length; i++) {
                if (links[i] === history.location.pathname)

                    return links[i + 1]
            }
        }
        history.push(nextLink())
    }

    // Go Back to previous step
    prevStep = () => {
        const links = this.state.step
        // compare links array with history.location.pathname
        const prevLink = () => {
            for (var i = 0; i < links.length; i++) {
                if (links[i] === history.location.pathname)
                    return links[i - 1]
            }
        }
        history.push(prevLink())
    }

    // Handle fields change
    handleChange = place => e => {
        this.setState({ [place]: e.target.value });
    }

    // Handle slider change
    handleSliderChange = place => (e, newValue) => {
        this.setState({ [place]: newValue });
    }

    handleBlur = () => {
        if (this.state.pct_slider < -25) {
            this.setState({ pct_slider: -25 });
        } else if (this.state.pct_slider > 25) {
            this.setState({ pct_slider: 25 });
        }
    }



    // Handle check

    handleSwitch = place => e => {
        this.setState({ ...this.state, [place]: e.target.checked })
        if (e.target.checked === false) {
            this.setState({ compOrNhirePerform: 'Company Performance' })
        } else {
            this.setState({ compOrNhirePerform: 'New Hire Performance' })
        }
    }

    handleSlideCheck = place => e => {
        this.setState({ ...this.state, [place]: e.target.checked });
        var array = [...this.state.step]
        var slide = '/' + place.replace('_slide', '')
        var index = array.indexOf(slide)
        console.log(slide)
        // console.log(e.target.checked)
        if (e.target.checked === false && index > -1) {

            array.splice(index, 1);
            console.log(e.target.checked)
            this.setState({ step: array })
        } else {
            array.splice(-2, 0, slide);
            console.log(e.target.checked)
            this.setState({ step: array })
        }
    };

    handleBenefitsCheck = place => e => {
        this.setState({ ...this.state, [place]: e.target.checked });
        var array = [...this.state.benefits]
        var benefit = place
        var index = array.indexOf(benefit)
        console.log(benefit)
        // console.log(e.target.checked)
        if (e.target.checked === false && index > -1) {

            array.splice(index, 1);
            console.log(e.target.checked)
            this.setState({ benefits: array })
        } else {
            array.splice(-2, 0, benefit);
            console.log(e.target.checked)
            this.setState({ benefits: array })
        }

    };

    // Fix setState Delay
    componentDidUpdate(prevProps, prevState) {
        // Hourly
        const product = this.state.hour_pay * this.state.hoursPerMo
        if (this.state.bench_hourly !== product) {
            this.setState({
                bench_hourly: product
            })
        }
        const originalBenchHourly = this.state.bench_hourly
        const pctActualHourly = this.state.pct_slider * 0.01
        const pctHourly = pctActualHourly * originalBenchHourly
        const hourlyOffer = Number(originalBenchHourly) + Number(pctHourly.toFixed(2))
        if (this.state.offer_hourly !== hourlyOffer) {
            this.setState({
                offer_hourly: hourlyOffer
            })
        }
        // Salary
        const originalBenchSalary = this.state.bench_salary
        const pctActualSalary = this.state.pct_slider * 0.01
        const pctSalary = pctActualSalary * originalBenchSalary
        const salaryOffer = Number(originalBenchSalary) + Number(pctSalary.toFixed(2))
        if (this.state.offer_salary !== salaryOffer) {
            this.setState({
                offer_salary: salaryOffer
            })
        }
        // Bonus Offer
        const originalBonusBench = this.state.bench_bonus
        const pctActualBonus = this.state.pct_slider * 0.01
        const pctBonus = pctActualBonus * originalBonusBench
        const bonusOffer = Number(originalBonusBench) + Number(pctBonus.toFixed(2))
        if (this.state.benchBonusOffer !== bonusOffer) {
            this.setState({
                benchBonusOffer: bonusOffer
            })
        }
        // EoS Private
        const originalPrivateValue = this.state.if_private_value
        const pctActualPrivateShare = this.state.pct_share_offer * 0.01
        const pctPrivateShare = pctActualPrivateShare * originalPrivateValue
        const sharePrivateValue = Number(pctPrivateShare)
        const sharePrivateValueWithYears = (sharePrivateValue / this.state.vest_years).toFixed(2)
        if (this.state.privateValueAsSalary !== sharePrivateValueWithYears) {
            this.setState({
                privateValueAsSalary: sharePrivateValueWithYears
            })
        }
        // EoS Public
        const originalPublicPrice = Number(this.state.if_public_price)
        const publicShareOffer = Number(this.state.if_public_shares)
        const totalPublicShares = originalPublicPrice * publicShareOffer
        const totalPublicSharesWithYears = (totalPublicShares / this.state.vest_years).toFixed(2)
        if (this.state.publicValueAsSalary !== totalPublicSharesWithYears) {
            this.setState({
                publicValueAsSalary: totalPublicSharesWithYears
            })
        }
    }

    // Handle benefit array map
    printBenefits = () => {
        const convertBenefits = this.state.benefits.map((item, i) => {
           return item.replace(/_/gi, ' ')
        })
        const stringValues = convertBenefits.join(', ')
        return stringValues
        
    }

    render() {
        const { ...state } = this.state
        const values = { ...state }

        return (

            <Router
                history={history}
                basename={process.env.PUBLIC_URL}
            >
                <div>
                    <div >
                        <NavLink to="/overview/1">  OV1    |</NavLink>
                        <NavLink to="/overview/2">  OV2     |</NavLink>

                        <NavLink to="/direct_comp/1">   DC1     |</NavLink>
                        <NavLink to="/direct_comp/2">   DC2     |</NavLink>
                        <NavLink to="/direct_comp/3">   DC3     |</NavLink>
                        {/* optional checkbox */}
                        <NavLink to="/annual_bonus">    AB      |</NavLink>
                        <NavLink to="/equity_or_stock">   EoS     |</NavLink>
                        <NavLink to="/benefits">   Ben     |</NavLink>
                        <NavLink to="/onboarding_pay">   ObP     |</NavLink>

                        <NavLink to="/optional">   Opt     |</NavLink>
                        <NavLink to="/letter">   Letter     </NavLink>
                    </div>
                    <Switch>

                        <Route exact path="/overview/1" render={() =>
                            <Overview1 //Overview1
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        } />

                        <Route exact path="/overview/2" render={() =>
                            <Overview2 //Overview2
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                handleSlideCheck={this.handleSlideCheck}
                                values={values}
                            />
                        } />

                        <Route exact path="/direct_comp/1" render={() =>
                            <DirectComp1
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                handleSliderChange={this.handleSliderChange}
                                handleBlur={this.handleBlur}
                                values={values}
                            />
                        } />

                        <Route exact path="/direct_comp/2" render={() =>
                            <DirectComp2 //DC
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        } />

                        <Route exact path="/direct_comp/3" render={() =>
                            <DirectComp3 //DC
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        } />

                        <Route exact path="/annual_bonus" render={() =>
                            <AnnualBonus
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                handleSwitch={this.handleSwitch}
                                values={values}
                            />
                        } />

                        <Route exact path="/equity_or_stock" render={() =>
                            <EquityOrStock
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                handleSliderChange={this.handleSliderChange}
                                values={values}
                            />
                        } />

                        <Route exact path="/benefits" render={() =>
                            <Benefits
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                handleBenefitsCheck={this.handleBenefitsCheck}
                                values={values}
                            />
                        } />

                        <Route exact path="/onboarding_pay" render={() =>
                            <OnboardingPay
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        } />

                        <Route exact path="/optional" render={() =>
                            <Optional
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        } />

                        <Route exact path="/letter" render={() =>
                            <Letter
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                printBenefits={this.printBenefits}
                                values={values}
                            />
                        } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default UserForm
