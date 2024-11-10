import React, {useEffect} from 'react';
import M from 'materialize-css';
import { InlineWidget } from "react-calendly";


import logo from '../../../assets/logo.png';

import item1 from '../../../assets/samples/item4.png';
import item2 from '../../../assets/samples/item2.png';
import item3 from '../../../assets/samples/item3.png';
import item4 from '../../../assets/samples/item5.png';







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
                <h2>Websites And Design</h2>
                <hr style={{border: "1px solid #8C52FF"}} />
                <h5>We Take Care Of The Code</h5>
            </div>
        </div>



        <section class="section section-about grey lighten-4">
    <div class="container">
      <div class="row">
        <div class="col s12 m6">
          <h3>
            <span class="deep-purple-text text-darken-1">About</span> Us</h3>
          <p class="flow-text">Seryph was started to help businesses maintain their code. Why go through all the hastle hiring in-house when we do things cheaper, faster, and more efficiently? We handle the code, while you handle your business.</p>
        </div>
        <div class="col s12 m6">
          <img src={logo} alt="" class="circle responsive-img" />
        </div>
      </div>
    </div>
  </section>

        
        <section style={{backgroundColor: "#FBFCFE"}} className="section section-main">
            <div className="container">

            <div style={{marginBottom: "10vh", marginTop: "10vh"}} className="center">
                <h4>Portfolio</h4>
                <hr style={{width: "7vw"}} />
            </div>

                <div className="row row-1">
                    <div className="col m6 hide-on-small-only">
                    <div className="img-content">
                        <h3>Health Platform</h3>
                        <p>This site is a health subscription platform. This site has features such as: subscription payments, nutrition tracking, analytics, course publishing, and more</p>
                        <div>              
                            <div>
                                <a href="https://seryph-health.herokuapp.com/" style={{marginRight: '1vw'}} target="blank" className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                                See Site
                                </a>

                                <a href="#modal1" style={{marginLeft: '1vw'}} className="modal-trigger white text-wizard-purple waves-light btn btn-large modal-trigger hide-on-med-and-down">
                                Watch Video
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col m6 s12">
                    <div className="card">
                        <div className="card-image">
                        <a href="#modal1" className='modal-trigger'><img src={item1} alt="" /></a>
                        <button href="#abstract1" className="btn-floating halfway-fab waves-effect waves-light red modal-trigger">
                            <i className="grey darken-4 material-icons">add</i>
                        </button>
                        </div>
                        <div className="card-content">
                        <p>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div id="modal1" className="modal">
                        <div className="modal-content">
                            <h4 className='center'>Health Tracker Site</h4>
                            <div className="video-container">
                            <iframe title="health" width="560" height="315" src="https://player.vimeo.com/video/753190060?h=18697d1fef" frameborder="0" allowfullscreen></iframe></div>
                            <p>This site is a health subscription platform. This site has features such as: subscription payments, nutrition tracking, analytics, course publishing, and more</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </div>
                </div>

                <div className="row row-2">
                    <div className="col m6">
                    <div className="card">
                        <div className="card-image">
                        <a href="#modal2" className='modal-trigger'><img src={item2} alt="" /></a>
                        <a href="#abstract2" className="btn-floating halfway-fab waves-effect waves-light red modal-trigger">
                            <i className="material-icons grey darken-4">add</i>
                        </a>
                        </div>
                        <div className="card-content">
                        <p>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col m6 hide-on-small-only">
                        <div className="img-content">
                            <h3>Ecommerce Site</h3>
                            <p>This project is an ecommerce store to sell art. This site is built with React and Firebase. It includes the ability to add art products, set their prices, and sell them.</p>
                            <div>
                                <a href="https://warm-crag-68803.herokuapp.com/" style={{marginRight: '1vw'}} target="blank" className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                                See Site
                                </a>

                                <a href="#modal2" style={{marginLeft: '1vw'}} className="modal-trigger white text-wizard-purple waves-light btn btn-large modal-trigger hide-on-med-and-down">
                                Watch Video
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="modal2" className="modal">
                        <div className="modal-content">
                            <h4 className='center'>Ecommerce Site</h4>
                            <div className="video-container">
                            <iframe title="ecom" width="560" height="315" src="https://player.vimeo.com/video/738460851?h=71eb7e3757&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allowfullscreen></iframe></div>
                            <p>This project is an ecommerce store to sell art. This site is built with React and Firebase. It includes the ability to add art products, set their prices, and sell them.</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col m6 hide-on-small-only">
                    <div className="img-content">
                        <h3>Social Media Site</h3>
                        <p>The project is a social media site based off of linkedin. A user has the ability to create a profile based off their prior work experience, post content, and interact with potential employers.</p>
                        <div>              
                            <div>
                                <a href="https://warm-temple-85998.herokuapp.com/" style={{marginRight: '1vw'}} target="blank" className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                                See Site
                                </a>

                                <a href="#modal3" style={{marginLeft: '1vw'}} className="modal-trigger white text-wizard-purple waves-light btn btn-large modal-trigger hide-on-med-and-down">
                                Watch Video
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col m6 s12">
                    <div className="card">
                        <div className="card-image">
                        <a href="#modal3" className='modal-trigger'><img src={item3} alt="" /></a>
                        <button href="#abstract1" className="btn-floating halfway-fab waves-effect waves-light red modal-trigger">
                            <i className="grey darken-4 material-icons">add</i>
                        </button>
                        </div>
                        <div className="card-content">
                        <p>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div id="modal3" className="modal">
                        <div className="modal-content">
                            <h4 className='center'>Social Media Site</h4>
                            <div className="video-container">
                            <iframe title="health" width="560" height="315" src="https://player.vimeo.com/video/738460973?h=605aac4db1" frameborder="0" allowfullscreen></iframe></div>
                            <p>The project is a social media site based off of linkedin. A user has the ability to create a profile based off their prior work experience, post content, and interact with potential employers.</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </div>
                </div>

                
                <div className="row row-2">
                    <div className="col m6">
                    <div className="card">
                        <div className="card-image">
                        <a href="#modal4" className='modal-trigger'><img src={item4} alt="" /></a>
                        <a href="#abstract2" className="btn-floating halfway-fab waves-effect waves-light red modal-trigger">
                            <i className="material-icons grey darken-4">add</i>
                        </a>
                        </div>
                        <div className="card-content">
                        <p>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col m6 hide-on-small-only">
                        <div className="img-content">
                            <h3>Landing Page</h3>
                            <p>Landing pages are incredibly popular in today's marketing client. Let us help you sell your next product by building a high quality landing page.</p>
                            <div>
                                <a href="https://papaya-starship-3632ae.netlify.app/" style={{marginRight: '1vw'}} target="blank" className="white text-wizard-purple waves-light btn btn-large modal-trigger">
                                See Site
                                </a>

                                <a href="#modal4" style={{marginLeft: '1vw'}} className="modal-trigger white text-wizard-purple waves-light btn btn-large modal-trigger hide-on-med-and-down">
                                Watch Video
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="modal4" className="modal">
                        <div className="modal-content">
                            <h4 className='center'>Landing Page</h4>
                            <div className="video-container">
                            <iframe title="landing" width="560" height="315" src="https://player.vimeo.com/video/754955279?h=7d4f5d3c44&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allowfullscreen></iframe></div>
                            <p>Landing pages are incredibly popular in today's marketing client. Let us help you sell your next product by building a high quality landing page.</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </div>
                </div>

                </div>
        </section>




        <section id="trial" className="section">
            <div className="center">
                <h4>Let's Talk</h4>
                <hr style={{width: "7vw"}} />
            </div>
            <InlineWidget url="https://calendly.com/seryph-766/free-consultation" />
        </section>
        
     
        
    </div>

    )
}

export default Home;