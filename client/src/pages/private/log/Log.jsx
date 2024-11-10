import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getLog, deleteLog} from '../../../data/log/log.actions';
import moment from 'moment';
import {Link} from 'react-router-dom';

const Log = ({ match, location, history }) => {
    const dispatch = useDispatch();

    const log_redirect = location.search ? location.search.split('=')[1] : '/dashboard/log'
    
    useEffect(() => {
        dispatch(getLog(match.params.log));
      }, [dispatch, match.params.log]);


    const auth = useSelector((state) => state.auth);
    const log_entry = useSelector((state) => state.log.log);

    const DeleteLog = (log) => {
        if(window.confirm('Are you sure you want to delete this log?')){
            dispatch(deleteLog(log));
            history.push(log_redirect);
        }
    }
  

if(auth.user.plan === 'platinum' ){
    return (
        <div className="container">
            <div className="center">
                <h2>Log Entry</h2>
                <hr/>
                <Link to="/dashboard/log">See All Log Entries</Link>
                <p>{moment(log_entry.date).format('YYYY-MM-DD')}</p>
            </div>

        

            <h1>Nutrition</h1>
            <ul className="collection">
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Grains</span>
                    <p>{log_entry.grains}</p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Vegetables</span>
                    <p>{log_entry.vegetables}</p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Fruits</span>
                    <p>{log_entry.fruits}</p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Proteins</span>
                    <p>{log_entry.proteins}</p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Dairy</span>
                    <p>{log_entry.dairy}</p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Drinks</span>
                    <p>{log_entry.drink}</p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Number Of Meals</span>
                    <p>{
                        log_entry.meals === '1' ? 'One' :
                        log_entry.meals === '2' ? 'Two' :
                        log_entry.meals === '3' ? 'Three' :
                        log_entry.meals === '4' ? 'Four' :
                        log_entry.meals === '5' ? 'Five' :
                        'Six'
                    }
                    </p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Snacks Or Dessert</span>
                    <p>{
                        log_entry.snacks_or_dessert === '1' ? 'None' :
                        log_entry.snacks_or_dessert === '2' ? 'Only Snacks' :
                        log_entry.snacks_or_dessert === '3' ? 'Only Dessert' :
                        'Both'
                    }
                    </p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
            </ul>


            <h1>Fitness</h1>
            <ul className="collection">
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Workout</span>
                    <p>{
                        log_entry.workout === '1' ? 'Endurance' :
                        log_entry.workout === '2' ? 'Resistance' :
                        log_entry.workout === '3' ? 'Flexibility' :
                        'No Workout'
                    }
                    </p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Workout Length</span>
                    <p>{
                        log_entry.workout_length === '1' ? '15 Minutes' :
                        log_entry.workout_length === '2' ? '30 Minutes' :
                        log_entry.workout_length === '3' ? '45 Minutes' :
                        log_entry.workout_length === '4' ? '1 Hour' :
                        log_entry.workout_length === '5' ? '1.5 Hours' :
                        log_entry.workout_length === '6' ? '2 Hours or More' :
                        'No Workout'
                    }
                    </p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Workout Intensity</span>
                    <p>{
                        log_entry.plate_size === '1' ? 'Easy' :
                        log_entry.plate_size === '2' ? 'Intermediate' :
                        'Difficult'
                    }
                    </p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Injury</span>
                    <p>{
                        log_entry.injury === '1' ? 'Yes' :
                        'No'
                    }
                    </p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
            </ul>

            <h1>Lifestyle</h1>
            <ul className="collection">
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Hours Of Sleep</span>
                    <p>{log_entry.hours_of_sleep}</p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Sleep Quality</span>
                    <p>{
                        log_entry.sleep_quality === '1' ? 'Terrible' :
                        log_entry.sleep_quality === '2' ? 'Not Great' :
                        log_entry.sleep_quality === '3' ? 'Ok' :
                        log_entry.sleep_quality === '4' ? 'Great' :
                        'Excellent'
                    }
                    </p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Fatigue Level</span>
                    <p>{
                        log_entry.fatigue_level === '3' ? 'Very Tired' :
                        log_entry.fatigue_level === '2' ? 'Somewhat Tired' :
                        'Not Tired At All'
                    }
                    </p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Stress Level</span>
                    <p>{
                        log_entry.stress_level === '3' ? 'Very Stressed' :
                        log_entry.stress_level === '2' ? 'Somewhat Stressed' :
                        'Not Stressed At All'
                    }
                    </p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Pain Level</span>
                    <p>{
                        log_entry.pain_level === '4' ? 'Excruciating Pain' :
                        log_entry.pain_level === '3' ? 'Ow!' :
                        log_entry.pain_level === '2' ? 'A Little Tighness' :
                        'None At All'
                    }
                    </p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i  style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Smoking Or Drinking?</span>
                    <p>{
                        log_entry.smoke_or_drink === '1' ? 'Did None' :
                        log_entry.smoke_or_drink === '2' ? 'Did Both' :
                        log_entry.smoke_or_drink === '3' ? 'Only Smoked' :
                        'Only Drank'
                    }
                    </p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Weight</span>
                    <p>{log_entry.weight}</p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}}  className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Notes</span>
                    <p>{log_entry.notes}</p>
                    <Link to={`/dashboard/editlog/${match.params.log}`}>Edit</Link>
                </li>
            </ul>
            <div className="row">
                <Link to="/dashboard/log">
                    <button className="btn text-wizard-purple white" type="submit" name="action">
                        See All Log Entries
                        <i className="material-icons right">send</i>
                    </button>
                </Link>
            </div>
            <div className="row">
                    <Link to={`/dashboard/editlog/${match.params.log}`}>
                        <button className="btn text-wizard-purple white waves-effect waves-light" type="submit" name="action">Edit Log
                            <i className="material-icons right">send</i>
                        </button>
                    </Link>
            </div>
            <div className="row">
                    <button onClick={() => DeleteLog(match.params.log)} className="btn red waves-effect waves-light" name="action">Delete Log
                        <i className="material-icons right">send</i>
                    </button>
            </div>
       
        </div>
    )
}

else{

    return null
}

}

export default Log;
