import React from 'react';
import {getCurrentYear} from '../../utils/getCurrentDate';

 const Footer = () => {

    return (
        <footer style={{background: "transparent"}} className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="grey-text">Health</h5>
                <p className="grey-text">Manage your health and fitness online without the hassle of going to the gym.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="grey-text">Links</h5>
                <ul style={{display: "inline-block", marginRight: "1vw"}}>
                  <li><a className="grey-text" href="/about">About</a></li>
                  <li><a className="grey-text" href="/marketing">Marketing</a></li>
                  <li><a className="grey-text" href="/samples">Samples</a></li>
                </ul>
                <ul style={{display: "inline-block", marginLeft: "1vw"}}>
                  <li><a className="grey-text" href="/contact">Contact</a></li>
                  <li><a className="grey-text" target="blank" href="https://seryph.org/home/privacy_policy">Privacy Policy</a></li>
                  <li><a className="grey-text" target="blank" href="https://seryph.org/home/terms_use">Terms and Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            <p className="grey-text">© {getCurrentYear()} Seryph</p>
            </div>
          </div>
        </footer>
    )
}

export default Footer;