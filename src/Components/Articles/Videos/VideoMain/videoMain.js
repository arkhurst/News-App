import React from 'react';
import VideosList from '../../../Widget/VideosList/videosList';

const videosMain = () => {
    return(
        <div>
            <VideosList
              type="card"
              title={false}
              loadmore={true}
              start={0}
              amount={8}
            />
        </div>
    )
}

export default videosMain;