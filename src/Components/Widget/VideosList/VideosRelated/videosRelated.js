import React from 'react';
import '../videosList.css';
import VideosTemplate from '../videosTemplate';

const VideosRelated = (props) => {
    return(
        <div className="relatedWrapper">
            <VideosTemplate
             data={props.data}
             teams={props.teams}
            />
        </div>
    )
}

export default VideosRelated;