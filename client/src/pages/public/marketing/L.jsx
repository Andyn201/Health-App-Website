import React from 'react';
import art from '../../../assets/landing/art.png';
import ai_flow from '../../../assets/landing/ai_flow.png';
import ai from '../../../assets/landing/ai.png';
import advertising from '../../../assets/landing/a.png';
import content from '../../../assets/landing/content.png';
import data_img from '../../../assets/landing/data.png';
import { InlineWidget } from "react-calendly";


const Landing = () => {
   



  return (
        <div className='landing'>
        
        <div className='landingMain'>
            <section className="section">
                <div className='container'>
                    <div className="row center">
                        <div className="col s12">
                            <h1 style={{fontSize: "5.5rem"}}>How <span style={{color: "#0FB8CE"}}>Analytics</span> Can Increase ROI </h1>
                            <p style={{fontSize: "1.5rem"}}>Learn About The Benefits of AI in Industry from chatbots to automate customer support to GANs to generate images and content</p>
                            <img width={500} src={art} alt="art pic" /> 
                        </div>  
                    </div>
                </div>  
            </section>
        </div>

        

        <section style={{width: "100%", height: "40vh", backgroundColor: "#FBFCFE"}} className="section">
            <div className="container">
                <div className="row center valign-wrapper">
                    <div className="col s12">
                        <h3>Want A Free Analytics Audit, So You Can Scale To The Moon?</h3>
                        <a style={{width: "100%"}} href="#call" className="text-white wizard-purple waves-light btn btn-large modal-trigger fb-msg-button">
                            Book A Call
                        </a>
                    </div>  
                </div>
            </div>
        </section>




        <section style={{width: "100%"}} className="section black white-text">
            <div className="container">
                <div className="row valign-wrapper">
                    <div className="col s12">
                        <h3 className='center'>What Is AI?</h3>
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




        <section style={{width: "100%", backgroundColor: "FBFCFE"}} className="section">
            <div className="container">
                <div className="row valign-wrapper">
                    <div className="col s12">
                        <h3 className='center'>How Does It Work?</h3>
                        <hr />
                        <h6>The AI is programmed and trained by feeding it certain data. Then, it is deployed on a 
                            server, like a website. The user's input is sent 
                            through the chat to the AI, which then 
                            processes the chat, fetches external data, and 
                            responds to the user
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






        <div>
            <section className="section black white-text">
                <div className='container'>
                    <div className="row center">
                        <div className="col s12">
                            <h1 style={{fontSize: "5.5rem"}}><span style={{color: "#0FB8CE"}}>AI</span> In A Busness Setting</h1>
                            <p style={{fontSize: "1.5rem"}}>Learn About The Benefits of AI in Industry from chatbots to automate customer support to GANs to generate images and content</p>
                        </div>  
                    </div>
                </div>  
            </section>
        </div>


        <section style={{width: "100%"}} className="section black white-text">
            <div className="container">
                <div className="row valign-wrapper">
                    <div className="col s12">
                        
      


            <div className="row row-1">
                <div className="col m6">
                    <img src={data_img} alt="landing pages" className="responsive-img limg2"  />
                </div>

                <div className="col m6">

                <div className="img-content">
                    <h3>AI For Data Analysis</h3>
                    <p>Curious about certain trends that impact your company. AI can be used for predictions and forecasting, from sales cycles to CO2 levels. </p>   
                    <br />
                    <a href="#call"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                    Book A Call
                    </a>
                </div>
                </div>

            </div>

            <div className="row row-1">
                <div className="col m6">
                    <img src={advertising} alt="advertising" className="responsive-img limg"  />
                </div>

                <div className="col m6">
                <div className="img-content">
                    <h3>AI For Customer Support</h3>
                    <p>Hard to manage customer support. AI can automate a lot of the simpler tasks, with instant responses, so potential customers don't get impatient and leave. </p>   
                    <a href="#call"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                    Book A Call
                    </a>
                </div>
                </div>
            </div>


            <div className="row row-1">
                <div className="col m6">
                    <img src={content} alt="content" className="responsive-img limg"  />
                </div>

                <div className="col m6">
                <div className="img-content">
                    <h3>AI For Content Generation</h3>
                    <p>Generate tons of content for your social media pages, such as images, videos, ad copy, and more</p>   
                    <a href="#call"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                    Book A Call
                    </a>
                </div>
                </div>
            </div>





                    </div>  
                </div>
            </div>
        </section>


        <section id="call" style={{width: "100%"}} className="section center">
            <div className="container">
                <div className="row center valign-wrapper">
                    <div className="col s12">
                        <h3 style={{fontSize: "5rem"}}>Want Us To Build Out Your <span className='orange-text lighten-1'>AI</span> Model?</h3>
                    </div>  
                </div>
            </div>
            <InlineWidget url="https://calendly.com/seryph-766/ai-strategy-call?primary_color=4514e0" />
        </section>

        
    </div>
  )
}



export default Landing;