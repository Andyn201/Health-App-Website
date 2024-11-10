import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2/'; 
import {Link} from 'react-router-dom';
import Alert from '../../../components/alert/Alert';
import {deleteLog} from '../../../data/log/log.actions';
import {useSelector, useDispatch} from 'react-redux';
import {getLogs} from '../../../data/log/log.actions';
import moment from 'moment';
import M from 'materialize-css';
import './Logs.css'

 const Logs = () => {

    const auth = useSelector((state) => state.auth);
    const logs = useSelector((state) => state.log.logs);
    const dispatch = useDispatch();

    // Initialize Materialize Selectors
    useEffect(() => {
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);

        dispatch(getLogs());
      }, [dispatch]);


      const [formData, setFormData] = useState({});


      const dates_data= logs.map(log => moment(log.date).format('ll'));
      const weight_data= logs.map(log => moment().format(log.weight));
      const hours_of_sleep_data= logs.map(log => Number(log.hours_of_sleep));
      const fatigue_level_data= logs.map(log => Number(log.fatigue_level));
      const stress_level_data= logs.map(log => Number(log.stress_level));
      const pain_level_data= logs.map(log => Number(log.pain_level));



    
      const DeleteSingleLog = (log) => {
        if(window.confirm('Are you sure you want to delete this log?')){
            dispatch(deleteLog(log));
            window.location.reload();
        }
    }

    const onChange = async (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    if(auth.user.plan === 'platinum' ){
        return (
            <div className="container logs">
                <div className="center">
                    <h1>Log</h1>
                    <Alert />
                    <hr/>
                    <div className="row">
                        <div className="col s12">
                            <Line
                                data={{
                                    labels: dates_data.reverse(),
                                    datasets: [
                                      {
                                        label: formData.selectValue === 'fatigue_level' ? 'Fatigue Level (Lower Is Better)' : 
                                                formData.selectValue === 'hours_of_sleep' ? 'Hours Of Sleep' :
                                                formData.selectValue === 'stress_level' ? 'Stress Level (Lower Is Better)' : 
                                                formData.selectValue === 'pain_level' ? 'Pain Level (Lower Is Better)' : 
                                                'Weight (lbs)',
                                        fill: false,
                                        lineTension: 0.5,
                                        backgroundColor: 'rgba(75,192,192,1)',
                                        borderWidth: 2,
                                        responsive: true,
                                        maintainAspectRatio: true,
                                        data: formData.selectValue === 'fatigue_level' ? fatigue_level_data.reverse() : 
                                              formData.selectValue === 'hours_of_sleep' ? hours_of_sleep_data.reverse() :
                                              formData.selectValue === 'stress_level' ? stress_level_data.reverse() : 
                                              formData.selectValue === 'weight' ? weight_data.reverse() :
                                              formData.selectValue === 'pain_level' ? pain_level_data.reverse() : 
                                              weight_data.reverse(),
                                      },
                                    ]
                                  }}
                                options={{
                                    title:{
                                    display:false,
                                    text:'',
                                    fontSize:20,
                                    },
                                }}
                            />
                        </div>
                    </div>                
                </div>
                <div className="row">
                    <div className="col s12">
                            <select style={{textAlign: "center"}} className="browser-default" name="selectValue" value={formData} onChange={onChange}>
                                <option value="">Which Goal Should Appear On The Graph</option>
                                <option value="weight">Weight</option>
                                <option value="hours_of_sleep">Hours Of Sleep</option>
                                <option value="fatigue_level">Fatigue Level</option>
                                <option value="stress_level">Stress Level</option>
                                <option value="pain_level">Pain Level</option>
                            </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Link to="/dashboard/addlog" style={{width: "100%"}} className="btn wizard-purple">Add Log Entry</Link>
                    </div>
                </div>

                {
                    logs.map(log => (
                        <ul key={log._id} className="collection">
                            <li className="collection-item avatar">
                                <i style={{border: "1px solid grey"}} className="material-icons circle text-wizard-purple white">book</i>
                                <span className="title">{moment(log.date).format('YYYY-MM-DD')}</span>
                                <br/>
                                <Link to={`/dashboard/log/${log._id}`}>View</Link>
                                <br/>
                                <Link to={`/dashboard/editlog/${log._id}`}>Edit</Link>
                                <p style={{cursor: "pointer"}} onClick={() => DeleteSingleLog(log._id)} className="red-text" >Delete</p>
                            </li>
                        </ul>
                    ))
                }
                <Alert />
            </div>  
        )
    }
    else {
        return null
    }
}


  
  export default Logs;