import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';

import './slider.css'

const SliderTemplate = (props) => {
    
    let template = null;
    const settings = {
        dots:true,
        infinite:true,
        arrows:false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    }

    switch(props.type){
         case ('featured') :
             template = props.data.map((item,i) => {
                 return (
                     <div key={i}>
                          <div className="featured_item"> 
                              <div className="featured_image a"
                                style={{
                                    background: `url(../images/articles/${item.image})`
                                }}
                              >
                               <Link to={`/articles/${item.id}`}>
                                  <div className="caption">
                                      {item.title}
                                  </div>
                                </Link>
                              </div>
                          </div>
                     </div>
                 )
             })
             break;
         default :
           template = null;    
    }
    return (
        <div>
            <Slick {...settings}>
                {template}
            </Slick>
        </div>
    )
}

export default SliderTemplate;