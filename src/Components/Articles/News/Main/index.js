import React from 'react';
import NewsSlider from '../../../Widget/NewsSlider/slider';
import NewsList from '../../../Widget/NewsList/newList';

const NewsMain = () => {
    return(
        <div>
            <NewsSlider
               type='featured'
               settings={{dots:false}}
               start={0}
               amount={3}
            />
            <NewsList 
               type='cardMain'
               loadMore={true}
               start={3}
               amount={4}
            />
        </div>
    )
}

export default NewsMain;