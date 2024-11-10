import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Alert from '../../../components/alert/Alert';
import Spinner from '../../../components/spinner/Spinner';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {setAlert} from '../../../data/alert/alert.actions';
import { register } from '../../../data/auth/auth.actions';

import M from 'materialize-css';





// Component
const Register = () => {

    // Initialize Materialize Selectors
    useEffect(() => {
        let el = document.querySelectorAll('.tabs');
        M.Tabs.init(el);
      });


    const dispatch = useDispatch();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        card_name: '',
        card_number: '',
        exp_month: '',
        exp_year: '',
        cvc: '',
      });

      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
      const loading = useSelector((state) => state.auth.loading);

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
      
    
    const { name, email, password, password2,  card_name, card_number, exp_month, exp_year, cvc } = formData;




    const onChange = async (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (password !== password2) {
            dispatch(setAlert('Passwords do not match', 'danger'));
        } else {
            dispatch(register({ name, email, password,  card_name, card_number, exp_month, exp_year, cvc }));
        }
    };



    // JSX
    return (
        <div className="register">
            <div className="container">
                <h2>Register</h2>
                    <Alert />
                    <form className="col s12" onSubmit={onSubmit}>
                        <div id="step1">
                            <div className="row">
                                <div className="input-field col s12 m6">
                                <i className="material-icons prefix">account_box</i>
                                    <input 
                                        id="name" 
                                        type="text" 
                                        placeholder="Name"
                                        className="validate" 
                                        name="name"
                                        value={name}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="input-field col s12 m6">
                                <i className="material-icons prefix">email</i>
                                    <input 
                                        id="email" 
                                        type="email" 
                                        className="validate"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m6">
                                    <i className="material-icons prefix">network_locked</i>
                                    <input 
                                        id="password" 
                                        type="password" 
                                        className="validate" 
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="input-field col s12 m6">
                                    <i className="material-icons prefix">lock</i>
                                    <input
                                        id="password2" 
                                        type="password" 
                                        className="validate" 
                                        placeholder="Confirm Password"
                                        name="password2"
                                        value={password2}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <br/>
                            </div>
                        </div>

                        <div id="step2" className="col s12"> 
                        <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">people</i>
                                    <input 
                                        id="card_name" 
                                        type="text" 
                                        className="validate" 
                                        placeholder="Name on Card"
                                        name="card_name"
                                        value={card_name}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">credit_card</i>
                                    <input 
                                        id="card_number" 
                                        type="text" 
                                        className="validate" 
                                        placeholder="Card Number"
                                        name="card_number"
                                        value={card_number}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="input-field col s2">
                                    <input 
                                        id="exp_month" 
                                        type="text" 
                                        className="validate" 
                                        placeholder="MM"
                                        name="exp_month"
                                        maxLength="2"
                                        value={exp_month}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="input-field col s2">
                                    <input 
                                        id="exp_year" 
                                        type="text" 
                                        className="validate" 
                                        placeholder="YYYY"
                                        name="exp_year"
                                        maxLength="4"
                                        value={exp_year}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="input-field col s2">
                                    <input 
                                        id="cvc" 
                                        type="text" 
                                        className="validate" 
                                        placeholder="CVC"
                                        name="cvc"
                                        maxLength="3"
                                        value={cvc}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <button className="btn accent-1 white text-wizard-purple" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                            <div className="row">
                                <p>By clicking the "Submit" button, you are creating a Seryph account, and you agree to Seryph's Terms and Conditions and Privacy Policy.</p>
                            </div>
                        </div>
                    </form>
            


                    <div className="row">
                        <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s3"><a className="active" href="#step1">Step 1: Information</a></li>
                            <li className="tab col s3"><a href="#step2">Step 2: Checkout</a></li>
                        </ul>
                        </div>
                    </div>
        
                
               
            </div>
        </div>
    )
}


  
export default Register;
