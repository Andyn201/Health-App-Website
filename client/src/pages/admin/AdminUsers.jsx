import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import {Link} from 'react-router-dom';
import {getPlatinumUsers} from '../../data/admin/admin.actions';

const AdminUsers = () => {


    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const users = useSelector((state) => state.admin.platinum_users);


    useEffect(() => {
        dispatch(getPlatinumUsers());
    }, [dispatch]);

    if (auth.loading) {
        return <Spinner />
    }


    return (
        <div className="container">
                <div className="center">
                    <h2>Admin | Users</h2>
                    <hr/>                   
                </div>
                <div className="row">
                    <div className="col s12">
                    {
                        users.map(user => (
                            <div key={user._id} className="card horizontal">
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>{user.name}</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/admin/posts/${user._id}`}><button style={{marginRight: '2vw'}} className="waves-effect waves-light btn"><i className="material-icons right">comment</i>Discussion</button></Link>
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

export default AdminUsers;

