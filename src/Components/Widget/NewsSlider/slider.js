import React, { Component } from 'react';
import SliderTemplates from './slider_template';

import {firebaseArticles, firebaseLooper} from '../../../firebase'


class NewsSlider extends Component {

    state = {
        news : []
    }

    componentWillMount() {
        firebaseArticles.limitToFirst(3).once('value')
           .then((snapshot) => {
               const news = firebaseLooper(snapshot)
               this.setState({
                   news
               })
           })
    }
    render(){
        return(
           <SliderTemplates data={this.state.news} type={this.props.type}/>
        )
    }
}
export default NewsSlider;