import React from 'react';
import moment from 'moment';
import '../articles.css';

const formatDate = (date) => {
    return moment(date).format(' DD-MM-YYYY')
}

const PostData = (props) => {
    return (
        <div className="articlePostData">
            <div>
                Date:
                <span>
                    <strong>{formatDate(props.data.date)}</strong> 
                </span>
            </div>
            <div>
                Author:
                <span>
                     <strong>{props.data.author}</strong> 
                </span>
            </div>
        </div>
    )
}

export default PostData;