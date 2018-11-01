

import React, { Component } from 'react';
import './searchform.css';


class SearchForm extends Component {
    render() {
        // debugger
        return (
            <div className="sform">
                <div className="note">
                    <label for="">Keyword</label>
                    <div>
                        <input id="input_title" type="text" placeholder="Search Keyword" />
                    </div>
                </div>
                <div className="note">
                    <label for="">Job type</label>
                </div>
                <div className="box-select">
                    <select name="ctl00$ContentPlaceHolder1$uscSearchbox1$ddlJobType" id="ctl00_ContentPlaceHolder1_uscSearchbox1_ddlJobType" tabindex="4" className="search-home-page ddlJobType" onchange="ddlJobTypeOnchange();" placeholder="All job types">
                        <option selected="selected" value="-1">All Job types</option>
                        <option value="3">Accounting</option>
                        <option value="4">Administration &amp; Reception</option>
                        <option value="21">Apprenticeships &amp; Traineeships</option>
                        <option value="22">Automotive</option>
                        <option value="5">Banking &amp; Financial Services</option>
                        <option value="24">Construction, Architecture &amp; Interiors</option>
                        <option value="25">Consulting</option>
                        <option value="15">Education</option>
                        <option value="8">Engineering</option>
                        <option value="26">Executive</option>
                        <option value="27">Fashion &amp; Beauty</option>
                        <option value="29">Food, Hospitality, Travel &amp; Tourism</option>
                        <option value="28">Graduate</option>
                        <option value="19">Human Resources</option>
                        <option value="30">Insurance &amp; Superannuation</option>
                        <option value="1">IT and Telecommunications</option>
                        <option value="31">Legal</option>
                        <option value="41">Local Government &amp; Community</option>
                        <option value="32">Manufacturing, Chemical &amp; Industrial</option>
                        <option value="10">Marketing</option>
                        <option value="33">Media, Adv., Arts &amp; Entertainment</option>
                        <option value="11">Medical, Nursing &amp; Healthcare</option>
                        <option value="16">Mining, Energy &amp; Resources</option>
                        <option value="35">Property &amp; Real Estate</option>
                        <option value="18">Retail</option>
                        <option value="17">Sales</option>
                        <option value="36">Science &amp; Technology</option>
                        <option value="37">Sport &amp; Recreation</option>
                        <option value="38">Trades &amp; Services</option>
                        <option value="39">Transport, Shipping, Logistics</option>
                        <option value="40">Volunteer, Community &amp; Charity</option>
                        <option value="2">Other</option>
                    </select>
                </div>
                <div className="note">
                    <label for="">Country</label>
                </div>
                <div className="box-select">
                    <select name="ctl00$ContentPlaceHolder1$uscSearchbox1$ddlState" id="ctl00_ContentPlaceHolder1_uscSearchbox1_ddlState" tabindex="6" className="search-home-page ddlState" onchange="ddlStateOnchange();" placeholder="All Countries">
                        <option selected="selected" value="-1">Country</option>
                        <option value="algeria">Algeria</option>
                        <option value="angola">Angola</option>
                        <option value="benin">Benin</option>
                        <option value="botswana">Botswana</option>
                        <option value="burkina Faso">Burkina Faso</option>
                        <option value="burundi">Burundi</option>
                        <option value="cameroon">Cameroon</option>
                        <option value="cape-verde">Cape Verde</option>
                        <option value="central-african-republic">Central African Republic</option>
                        <option value="chad">Chad</option>
                        <option value="comoros">Comoros</option>
                        <option value="congo-brazzaville">Congo - Brazzaville</option>
                        <option value="congo-kinshasa">Congo - Kinshasa</option>
                        <option value="ivory-coast">Côte d’Ivoire</option>
                        <option value="djibouti">Djibouti</option>
                        <option value="egypt">Egypt</option>
                        <option value="equatorial-guinea">Equatorial Guinea</option>
                        <option value="eritrea">Eritrea</option>
                        <option value="ethiopia">Ethiopia</option>
                        <option value="gabon">Gabon</option>
                        <option value="gambia">Gambia</option>
                        <option value="ghana">Ghana</option>
                        <option value="guinea">Guinea</option>
                        <option value="guinea-bissau">Guinea-Bissau</option>
                        <option value="kenya">Kenya</option>
                        <option value="lesotho">Lesotho</option>
                        <option value="liberia">Liberia</option>
                        <option value="libya">Libya</option>
                        <option value="madagascar">Madagascar</option>
                        <option value="malawi">Malawi</option>
                        <option value="mali">Mali</option>
                        <option value="mauritania">Mauritania</option>
                        <option value="mauritius">Mauritius</option>
                        <option value="mayotte">Mayotte</option>
                        <option value="morocco">Morocco</option>
                        <option value="mozambique">Mozambique</option>
                        <option value="namibia">Namibia</option>
                        <option value="niger">Niger</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="rwanda">Rwanda</option>
                        <option value="reunion">Réunion</option>
                        <option value="saint-helena">Saint Helena</option>
                        <option value="senegal">Senegal</option>
                        <option value="seychelles">Seychelles</option>
                        <option value="sierra-leone">Sierra Leone</option>
                        <option value="somalia">Somalia</option>
                        <option value="south-africa">South Africa</option>
                        <option value="sudan">Sudan</option>
                        <option value="south-sudan">Sudan</option>
                        <option value="swaziland">Swaziland</option>
                        <option value="Sao-tome-príncipe">São Tomé and Príncipe</option>
                        <option value="tanzania">Tanzania</option>
                        <option value="togo">Togo</option>
                        <option value="tunisia">Tunisia</option>
                        <option value="uganda">Uganda</option>
                        <option value="western-sahara">Western Sahara</option>
                        <option value="zambia">Zambia</option>
                        <option value="zimbabwe">Zimbabwe</option>
                    </select>
                </div>
                <div className="search">
                    <a class="search-btn">Search</a>
                </div>
            </div>

        );
    }
}

export default SearchForm;