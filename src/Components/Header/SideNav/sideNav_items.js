import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './sideNav.css'
const SideNavItems = () => {
    const items = [
      {
        icon:'home',
        text: 'Home',
        link: '/'
      },
      {
        icon:'fas fa-file-alt',
        text: 'News',
        link: '/news'
      },
      {
        icon:'play',
        text: 'Play',
        link: '/play'
      },
      {
        icon:'fas fa-sign-in-alt',
        text: 'Sign-in',
        link: '/sign-in'
      },
      {
        icon:'fas fa-sign-out-alt',
        text: 'Sign-out',
        link: '/sign-out'
      }
    ]
    const showItems = () => {
        return items.map( (item, i) => {
          return (
            <div className="option">
               <Link className="option a" to={item.link}>
                  <FontAwesome  name={item.icon}/>
                 {item.text}
               </Link>
            </div>
          )
        })
    }

    return (
           <div>
              {showItems()}
           </div> 
    )
}

export default SideNavItems;