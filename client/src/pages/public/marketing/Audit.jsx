import React from 'react';
import art from '../../../assets/landing/art.png';
import blank from '../../../assets/landing/blank.png';
import raw from '../../../assets/landing/raw.png';
import data_img from '../../../assets/landing/data.png';
import { InlineWidget } from "react-calendly";


const Landing = () => {
   



  return (
        <div className='landing'>
        
    

    
        <section id="call" style={{width: "100%"}} className="section center">
            <div className="container">
                <div className="row center valign-wrapper">
                    <div className="col s12">
                    <h3 style={{fontSize: "5rem"}}>Want Us To Audit Your <span className='orange-text lighten-1'>Analytics</span> Free?</h3>
                    </div>  
                </div>
            </div>
            <div style={{marginBottom: "10vh"}}>
                <InlineWidget url="https://calendly.com/seryph-766/data-science-strategy-call-clone" />
            </div>
        </section>

        <div className='landingMain'>
            <section className="section">
                <div className='container'>
                    <div className="row center">
                        <div className="col s12">
                            <h1 style={{fontSize: "5.5rem"}}>How <span style={{color: "#0FB8CE"}}>Analytics</span> Can Increase ROI </h1>
                            <p style={{fontSize: "1.5rem"}}>Learn How A Proper Analytics Implementation Can Be The Difference Between Success and Failure In Business</p>
                            <img width={500} src={art} alt="art pic" /> 
                        </div>  
                    </div>
                </div>  
            </section>
        </div>



        <div>
            <section className="section black white-text">
                <div className='container'>
                    <div className="row center">
                        <div className="col s12">
                            <h1 style={{fontSize: "5.5rem"}}><span style={{color: "#0FB8CE"}}>Analytics</span> In Busness</h1>
                            <p style={{fontSize: "1.5rem"}}>Learn the benefits of a proper analytics implementation</p>
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
                    <img src={blank} alt="landing pages" className="responsive-img limg2"  />
                </div>

                <div className="col m6">

                <div className="img-content">
                    <h3>Don't Fly Blind</h3>
                    <p>Making logical business decisions without data is like flying blind. How can you measure whether an ad campaign is profitable wihout knowing your CPA, LTV, or ROI?</p>   
                    <br />
                    <a href="#call"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                        Get A Free Analytics Audit
                    </a>
                </div>
                </div>

            </div>

            <div className="row row-1">
                <div className="col m6">
                    <img src={raw} alt="advertising" className="responsive-img limg2"  />
                </div>

                <div className="col m6">
                <div className="img-content">
                    <h3>Don't Just Collect Data. Understand It</h3>
                    <p>Data is useless when it just sits around. Systems must be put in place to organize the data into understandable relations through reporting.</p>   
                    <a href="#call"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                    Get A Free Analytics Audit
                    </a>
                </div>
                </div>
            </div>


            <div className="row row-1">
                <div className="col m6">
                    <img src={data_img} alt="content" className="responsive-img limg2"  />
                </div>

                <div className="col m6">
                <div className="img-content">
                    <h3>Analytics Should Be Meaningful</h3>
                    <p>The purpose of analytics is to present accurate information that will help people make quality decisions. Therefore, the setup should be simple and meaningful.</p>   
                    <a href="#call"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                    Get A Free Analytics Audit
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
                    <h3 style={{fontSize: "5rem"}}>Want Us To Audit Your <span className='orange-text lighten-1'>Analytics</span> Free?</h3>
                    </div>  
                </div>
            </div>
            <div style={{marginBottom: "10vh"}}>
                <InlineWidget url="https://calendly.com/seryph-766/data-science-strategy-call-clone" />
            </div>
        </section>

        
    </div>
  )
}



export default Landing;