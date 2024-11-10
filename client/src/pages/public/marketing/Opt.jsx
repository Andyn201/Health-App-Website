import React from 'react';
import { InlineWidget } from "react-calendly";
import opt_img from '../../../assets/marketing/opt2.png';



const Opt = () => {
  return (
    <div className="home opt">
        <section className="section center">
            <img style={{width: "7vw"}} src={opt_img} alt="ballerina" />
            <InlineWidget url="https://calendly.com/seryph-766/free-marketing-trial-clone?primary_color=9d00ff" />
        </section>
    </div>
  )
}

export default Opt;