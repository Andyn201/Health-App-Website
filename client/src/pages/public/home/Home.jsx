import React, {useEffect} from 'react';
import M from 'materialize-css';
import { InlineWidget } from "react-calendly";


import ai_flow from '../../../assets/landing/ai_flow.png';
import ai from '../../../assets/landing/ai.png';
import trial from '../../../assets/marketing/chat.png';
import gen from '../../../assets/marketing/gen.png';
import redesign from '../../../assets/marketing/redesign.png';
import marketing from '../../../assets/marketing/marketing.png';


const Home = () => {

    // Initialize Materialize Selectors
    useEffect(() => {
        let elems = document.querySelectorAll('.modal');

        
        M.Modal.init(elems);

      });


    return (
        <div className="home">
            
        <div className="marketing center">
            <div className="center white-text">
                <h2>Analytics and Data Science</h2>
                <hr style={{border: "1px solid #8C52FF"}} />
                <h5>Grow Your Business With The Power of Analytics and AI</h5>
            </div>
        </div>

        <br/>
        <br/>




        <section style={{width: "100%", backgroundColor: "FBFCFE"}} className="section">
            <div className="container">
                <div className="row valign-wrapper">
                    <div className="col s12">
                        <h3 className='center'>Scale Scientifically</h3>
                        <hr />
                        <h6>The model is programmed and trained by feeding it certain data. Then, it is deployed on a 
                            server, like a website. The user's input is sent 
                            through the chat to the AI, which then 
                            processes the chat, fetches external data, and 
                            responds to the user. This can be used to find trends and make decisions that will cut costs and increase ROI. 
                        </h6>
                        <br />
                        <br />
                        <br />
                        <img src={ai_flow} alt="flowchart" className="responsive-img"  />
                        <br />
                        <br />
                        <br />s
                    </div>  
                </div>
            </div>
        </section>


        <section style={{width: "100%"}} className="section black white-text">
            <div className="container">
                <div className="row valign-wrapper">
                    <div className="col s12">
                        <h3 className='center'>The AI Model</h3>
                        <hr />
                        <h6>Artificial Intelligence are mathmatical functions programmed to map certain numerical inputs to outputs. These inputs and outputs can be changed and updated depending on the data fed into them.
                        </h6>
                        <div className='center'>
                            <img style={{margin: "auto"}} src={ai} width={600} alt="what is ai" className="responsive-img"  />
                        </div>
                    </div>  
                </div>
            </div>
        </section>

        
        <section style={{backgroundColor: "#FBFCFE"}} className="section section-main">
            <div className="container">

            <div className="center">
                <h4>Services</h4>
                <hr style={{width: "7vw"}} />
            </div>


            <div className="row row-2">
                <div className="col m6">
                    <img src={redesign} alt="trials" className="responsive-img" />
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

            <div className="row row-2">
                <div className="col m6">
                    <img src={marketing} alt="trials" className="responsive-img" />
                </div>

                <div className="col m6">
                <div className="img-content">
                    <h3>Marketing</h3>
                    <p>Use analytics and data science to cut off ads that are not working and invest in the ones that are making a killing. </p>
                    <a href="#trial"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                        Book A Strategy Call
                    </a>
                </div>
                </div>
            </div>


            <div className="row row-1">
                <div className="col m6">
                    <img src={trial} alt="guarantee" className="responsive-img"  />
                </div>

                <div className="col m6">
                <div className="img-content">
                    <h3>Chat AI</h3>
                    <p>What good is traffic if you cannot convince people to buy? We use chat AI marketing to ensure that prospects are converted into customers and that customers are kept happy.</p>   
                    <a href="#trial"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                        Book A Strategy Call
                    </a>
                </div>
                </div>
            </div>

            <div className="row row-1">
                <div className="col m6">
                    <img src={gen} alt="guarantee" className="responsive-img"  />
                </div>

                <div className="col m6">
                <div className="img-content">
                    <h3>Generative AI</h3>
                    <p>Use AI to generate content. Examples of AI generated content are images, videos, audio, and more.</p>   
                    <a href="#trial"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                        Book A Strategy Call
                    </a>
                </div>
                </div>                
            </div>



             {/*

            <div className="row row-1">
                <div className="col m6">
                    <img src={guarantee} alt="guarantee" className="responsive-img"  />
                </div>

                <div className="col m6">
                <div className="img-content">
                    <h3>Custom AI Software</h3>
                    <p>We set up your ads strategy. Then, we run your ads. This ensures you can have a constant flow of leads into your sales pipeline.</p>   
                    <a href="#trial"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                        Book A Strategy Call
                    </a>
                </div>
                </div>                
            </div>

    */ }
            



            </div>
        </section>




        <section id="trial" className="section">
            <div className="center">
                <h4>Book A Strategy Call</h4>
                <hr style={{width: "7vw"}} />
            </div>
            <InlineWidget url="https://calendly.com/seryph-766/ai-strategy-call?primary_color=4514e0" />
        </section>


        
     
        
    </div>

    )
}

export default Home;