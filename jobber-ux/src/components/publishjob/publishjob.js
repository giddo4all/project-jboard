import React, { Component } from 'react';
import './publishjob.css';

class PublishJob extends Component {
    render() {
        return (
            <div>
                <form id="form_add_new_job" name="newjob" method="post" action="/newjob">
                    <span class="default">Job Title</span>
                    <span class="default">&nbsp;&nbsp;&nbsp;</span><br />
                    <input id="input_title" type="text" placeholder="" name="job_title" class="default" /><br />
                    <span class="default">Company</span><span class="default">&nbsp;&nbsp;&nbsp;</span><br />
                    <input id="input_company" type="text" placeholder="" name="company" class="default" /><br />
                    <span class="default">Job URL</span><span class="default">&nbsp;&nbsp;&nbsp;</span><br />
                    <input id="input_joburl" type="text" placeholder="" name="joburl" class="default" /><br />
                    <span class="default">&nbsp;&nbsp;&nbsp;</span><br />
                    <button id="submit_student" type="submit">Submit</button><br />
                </form>
                <div className="postjob" >
                </div>
            </div>
        );
    }
}

export default PublishJob;
