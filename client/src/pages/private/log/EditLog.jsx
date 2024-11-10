import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../../components/alert/Alert';
import {Link} from 'react-router-dom';
import {getLog, editLog} from '../../../data/log/log.actions';




const EditLog = ({match, history, location}) => {

    const dispatch = useDispatch();

    const log_redirect = location.search ? location.search.split('=')[1] : '/dashboard/log';

     // Initialize Materialize Selectors
    useEffect(() => {
        dispatch(getLog(match.params.log));

    }, [dispatch, match]);

    const auth = useSelector((state) => state.auth);
    const log_entry = useSelector((state) => state.log.log);

    const [formData, setFormData] = useState({
            grains: '...',
            vegetables: '...',
            fruits: '...',
            proteins: '...',
            dairy: '...',
            drink: '...',
            meals: '1',
            snacks_or_dessert: '1',
            workout: '0',
            workout_length: '0',
            workout_intensity: '1',
            injury: '2',
            hours_of_sleep: '0',
            sleep_quality: '1',
            fatigue_level: '1',
            stress_level: '1',
            pain_level: '1',
            smoke_or_drink: '1',
            weight: '...',
            notes: '...'
      });


    const { 
        grains,
        vegetables,
        fruits,
        proteins,
        dairy,
        drink,
        meals,
        snacks_or_dessert,
        workout,
        workout_length,
        workout_intensity,
        injury,
        hours_of_sleep,
        sleep_quality,
        fatigue_level,
        stress_level,
        pain_level,
        smoke_or_drink,
        weight,
        notes 
    } = formData;

    useEffect(() => {
        if(log_entry){
            setFormData({
                grains: log_entry.grains,
                vegetables: log_entry.vegetables,
                fruits: log_entry.fruits,
                proteins: log_entry.proteins,
                dairy: log_entry.dairy,
                drink: log_entry.drink,
                meals: log_entry.meals,
                snacks_or_dessert: log_entry.snacks_or_dessert,
                workout: log_entry.workout,
                workout_length: log_entry.workout_length,
                workout_intensity: log_entry.workout_intensity,
                injury: log_entry.injury,
                hours_of_sleep: log_entry.hours_of_sleep,
                sleep_quality: log_entry.sleep_quality,
                fatigue_level: log_entry.fatigue_level,
                stress_level: log_entry.stress_level,
                pain_level: log_entry.pain_level,
                smoke_or_drink: log_entry.smoke_or_drink,
                weight: log_entry.weight,
                notes: log_entry.notes
            });    
        }
    }, [log_entry]);


    const onChange = async (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const onSubmitEditLog = e => {
        e.preventDefault();

        
        
        dispatch(editLog({
            grains,
            vegetables,
            fruits,
            proteins,
            dairy,
            drink,
            meals,
            snacks_or_dessert,
            workout,
            workout_length,
            workout_intensity,
            injury,
            hours_of_sleep,
            sleep_quality,
            fatigue_level,
            stress_level,
            pain_level,
            smoke_or_drink,
            weight,
            notes  
        }, match.params.log));
        

        setFormData({
            grains: '...',
            vegetables: '...',
            fruits: '...',
            proteins: '...',
            dairy: '...',
            drink: '...',
            meals: '1',
            snacks_or_dessert: '1',
            workout: '0',
            workout_length: '0',
            workout_intensity: '1',
            injury: '2',
            hours_of_sleep: '0',
            sleep_quality: '1',
            fatigue_level: '1',
            stress_level: '1',
            pain_level: '1',
            smoke_or_drink: '1',
            weight: '...',
            notes: '...'
        });

            history.push(log_redirect);
        };


        

    if(auth.user.plan === 'platinum' ){

    return (
        <div className="container">
            <div className="center">
                <h2>Edit Log Entry</h2>
                <hr/>
                <Link to="/dashboard/log">See All Log Entries</Link>
            </div>
            <form onSubmit={onSubmitEditLog}>
            <div>
                <h1>Nutrition</h1>
                <h5>Goal 1: Eat something from Each Of The Food Groups Each Day</h5>
                <h5>Goal 2: Eat Proper Number Of Meals A Day</h5>
                <h5>Goal 3: Avoid Snacks And Desserts</h5>
                <div className="row">
                <div className="row">
                        <div className="input-field col s6">
                        <p>What Grains You Eat Today? (Breads, Pasta, Rice, Chips, Etc.)</p>  
                            <input 
                                id="grains" 
                                type="text" 
                                className="validate" 
                                name="grains"
                                value={grains}
                                onChange={onChange}
                            />
                        </div>         
                        <div className="input-field col s6">
                        <p>What Vegatables You Eat Today? (Corn, Carrots, Beets, Etc.)</p>
                            <input 
                                id="vegetables" 
                                type="text" 
                                className="validate" 
                                name="vegetables"
                                value={vegetables}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                        <p>What Fruits You Eat Today? (Apples, Berries, Pears, Etc.)</p>  
                            <input 
                                id="fruits" 
                                type="text" 
                                className="validate" 
                                name="fruits"
                                value={fruits}
                                onChange={onChange}
                            />
                        </div>         
                        <div className="input-field col s6">
                        <p>What Proteins You Eat Today? (Meat, Fish, Eggs, Nuts Etc.)</p>
                            <input 
                                id="proteins" 
                                type="text" 
                                className="validate" 
                                name="proteins"
                                value={proteins}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                        <p>What Dairy You Eat Today? (Milk, Cheese, Yogurt, Etc.)</p>  
                            <input 
                                id="dairy" 
                                type="text" 
                                className="validate" 
                                name="dairy"
                                value={dairy}
                                onChange={onChange}
                            />
                        </div>         
                        <div className="input-field col s6">
                        <p>What Did You Drink Today?</p>
                            <input 
                                id="drink" 
                                type="text" 
                                className="validate" 
                                name="drink"
                                value={drink}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <p>How Many Meals Did You Have?</p>
                            <select className="browser-default" onChange={onChange} name='meals' value={meals}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                                <option value="6">Six</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                        <p>Did You Snack Or Eat Dessert?</p>
                            <select className="browser-default" onChange={onChange} name='snacks_or_dessert' value={snacks_or_dessert}>
                                <option value="1">None</option>
                                <option value="2">Only Snacks</option>
                                <option value="3">Only Dessert</option>
                                <option value="4">Both</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h1>Fitness</h1>
                <h5>Goal 1: Exercise At Least 30 Minutes Each Day</h5>
                    <div className="row">
                        <div className="input-field col s12">
                            <p>What Workout Did You Do?</p>
                            <select className="browser-default" onChange={onChange} name='workout' value={workout}>
                                <option value="0">No Workout</option>
                                <option value="1">Endurance</option>
                                <option value="2">Resistance</option>
                                <option value="3">Flexibility</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <p>How Long Was The Workout?</p>
                            <select className="browser-default" onChange={onChange} name='workout_length' value={workout_length}>
                                <option value="0">No Workout</option>
                                <option value="1">15 Minutes</option>
                                <option value="2">30 Minutes</option>
                                <option value="3">45 Minutes</option>
                                <option value="4">1 Hour</option>
                                <option value="5">1.5 Hours</option>
                                <option value="6">2 Hours</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <p>How Intense Was The Workout?</p>
                            <select className="browser-default" onChange={onChange} name='workout_intensity' value={workout_intensity}>
                                <option value="0">No Workout</option>
                                <option value="1">Easy</option>
                                <option value="2">Intermediate</option>
                                <option value="3">Difficult</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <p>Did You Get Injured?</p>
                            <select class="browser-default" onChange={onChange} name='injury' value={injury}>
                                <option value="2">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                    </div>
            </div>
            <hr />
            <div>
                <h1>Lifestyle</h1>
                <h5>Goal 1: 8 Hours Of Quality Sleep Each Day</h5>
                <h5>Goal 2: Little Fatigue, Stress, And Pain</h5>
                <h5>Goal 3: Avoid Smoking And Drinking Alcohol</h5>
                <div className="row">
                        <div className="input-field col s12">
                            <p>How Many Hours Did You Sleep?</p>
                            <select className="browser-default" onChange={onChange} name='hours_of_sleep' value={hours_of_sleep}>
                                <option value="0">None</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                                <option value="6">Six</option>
                                <option value="7">Seven</option>
                                <option value="8">Eight</option>
                                <option value="9">Nine</option>
                                <option value="10">Ten</option>
                                <option value="11">Eleven</option>
                                <option value="12">Twelve</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <p>What Was The Quality Of That Sleep?</p>
                            <select className="browser-default" onChange={onChange} name='sleep_quality' value={sleep_quality}>
                                <option value="1">Terrible, Slept Horribly</option>
                                <option value="2">Not Great</option>
                                <option value="3">Ok</option>
                                <option value="4">Great</option>
                                <option value="5">Excellent</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <p>How Tired Are You Today?</p>
                            <select className="browser-default" onChange={onChange} name='fatigue_level' value={fatigue_level}>
                                <option value="1">Not Tired At All</option>
                                <option value="2">Somewhat Tired</option>
                                <option value="3">Very Tired</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <p>How Stressful Was Your Day?</p>
                            <select className="browser-default" onChange={onChange} name='stress_level' value={stress_level}>
                                <option value="1">Not Stressful At All</option>
                                <option value="2">Somewhat Stressful</option>
                                <option value="3">Very Stressful</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <p>How Much Pain Did You Feel Today?</p>
                            <select className="browser-default" onChange={onChange} name='pain_level' value={pain_level}>
                                <option value="1">None At All</option>
                                <option value="2">A Little Tighness</option>
                                <option value="3">Ow!</option>
                                <option value="4">Excruciating</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <p>Did You Smoke Or Drink Alcohol Today?</p>
                            <select className="browser-default" onChange={onChange} name='smoke_or_drink' value={smoke_or_drink}>
                                <option value="1">Did None</option>
                                <option value="2">Did Both</option>
                                <option value="3">Only Smoked</option>
                                <option value="4">Only Drank</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <p>How Much Do You Weigh Today? (lbs)</p>  
                            <input name="weight" maxLength="3"  value={weight} onChange={onChange} id="weight" type="text" className="validate"/>
                        </div>         
                        <div className="input-field col s6">
                            <p>Any Other Notes?</p>
                            <textarea name="notes" value={notes} onChange={onChange} id="notes" type="text" className="materialize-textarea"></textarea>
                        </div>
                    </div>
                </div>
                <button className="btn text-wizard-purple white waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
                <div className="row">
                    <br/>
                    <Alert />
                    <Link to="/dashboard/log">
                        <button className="btn text-wizard-purple white" type="submit" name="action">
                            See All Log Entries
                        </button>
                    </Link>
                </div>
            </form>
    </div>
    )

    }
    else {
        return <></>
    }
}


export default EditLog;