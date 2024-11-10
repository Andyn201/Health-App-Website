import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../../components/alert/Alert';
import {Link} from 'react-router-dom';
import {addLog} from '../../../data/log/log.actions';

//c


const AddLog = ({history, location}) => {

    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);

    const log_redirect = location.search ? location.search.split('=')[1] : '/dashboard/log';


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

    const onChange = async (e) => { 
        e.stopPropagation();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleInputChange = async (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setFormData({
            ...formData, [name]: value
        });
      }

    const onSubmitAddLog = e => {
        e.preventDefault();
        dispatch(addLog({
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
        }));

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
                <h2>Add Log Entry</h2>
                <hr/>
                <Link to="/dashboard/log">See All Log Entries</Link>
            </div>
            <form onSubmit={onSubmitAddLog}>
            <div>
                <h1>Nutrition</h1>
                <div className="row">
                        <div className="input-field col s6">
                        <p>
                            <label>
                                <input 
                                    id="grains" 
                                    type="checkbox" 
                                    className="validate" 
                                    name="grains"
                                    checked={grains}
                                    onChange={handleInputChange}
                                />
                                <span>Had Grains Today</span>
                            </label>
                        </p>
                        </div>         
                        <div className="input-field col s6">
                            <p>
                            <label>
                                <input 
                                    id="vegetables" 
                                    type="checkbox" 
                                    className="validate" 
                                    name="vegetables"
                                    checked={vegetables}
                                    onChange={handleInputChange}
                                />
                                <span>Had Vegatables Today</span>
                            </label>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <p>
                                <label>
                                    <input 
                                        id="fruits" 
                                        type="checkbox" 
                                        className="validate" 
                                        name="fruits"
                                        checked={fruits}
                                        onChange={handleInputChange}
                                    />
                                    <span>Had Fruit Today</span>
                                </label>
                            </p>
                        </div>         
                        <div className="input-field col s6">
                            <p>
                                <label>
                                    <input 
                                        id="proteins" 
                                        type="checkbox" 
                                        className="validate" 
                                        name="proteins"
                                        checked={proteins}
                                        onChange={handleInputChange}
                                    />
                                    <span>Had Proteins Today</span>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <p>
                                <label>
                                    <input 
                                        id="snacks_or_dessert" 
                                        type="checkbox" 
                                        className="validate" 
                                        name="snacks_or_dessert"
                                        checked={snacks_or_dessert}
                                        onChange={handleInputChange}
                                    />
                                    <span>Had No Snacks or Dessert Today</span>
                                </label>
                            </p>
                        </div>         
                        <div className="input-field col s6">
                            <p>
                                <label>
                                    <input 
                                        id="meals" 
                                        type="checkbox" 
                                        className="meals" 
                                        name="meals"
                                        checked={meals}
                                        onChange={handleInputChange}
                                    />
                                    <span>Had At Least 2 Meals Today</span>
                                </label>
                            </p>
                        </div>
                    </div>
            </div>
            <hr />
            <div>
                <h1>Fitness</h1>
                    <div className="row">
                        <div className="input-field col s12">
                            <p>
                                <label>
                                    <input 
                                        id="workout" 
                                        type="checkbox" 
                                        className="validate" 
                                        name="workout"
                                        checked={workout}
                                        onChange={handleInputChange}
                                    />
                                    <span>Worked Out Today</span>
                                </label>
                            </p>
                        </div>
                        <div className="input-field col s12">
                            <p>
                                <label>
                                    <input 
                                        id="injury" 
                                        type="checkbox" 
                                        className="validate" 
                                        name="injury"
                                        checked={injury}
                                        onChange={handleInputChange}
                                    />
                                    <span>Avoided Injury Today</span>
                                </label>
                            </p>
                        </div>
                    </div>
            </div>
            <hr />
            <div>
                <h1>Lifestyle</h1>
                <div className="row">
                        <div className="input-field col s12">
                            <p>
                                <label>
                                    <input 
                                        id="hours_of_sleep" 
                                        type="checkbox" 
                                        className="validate" 
                                        name="hours_of_sleep"
                                        checked={hours_of_sleep}
                                        onChange={handleInputChange}
                                    />
                                    <span>Had Enough Sleep Last Night?</span>
                                </label>
                            </p>
                        </div>
                        <div className="input-field col s12">
                            <p>
                                <label>
                                    <input 
                                        id="fatigue_level" 
                                        type="checkbox" 
                                        className="validate" 
                                        name="fatigue_level"
                                        checked={fatigue_level}
                                        onChange={handleInputChange}
                                    />
                                    <span>Did something I enjoy for at least one hour</span>
                                </label>
                            </p>
                        </div>
                        <div className="input-field col s12">
                            <p>Rank Your Stress Levels</p>
                            <select className="browser-default" onChange={onChange} name='stress_level' value={stress_level}>
                                <option value="1">1/10 (Least Stressful)</option>
                                <option value="2">2/10</option>
                                <option value="3">3/10</option>
                                <option value="4">4/10</option>
                                <option value="5">5/10</option>
                                <option value="6">6/10</option>
                                <option value="7">7/10</option>
                                <option value="8">8/10</option>
                                <option value="9">9/10</option>
                                <option value="10">10/10 (Most Stressful)</option>
                            </select>
                        </div>

                        <div className="input-field col s12">
                            <p>Write About Anything You Want</p>
                            <textarea cols={19} name="notes" value={notes} onChange={onChange} id="notes" type="text" className="materialize-textarea"></textarea>
                        </div>
                    </div>
                </div>
                <button className="btn text-wizard-purple white" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
                <div className="row">
                    <br/>
                    <Alert />
                    <Link to="/dashboard/log">
                        <button className="btn text-wizard-purple white waves-effect waves-light" type="submit" name="action">
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


export default AddLog;