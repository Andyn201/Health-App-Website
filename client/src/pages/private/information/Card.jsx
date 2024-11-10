import React from 'react';
import main from '../../../assets/home_page/main.png';
import {Link} from 'react-router-dom';

const Card = ({title, description, course}) => {
    return (   
        <Link to={`/dashboard/information/${course}/0`}>
            <div class="card">
                <div class="card-image">
                    <img alt="course" src={main} />
                    <span class="card-title">{title}</span>
                </div>
                <div class="card-action">
                <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card
