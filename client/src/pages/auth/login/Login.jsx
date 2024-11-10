import React, { useState } from 'react';
import Alert from '../../../components/alert/Alert';
import Spinner from '../../../components/spinner/Spinner';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../data/auth/auth.actions';

const Login = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });

      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
      const loading = useSelector((state) => state.auth.loading,);



      if (loading){
        return <Spinner />
      }


      /*

      if (isAuthenticated) {
        if (user === null){
            return <Spinner />
        }
        else if((user.handbook === true) || (user.plan === 'platinum')){
          return <Redirect to="/dashboard/information/0" />
        }
        else {
          return <Redirect to="/etheria" /> 
        }
    }

    */


    if (isAuthenticated) {
        return <Redirect to="/dashboard/information/0" />
    }
    
      const { email, password } = formData;
    
      const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password));
      };
    

    return (
        <div className="container">
            {loading ? <Spinner /> : 
            <div>
            <h1>Login</h1>
            <div className="row">
                <Alert />
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
                    <div className="input-field col s12">
                        <input 
                            id="password"
                            type="password" 
                            className="validate" 
                            name="password"
                            value={password}
                            onChange={onChange}
                            minLength="6"
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <Link to="/reset">Forgot Password?</Link>
                </div>
                <div className="row">
                    <button className="btn white text-wizard-purple" type="submit" name="action">Login
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                </form>
            </div>
            </div>
        }
        </div>
    )
}

export default Login;
  


