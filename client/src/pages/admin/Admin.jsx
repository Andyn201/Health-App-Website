import React from 'react';
import {Link} from 'react-router-dom';


const Admin = () => {
    return (
        <div className="container center">
            <h1>Admin</h1>
             <hr/>  
                <div className="row">
                    <div className="col s6">
                        <Link className="btn green" to="/admin/appointments">Admin Appointments</Link>
                    </div>
                    <div className="col s6">
                            <Link className="btn red" to="/admin/users">Admin Users</Link>
                    </div>
                </div>   
        </div>
    )
}

export default Admin
