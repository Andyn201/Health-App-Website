import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {vids} from './vids';
import tactics_book_link from '../../../assets/fundamentals/0sx28Tactics.pdf';
import foods_list_link from '../../../assets/fundamentals/os2xFoods_list.pdf';
import phoenix_link from '../../../assets/materials/Phoenix.pdf';
import motivation_link from '../../../assets/materials/Motivation_Mastery.pdf';
import workout_link from '../../../assets/materials/Workout_Picker.pdf';
// import Card from './Card';
import M from 'materialize-css';


// Styles
import './Information.css';

const Information = ({ match}) => {

    // Initialize Materialize Selectors
    useEffect(() => {
        let elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
      });


        return (
            <div className="container">
                <div className="row center">
                    <h2>Information</h2>
                </div>
                <hr/>
                <div className="row information">
                    <div className="col s12 m6">
                    <ul className="collapsible">
                        <li>
                            <div className="collapsible-header"><i className="material-icons">filter_1</i>Introduction</div>
                            <div className="collapsible-body">
                                <div className="collection">
                                    <Link key={vids[0].id} to={`/dashboard/information/${vids[0].id}`} className="collection-item">{vids[0].title}</Link>
                                    <a target="blank" href={phoenix_link} className="collection-item">Phoenix Ebook</a>
                                </div>  
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">restaurant</i>Nutrition</div>
                            <div className="collapsible-body">
                                <div className="collection">
                                    <Link key={vids[1].id} to={`/dashboard/information/${vids[1].id}`} className="collection-item">{vids[1].title}</Link>
                                    <a target="blank" href="https://www.nal.usda.gov/fnic/dri-calculator/" className="collection-item">DRI Calculator</a>
                                    <a target="blank" href={foods_list_link} className="collection-item">Foods List</a>
                                </div>  
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">fitness_center</i>Fitness</div>
                            <div className="collapsible-body">
                                <div className="collection">
                                    <Link key={vids[2].id} to={`/dashboard/information/${vids[2].id}`} className="collection-item">{vids[2].title}</Link>
                                    <a target="blank" href={workout_link} className="collection-item">Picking Workouts</a>
                                </div>  
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">spa</i>Lifestyle</div>
                            <div className="collapsible-body">
                                <div className="collection">
                                    <Link key={vids[3].id} to={`/dashboard/information/${vids[3].id}`} className="collection-item">{vids[3].title}</Link>
                                </div>  
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">control_point</i>Next Steps</div>
                            <div className="collapsible-body">
                                <div className="collection">
                                    <Link key={vids[4].id} to={`/dashboard/information/${vids[4].id}`} className="collection-item">{vids[4].title}</Link>
                                    <a target="blank" href={tactics_book_link} className="collection-item">Tactics</a>
                                    <a target="blank" href={motivation_link} className="collection-item">Motivation</a>
                                </div>  
                            </div>
                        </li>
                    </ul>
                    </div>
                    <div className="col s12 m6">
                        <iframe className="vid" title={vids[match.params['vid']]['title']} src={vids[match.params['vid']]['vid']} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <hr/>

                    
                    { /* 
                    <div className="row center">
                        <h2>Other Courses</h2>
                        <div className="col s6">
                            <Card course="fitness" title="Fitness" description="Learn The Basics of Fitness" />
                        </div>
                        <div className="col s6">
                            <Card course="nutrition" title="Nutrition" description="Learn The Basics of Nutrition" />
                        </div>
                        <div className="col s6">
                            <Card course="lifestyle" title="Lifestyle" description="Learn The Lifestyle To Get You To Your Goals" />
                        </div>
                        <div className="col s6">
                            <Card course="anatomy" title="Anatomy" description="Learn The Secrets Of The Human Body" />
                        </div>
                    </div>




                <hr/>


                    <div className="row center">
                        <h2>What Next</h2>
                    </div>
                <hr/>

                */}

            </div>
        )


}


  export default Information;