import React, {useEffect, useState} from 'react';
import Alert from '../../../components/alert/Alert';
import Spinner from '../../../components/spinner/Spinner';
import M from 'materialize-css';

// Redux
import {connect} from 'react-redux';
import {updateBilling, upgradePlan, downgradePlan} from '../../../data/auth/auth.actions';
import {deleteAccount, loadUser} from '../../../data/auth/auth.actions';


const Account = ({auth, deleteAccount, updateBilling, upgradePlan, downgradePlan}) => {

    // Initialize Materialize Selectors
    useEffect(() => {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
      });


      // Toggle Update Billing Form
      const [showBilling, setshowBilling] = useState(false);
      const onClickShowBilling = () => setshowBilling(!showBilling);


    // Toggle Update Plan Form
    const [showPlan, setshowPlan] = useState(false);
    const onClickShowPlan = () => setshowPlan(!showPlan);


    const [formData, setFormData] = useState({
        card_name: '',
        card_number: '',
        exp_month: '',
        exp_year: '',
        cvc: '',
        plan: ''
      });
      
    const {  card_name, card_number, exp_month, exp_year, cvc, plan } = formData;

    const onChange = async (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const onSubmitBilling = e => {
        e.preventDefault();
        updateBilling({card_name, card_number, exp_month, exp_year, cvc});
        setFormData({
            card_name: '',
            card_number: '',
            exp_month: '',
            exp_year: '',
            cvc: '',
            plan: ''
        });
        window.location.reload(); 
      };
      

      const onSubmitPlan = async e => {
        e.preventDefault();
        if(plan === 'free'){
            if(auth.user.plan === 'free'){
                return alert('Already On The Free Plan');
            }
            else {
                await downgradePlan();
            }
        }
        else if (plan === 'platinum'){
            if(auth.user.plan === 'platinum'){
                return alert('Already On The Platinum Plan');
            }
            else if(!auth.user.StripeType){
                return alert('Please Update Billing');
            }
            else {
                await upgradePlan();
                window.location.reload(); 
            }
        }
        else {
            alert('Not An Option');
        }
      };

    return (
        <div>
        {!auth ? <Spinner /> :
        <div className="container">
            <div className="row center">
                <h1>My Account</h1>
                <Alert />
                <hr/>
                <iframe style={{width:"100%", height: "70vh"}} title="Platinum" src="https://player.vimeo.com/video/626486562?h=135e63706f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <ul className="collection">
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}} className="material-icons circle text-wizard-purple white">account_circle</i>
                    <span className="title">Name</span>
                    <p>{auth.user.name}</p>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}} className="material-icons circle text-wizard-purple white">email</i>
                    <span className="title">Email</span>
                    <p>{auth.user.email}</p>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}} className="material-icons circle text-wizard-purple white">attach_money</i>
                    <span className="title">Billing</span>
                    <p>{ auth.user.StripeType ? auth.user.StripeType + ': xxx-xxx-' + auth.user.StripeLast4 : 'None'}</p>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}} className="material-icons circle text-wizard-purple white">book</i>
                    <span className="title">Plan</span>
                    <p>{auth.user.plan === 'platinum' ? 'platinum plan' : 'free plan | upgrade to platinum below'}</p>
                </li>
                <li className="collection-item avatar">
                    <i style={{border: "1px solid grey"}} className="material-icons circle text-wizard-purple white">autorenew</i>
                    <p style={{cursor: "pointer"}} className="title blue-text" onClick={onClickShowBilling} >Update Billing</p>
                    { showBilling ?
                        <form onSubmit={onSubmitBilling}>
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
                                <button className="btn accent-1 waves-effect waves-light text-wizard-purple white" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </form>

                    : null
                    }
                </li>
                <li id="premium" className="collection-item avatar">
                    <i style={{border: "1px solid grey"}} className="material-icons circle text-wizard-purple white">brightness_3</i>
                    <p style={{cursor: "pointer"}} className="title blue-text" onClick={onClickShowPlan}>Update Plan</p>
                    {
                        showPlan ? 
                        <form onSubmit={onSubmitPlan}>
                            <div className="input-field">
                                <select name="plan" value={plan}  onChange={onChange}>
                                    <option>Choose An Option</option>
                                    <option value="free">Free</option>
                                    <option value="platinum">Platinum ($2,500 per year)</option>
                                </select>
                            </div>
                            <button className="btn accent-1 waves-effect waves-light text-wizard-purple white" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                            </button>              
                        </form>

                        : null
                    }
                </li>

                <li className="collection-item avatar">
                    <i className="material-icons circle red">cancel</i>
                    <p className="title">Delete Account</p>
                    <button className="link-button" onClick={deleteAccount}>Delete Account</button>
                </li>
            </ul>
        </div>
        }
    </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, {deleteAccount, updateBilling, upgradePlan, downgradePlan, loadUser})(Account);