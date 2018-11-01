import React, { Component } from 'react';
import './joblist.css';
import SearchForm from '../searchform/searchform';

class Joblist extends Component {

    constructor() {
        super();
        this.state = {
            joblist: []
        };
    }

    componentDidMount() {
        fetch('/joblist')
            .then(res => res.json())
            .then(joblist => this.setState({ joblist }, () => console.log('Job fetched...', joblist)));
    }



    render() {
        return (
            <div id="joblist">
                <div id="searchsection">
                    <SearchForm />
                </div>
                <ul className="joblist">
                    {this.state.joblist.map(joblist =>
                        <li className="joblist" key={joblist._id}>
                            <img class="companylogo" src={joblist.image} alt={joblist.company} />
                            {/* {joblist.title} {joblist.company} */}
                            <a className="joblist" href={joblist.joburl} >{joblist.title}:</a>
                            <p className="joblist"> {joblist.location}</p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Joblist;
