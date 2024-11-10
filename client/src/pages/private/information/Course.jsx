import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {courses} from './courses';

import M from 'materialize-css';


// Styles
import './Information.css';


const Videos = ({ match: {params: {course, vid} }}) => {

    // Initialize Materialize Selectors
    useEffect(() => {
        let elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
      });

      let vids = courses[course].vids;

      console.log(vids[vid]);


        return (
            
            <div className="container">
                <div className="row center">
                    <h2>{courses[course].title}</h2>
                </div>
                 
                <hr/>
                <div className="row information">
                    <div className="col s12 m6">
                        <ul className="collection">
                        {
                            vids.map(vid => <Link key={vid.id} to={`/dashboard/information/${course}/${vid.id}`} className="collection-item">{vid.title}</Link>)
                        }   
                        </ul>
                    </div>
                    <div className="col s12 m6">
                        <iframe className="vid" title={vids[vid].title} src={vids[vid].vid} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

            
            </div>
        )


}


  export default Videos;