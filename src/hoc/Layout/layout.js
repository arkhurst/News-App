import React, { Component } from 'react';

import './layout.css'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
class Layout extends Component {

    state ={
       showNav: false
    }

    toggleSidenav = (action) => {
          this.setState({
              showNav:action
          })
   } 
    render() {
        return (
            <div>
                <Header showNav={this.state.showNav}
                    onHideNav={() => { this.toggleSidenav(false)}}
                    onOpenNav={() => { this.toggleSidenav(true)}}
                />
               {this.props.children}
                <Footer/>
            </div>
        ) 
    }
}

export default Layout;