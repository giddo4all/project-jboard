import React, { Component } from 'react';
import './navbar.css';

// class Navbar extends Component {
//     render() {
//         return (
//             <div>
//                 < div id="cssmenu" >
//                     <ul>
//                         <li><a href="/"><span>Home</span></a></li>
//                         <li><a href="/jobs"><span>Job Board</span></a></li>
//                         <li><a href="#"><span>Candidates</span></a></li>
//                         <li><a href="/publishJob"><span>Employers</span></a></li>
//                         <li><a href="/contactUs"><span>Contact</span></a></li>
//                     </ul>
//                     <div class="banner-header" />
//                 </div >
//             </div >
//         );
//     }
// }


const Navbar = () => {
    return (
        <div>
            < div id="cssmenu" >
                <ul>
                    <li><a href="/"><span>Home</span></a></li>
                    <li><a href="/jobs"><span>Job Board</span></a></li>
                    <li><a href="#"><span>Candidates</span></a></li>
                    <li><a href="/publishJob"><span>Employers</span></a></li>
                    <li><a href="/contactUs"><span>Contact</span></a></li>
                </ul>
                <div class="banner-header" />
            </div >
        </div >
    )
}

export default Navbar;