import React from 'react';
import {  useSelector } from 'react-redux';
import { InlineWidget } from "react-calendly";

const Coaching = () => {




    const auth = useSelector((state) => state.auth);




    if(auth.user.plan === 'platinum' ){
        return (
            <div className="container">
            <div className="row">
                <div className="col s12 center">
                    <h2>Book An Appointment</h2>
                    <hr/>      
                    <InlineWidget url="https://calendly.com/seryph-766/appointment1" />

                </div>
            </div>
        </div>

        )
    }
    else {
        return null
    }
}

export default Coaching
