import React, { Component } from 'react';
import './landingsection.css';

class LandingSection extends Component {
    render() {
        return (
            <div>
                <section className="section section-a">
                    {/* <div class="banner-header" /> */}
                    <div className="container">
                        <h2 className="heading-a">Resources</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
                    </div>
                </section>
                <section className="section section-b">
                    <div className="container" >
                        <h2 className="heading-b">Featured Employers</h2>
                        <div className="sec-div">
                            <div className="inner">
                                <img className="companylogo" src="images/mtn-logo.jpg" alt="mtn" />
                                <a className="mtnlink" href="https://www.mtnonline.com" >MTN</a>
                                <br />
                                <p className="joblist"> MTN Nigeria is part of the MTN Group, Africas leading cellular telecommunications company.
                            Although MTN operates in over 20 countries, one-third of its revenues come from Nigeria, where it holds about 35% market share with about 53 Million subscribers</p>
                            </div>
                        </div>
                        <div className="sec-div">
                            <div className="inner">
                                <img className="companylogo" src="images/ge-logo.png" alt="ge" />
                                <a className="gelink" href="https://www.ge.com/africa/company/nigeria" >GE</a>
                                <br />
                                <p>GE has businesses in Nigeria spanning a number of key sectors. In recent times, there has been a renewed focus on the country with an eye on new
                                service facilities and employment of more local talent to expand the company’s capabilities </p>
                            </div>
                        </div>
                        <div className="sec-div">
                            <div className="inner">
                                <img className="companylogo" src="images/chevron-logo.png" alt="chv" />
                                <a className="gelink" href="https://www.chevron.com/worldwide/nigeria" >Chevron</a>
                                <br />
                                <p>Chevron is one of the largest oil producers in Nigeria and one of its largest investors.
                                Chevron takes its role as a corporate citizen in Nigeria seriously and is active in many projects that promote health, education and economic development.
                                </p>
                            </div>
                        </div>
                        <div className="sec-div">
                            <div className="inner">
                                <p>
                                    <img className="sec-logo" src="images/ibm-logo.png" alt="ibm" />
                                    <a className="gelink" href="https://www.ibm.com/ng-en/" >IBM</a>
                                    <br />
                                    IBM's Nigeria has been active in the Middle East and Africa region since 1947.
                                    Since 2009, Corporate Social Responsibility teams have been working with nonprofit and governmental agencies to build local capacity and knowledge to drive future regional growth.
                                     </p>
                            </div>
                        </div>


                    </div>
                </section>
                <section className="section section-c">
                    <div className="container">
                        <h2 className="heading-c">Latest Article</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
                    </div>
                </section>
            </div >

        );
    }
}
export default LandingSection;