import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {firebase} from '../../../firebase';

import './sideNav.css'
const SideNavItems = (props) => {
    const items = [
      {
        icon:'home',
        text: 'Home',
        link: '/',
        login:''
      },
      {
        icon:'fas fa-file-alt',
        text: 'News',
        link: '/news',
        login:''
      },
      {
        icon:'play',
        text: 'Play',
        link: '/play',
        login:''
      },
      {
        icon:'fas fa-sign-in-alt',
        text: 'Dashboard',
        link: '/dashboard',
        login:false
      },
      {
        icon:'fas fa-sign-in-alt',
        text: 'Sign-in',
        link: '/sign-in',
        login:true
      },
      {
        icon:'fas fa-sign-out-alt',
        text: 'Sign-out',
        link: '/sign-out',
        login:false
      }
    ]

    const element = (item,i) => (
        <div key={i} className="option">
           <Link className="option a" to={item.link}>
              <FontAwesome  name={item.icon}/>
             {item.text}
           </Link>
        </div>
      )
    

    const restricted = (item, i) => {
       let template = null;

      if(props.user === null && item.login) {
          template = element(item, i)
      }

      if(props.user !== null && !item.login){
          if(item.link === '/sign-out'){
             template = (
              <div key={i} className="option"
                  onClick={() => {
                      firebase.auth().signOut()
                         .then(() => {
                             props.history.push('/')
                         })
                  }}
              >
                      <FontAwesome  name={item.icon}/>
                      {item.text}                
             </div>
             )
          }else{
            template = element(item, i)
          }
      }

       return template;
    }

    const showItems = () => {
        return items.map( (item, i) => {
           return item.login !=='' ?
            restricted(item, i)
           :
             element(item,i) 
        })
    }

    return (
           <div>
              {showItems()}
           </div> 
    )
}

export default withRouter(SideNavItems);