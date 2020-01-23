import React from 'react';

import Home from './Components/Home/home';
import Layout from './hoc/Layout/layout';

import NewsArticle from './Components/Articles/News/Post/index';
import VideoArticle from './Components/Articles/Videos/Video/index';
import NewsMain from './Components/Articles/News/Main/index';
import VideosMain from './Components/Articles/Videos/VideoMain/videoMain';
import SignIn from './Components/Sign-In/sign-in';
import Dashboard from './Components/Dashboard/dashboard';

import PrivateRoute from './Components/AuthRoutes/privateRoute';
import PublicRoute from './Components/AuthRoutes/publicRoute';

const Routes = (props) => {
        return(
            <div>
                <Layout user={props.user}>
                     <PublicRoute {...props} restricted={false} path='/' exact component={Home}/>   
                     <PublicRoute {...props} restricted={false} path='/news' exact component={NewsMain}/>
                     <PublicRoute {...props} restricted={false} path='/play' exact component={VideosMain}/>
                     <PublicRoute {...props} restricted={false} path='/articles/:id' exact component={NewsArticle}/> 
                     <PublicRoute {...props} restricted={false}  path='/videos/:id' exact component={VideoArticle}/>
                     <PublicRoute {...props} restricted={true} path='/sign-in' exact component={SignIn}/>
                     <PrivateRoute {...props} path='/dashboard' exact component={Dashboard}/>              
                </Layout>     
            </div>
        )
   
}

export default Routes;