import React, {useEffect} from 'react';
import M from 'materialize-css';
import { InlineWidget } from "react-calendly";


import process_img from '../../../assets/marketing/process.png';
import trial from '../../../assets/marketing/trial.png';
import guarantee from '../../../assets/marketing/guarantee.png';
import redesign from '../../../assets/marketing/redesign.png';


const Marketing = () => {

    // Initialize Materialize Selectors
    useEffect(() => {
        let elems = document.querySelectorAll('.modal');

        
        M.Modal.init(elems);

      });


    return (
        <div className="home">
            
        <div className="marketing center">
            <div className="center white-text">
                <h2>Scale Scientifically</h2>
                <hr style={{border: "1px solid #8C52FF"}} />
                <h5>Grow Your Business With The Power of Analytics and Design </h5>
            </div>
        </div>

        <br/>
        <br/>

        <div className="section">
            <div className="container">
                <div className="row center">
                    <h4>The Process</h4>
                    <hr style={{width: "7vw"}} />
                    <img style={{width: "70vw"}} src={process_img} alt="Our process" />
                </div>
            </div>
        </div>

        
        <section style={{backgroundColor: "#FBFCFE"}} className="section section-main">
            <div className="container">

            <div className="center">
                <h4>Services</h4>
                <hr style={{width: "7vw"}} />
            </div>


            <div className="row row-2">
                <div className="col m6">
                    <img src={trial} alt="trials" className="responsive-img" />
                </div>

                <div className="col m6">
                <div className="img-content">
                    <h3>Analytics</h3>
                    <p>Setup your site, so that you have quality and understandable data. This data can be used to make decisions that will increase ROI and cut costs.</p>
                    <a href="#trial"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                        Book A Strategy Call
                    </a>
                </div>
                </div>
            </div>


            <div className="row row-1">
                <div className="col m6">
                    <img src={redesign} alt="guarantee" className="responsive-img"  />
                </div>

                <div className="col m6">
                <div className="img-content">
                    <h3>Design</h3>
                    <p>What good is traffic if you cannot convince people to buy? We integrate your sales process into your website to ensure that prospects are converted into customers</p>   
                    <a href="#trial"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                        Book A Strategy Call
                    </a>
                </div>
                </div>
            </div>

            <div className="row row-1">
                <div className="col m6">
                    <img src={guarantee} alt="guarantee" className="responsive-img"  />
                </div>

                <div className="col m6">
                <div className="img-content">
                    <h3>Marketing</h3>
                    <p>We set up your ads strategy. Then, we run your ads. This ensures you can have a constant flow of leads into your sales pipeline.</p>   
                    <a href="#trial"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                        Book A Strategy Call
                    </a>
                </div>
                </div>                
            </div>

            



            </div>
        </section>




        <section id="trial" className="section">
            <div className="center">
                <h4>Book A Strategy Call</h4>
                <hr style={{width: "7vw"}} />
            </div>
            <InlineWidget url="https://calendly.com/seryph-766/free-marketing-trial-clone?primary_color=9d00ff" />
        </section>


        
     
        
    </div>

    )
}

export default Marketing;