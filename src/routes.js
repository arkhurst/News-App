import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Home from './Components/Home/home';
import Layout from './hoc/Layout/layout';

import NewsArticle from './Components/Articles/News/Post/index';
import VideoArticle from './Components/Articles/Videos/Video/index';
import NewsMain from './Components/Articles/News/Main/index';
import VideosMain from './Components/Articles/Videos/VideoMain/videoMain';

class Routes extends Component {
    render(){
        return(
            <div>
                <Layout>
                     <Route path='/' exact component={Home}/>   
                     <Route path='/news' exact component={NewsMain}/>
                     <Route path='/play' exact component={VideosMain}/>
                     <Route path='/articles/:id' exact component={NewsArticle}/> 
                     <Route path='/videos/:id' exact component={VideoArticle}/>
                </Layout>     
            </div>
        )
    }
}

export default Routes;