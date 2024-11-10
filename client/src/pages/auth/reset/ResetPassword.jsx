import React, {useState} from 'react';
import Alert from '../../../components/alert/Alert';

// Redux
import { connect } from 'react-redux';
import {setAlert} from '../../../data/alert/alert.actions';
import {resetPassword} from '../../../data/auth/auth.actions';

const ResetPassword = ({setAlert, resetPassword, match}) => {


    const [formData, setFormData] = useState({
        password: '',
        password2password1: ''
      });
    
      const { password, password2} = formData;
    
      const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            resetPassword({password}, match.params.token);
        }    
      };

    return (
        <div>
            <div className="container">
            <h1>Reset Password</h1>
            <div className="row">
                <Alert />
            </div>
            <div className="row">
                <form className="col s12" onSubmit={onSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                            id="password" 
                            type="password" 
                            className="validate"
                            name="password"
                            value={password}
                            onChange={onChange}
                            required 
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field col s12">
                        <input 
                            id="password2" 
                            type="password" 
                            className="validate"
                            name="password2"
                            value={password2}
                            onChange={onChange}
                            required 
                        />
                        <label htmlFor="password2">Confirm Password</label>
                    </div>
                </div>
                <div className="row">
                    <button className="btn white text-wizard-purple" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                </form>
            </div>
        
        </div>
        </div>
    )
}

  
export default connect(null, {setAlert, resetPassword})(ResetPassword);
