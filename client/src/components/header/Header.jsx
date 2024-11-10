import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../data/auth/auth.actions';


 const Header = ({ auth: { isAuthenticated, loading, user }, logout }) => {

    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
      });


    const authLinks = (
            <Fragment>
            {user ? user.daemon === '7sevens' ? <li><Link className="grey-text" to="/admin">Admin</Link></li> : null : null  }
            <li>
                <Link onClick={logout} className="grey-text" to="#">Logout</Link>
            </li>
            </Fragment>
      );



      const authMiniLinks = (
        <ul className="tabs tabs-transparent white">
            <li className="tab"><Link className="grey-text" to="/dashboard/information/0">Information</Link></li>
            {/* <li className="tab"><Link className="grey-text" to="/etheria">Shop</Link></li> */ }
            {/*user ? user.plan === 'platinum' ? <li className="tab"><Link className="grey-text" to="/dashboard/log">Log</Link></li> : null : null  */ }
            {user ? user.plan === 'platinum' ? <li className="tab"><Link className="grey-text" to="/dashboard/help">Appointments</Link></li> : null : null   }
            <li className="tab"><Link className="grey-text" to="/dashboard/account">Account</Link></li> 
            {/* <li className="tab disabled"><a className="grey-text" href="#test3">Profile</a></li> */ }
        </ul>
      );


      const guestLinks = (
        <Fragment>
            <li>
            <a className="grey-text" target="blank" href="/o">Apply</a>
            </li>
            <li>
                <Link className="grey-text" to="/login">Login</Link>
            </li>
        </Fragment>
      );



    return (
        <div>
           <nav className="nav-extended white">
                <div className="nav-wrapper white">
                    <Link to="/" style={{color: "black", marginLeft: "3vw", marginTop: "1vh"}} className="brand-logo">Seryph</Link>
                    <a style={{color: "black"}} href="#nav" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right white hide-on-med-and-down">
                        {!loading && (
                            <Fragment>
                                {isAuthenticated ? authLinks : guestLinks}
                            </Fragment>
                        )}
                    </ul>
                </div>
                <div className="nav-content white">
                    {!loading && (
                        <Fragment>
                            {isAuthenticated ? authMiniLinks : null}
                        </Fragment>
                    )}
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {isAuthenticated ? authLinks : guestLinks}
            </ul>

        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
  });

  
export default connect(mapStateToProps,{ logout })(Header);
  