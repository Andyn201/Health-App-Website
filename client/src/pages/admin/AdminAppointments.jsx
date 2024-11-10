import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import Alert from '../../components/alert/Alert';
import {getAppontments, deleteAppointment} from '../../data/admin/admin.actions';

const AdminAppointments = () => {


    const dispatch = useDispatch();
    const admin = useSelector((state) => state.admin);
    const appointments = useSelector((state) => state.admin.appointments);



    useEffect(() => {
        dispatch(getAppontments());
    }, [dispatch]);


    const deleteSingleAppointment = (appointment) => {
        if(window.confirm('Are you sure you want to delete this appointment?')){
            dispatch(deleteAppointment(appointment));
            window.location.reload();
        }
    }



    if (admin.loading) {
        return <Spinner />
    }
    

    return (
        <div className="container">
                <div className="center">
                    <h2>Admin | Appointments</h2>
                    <Alert />
                    <hr/>                   
                </div>
                <div className="row">
                    <div className="col s12">
                    { 
                        appointments.map(appointment => (
                            <div key={appointment._id} className="card horizontal">
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>name: {appointment.name ? appointment.name : ''}</p>
                                        <p>email: {appointment.email ? appointment.email : ''}</p>
                                        <p>phone: {appointment.phone ? appointment.phone : ''}</p>
                                        <p>message: {appointment.message ? appointment.message : ''}</p>
                                    </div>
                                    <div className="card-action">
                                        <button style={{cursor: "pointer", width: "100%"}} onClick={() => deleteSingleAppointment(appointment._id)} className="btn red"><i className="waves-effect waves-light material-icons right">delete</i>Delete</button>
                                    </div>
                                </div>
                            </div>      
                        ))      
                    }  
                    </div>
                </div>
        </div>
    )
}

export default AdminAppointments;

