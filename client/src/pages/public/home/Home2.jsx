import React, {useEffect} from 'react';
import M from 'materialize-css';
import { InlineWidget } from "react-calendly";


import guarantee from '../../../assets/home_page/guarantee.png';
import trial from '../../../assets/home_page/trial.png';
import process_img from '../../../assets/home_page/process.png';



const Home = () => {

    // Initialize Materialize Selectors
    useEffect(() => {
        let elems = document.querySelectorAll('.modal');

        
        M.Modal.init(elems);

      });


    return (
        <div className="home">
            
            <div className="main center">
                <div className="center">
                    <h1 className='white-text'>Virtual Health</h1>
                    <hr style={{border: "1px solid #8c52ff"}} />
                    <h4 className='white-text'>Get Fit At Home, Without The Gym</h4>
                </div>
            </div>

            <br/>
            <br/>

            <div className="section">
                <div className="container">
                    <div className="row center">
                        <h3>The Goal</h3>
                        <hr style={{width: "7vw", margin: "auto"}} />
                        <p>
                            In his Nicomachean Ethics, Aritstole writes the the 
                            meaning of life is Eudaimonia. This strange word can 
                            roughly be translated as "having a good spirit inside you", 
                            and is used to refer to happiness or fulfillment. Happiness 
                            is something we all desire for its own sake. Other things, such 
                            as wealth or power, are simply means to that final end. Aristotle 
                            wrote that Eudaimonia could be achieved through the daily practice of
                            cultivating virtues. Seryph exists to help others reach Eudaimonia 
                            through the cultivation of their spiritual and physical health
                        </p>
                        <img style={{width: "30vw"}} src={process_img} alt="Our process" />
                    </div>
                </div>
            </div>


            <section style={{backgroundColor: "#FBFCFE"}} className="section section-main">
                <div className="container">

                <div className="center">
                    <h3>The Components</h3>
                    <hr style={{width: "7vw", margin: "auto"}} />
                </div>


                <div className="row row-2">
                    <div className="col m6">
                        <img src={trial} alt="trials" className="responsive-img" />
                    </div>

                    <div className="col m6">
                    <div className="img-content">
                        <h4>Spiritual Health</h4>
                        <p>
                            The Bible states that "where there is no 
                            vision the people perish". It
                            is critical that one is at peace with 
                            themselves and have clear goals.
                        </p>
                        <ul style={{marginLeft: "1vw"}}>
                            <li style={{listStyleType: "initial"}}>Stress relieving strategies</li>
                            <li style={{listStyleType: "initial"}}>Better sleep quality</li>
                            <li style={{listStyleType: "initial"}}>Goal setting strategies</li>
                            <li style={{listStyleType: "initial"}}>A clear sense of purpose</li>
                        </ul>

                        <a href="#trial"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                            Start Now!
                        </a>
                    </div>
                    </div>
                </div>

                <div className="row row-1">
                    <div className="col m6">
                        <img src={guarantee} alt="guarantee" className="responsive-img unselectable"  />
                    </div>

                    <div className="col m6">
                    <div className="img-content">
                        <h4>Physical Health</h4>
                        <p>
                            Virgil wrote that, "the greatest wealth is health". It is
                            critical maintains their range of motion
                            and abilities. 
                        </p>   
                        <ul style={{marginLeft: "1vw"}}>
                            <li style={{listStyleType: "initial"}}>Lean, not bulky</li>
                            <li style={{listStyleType: "initial"}}>Muscular, not flabby</li>
                            <li style={{listStyleType: "initial"}}>Vigorous, not fatigued</li>
                            <li style={{listStyleType: "initial"}}>Flexible, not tight</li>
                            <li style={{listStyleType: "initial"}}>Lasting, not fleeting</li>
                        </ul>
                        <a href="#trial"  className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                            Start Now!
                        </a>
                    </div>
                    </div>

                    

                </div>



                </div>
            </section>

 


            <section id="trial" className="section">
                <div className="center">
                    <h4>Free Strategy Session</h4>
                    <hr style={{width: "7vw", margin: "auto"}} />
                </div>
                <InlineWidget url="https://calendly.com/seryph-766/free-wellness-meeting" />
            </section>


            
         
            
        </div>
    )
}

export default Home;