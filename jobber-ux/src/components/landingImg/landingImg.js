import React, { Component } from 'react';
import './landingImg.css';
import SearchForm from '../searchform/searchform';

class Landing extends Component {
    render() {
        debugger
        return (
            <div>
                <div className="searchform">
                    <SearchForm />
                </div>
                <header class="v-header container">
                    <div class="fullscreen-video-wrap">
                        {/* <video autoplay="true" loop="true">
                            <source src="/video/collage-pple.mp4" type="video/mp4" />
                            <source src="/video/Candolim-Beach.webm" type="video/webm" />
                        </video> */}

                        <img className="fullscreen-video-wrap" src="/images/sit-lobby.jpg" alt="lobby-sit" />

                    </div>
                    <div class="header-overlay"></div>
                    <div class="header-content text-md-center">
                        <h1 className="head">Welcome Jobberline</h1>
                        <p>The Talent Repo</p>
                        {/* <a class="btn">Find Out More</a> */}
                        <br />
                        <br />
                        {/* <a class="notice" >THIS BACKGROUND VIDEO IS COPYRIGHTED BY SHUTTERSHOCK, IT IS FOR DEMO PURPOSE ONLY</a> */}
                    </div>
                </header>
            </div>

        );
    }
}

export default Landing;
