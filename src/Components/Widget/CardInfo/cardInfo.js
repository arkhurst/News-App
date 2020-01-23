import React from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

import './cardInfo.css'
const CardInfo = (props) => {

    const teamName = (teams, team) =>{
        let data = teams.find((item) => {
            return item.teamId === team
        });
        if(data){
            return data.name
        }
    }

    const formatDate = (date) => {
        return moment(date).format(' MM-DD-YYYY')
    }
    return (
        <div className="cardInfo">
            <span className="teamName">
                {teamName(props.teams,props.team)}
            </span>
            <span className="date">
                <FontAwesome name="fas fa-clock"/>
                {formatDate(props.date)}
            </span>
         </div>
    )
}

export default CardInfo;