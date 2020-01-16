import React from 'react';
import '../articles.css';

const PostData = (props) => {
    return (
        <div className="articlePostData">
            <div>
                Date:
                <span>
                    <strong>{props.data.date}</strong> 
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