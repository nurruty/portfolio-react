
import React from 'react';
import './Introduction.css';

const Introduction = () => (
    <section id="intro" className="">
        <div className="info">
            <div className="container intro-info">
                <div className="row">
                    <div className="padd-col"><h1>Nicolas Urruty</h1></div>
                </div>
                <div className="row"><div className="col-1-4 centered line"></div></div>
                <div className="row">
                    <div className="padd-col"><h4>Computer Engineer</h4></div>
                </div>
                <div className="social-links-container">
                    <ul className="social-links">
                        <li><a href="https://www.twitter.com/nicourruty" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/nurruty" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.github.com/nurruty" target="_blank" title="Github"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/nicolasurruty" title="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
		            </ul>
                </div>
            </div>
        </div>
        
        <div id="sticky-nav" className="sticky-nav-wrapper">
            <nav id="nav" className="navbar info-nav">
                    <a href="#aboutme"><span>About </span>me</a>
                   <a href="#skills">Ski<span>lls</span></a>
                   <a href="#experience">Exp<span>erience</span></a>
                   <a href="#education">Edu<span>cation</span></a>
                   <a href="#projects">Pro<span>jects</span></a>
                    <a href="#contact">Con<span>tact</span></a>
            </nav>
        </div>
    </section>
);

export default Introduction;