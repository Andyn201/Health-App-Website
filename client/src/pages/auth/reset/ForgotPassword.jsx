import React, {useState} from 'react';
import { connect } from 'react-redux';
import Alert from '../../../components/alert/Alert';
import {sendResetPasswordEmail} from '../../../data/auth/auth.actions';

const ForgotPassword = ({sendResetPasswordEmail}) => {

    const [formData, setFormData] = useState({
        email: ''
      });
    
      const { email } = formData;
    
      const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        sendResetPasswordEmail({email});
      };

    return (
        <div>
            <div className="container">
            <h1>Forgot Password</h1>
            <div className="row">
                <Alert />
            </div>
            <div className="row">
                <form className="col s12" onSubmit={onSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                            id="email" 
                            type="email" 
                            className="validate"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required 
                        />
                        <label htmlFor="email">Email</label>
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

export default connect(null, { sendResetPasswordEmail })(ForgotPassword);
