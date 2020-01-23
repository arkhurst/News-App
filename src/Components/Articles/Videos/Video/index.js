import React, { Component } from 'react';
import {firebaseDB, firebaseLooper,firebaseTeams, firebaseVideos} from '../../../../firebase';
import '../../articles.css';
import Header from './header';
import VideosRelated from '../../../Widget/VideosList/VideosRelated/videosRelated';

class Video extends Component {

    state = {
        article: [],
        team: [],
        teams: [],
        related: []
    }

    componentWillMount(){
       firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value')
           .then((snapshot) => {
               let article = snapshot.val()

               firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value')
                   .then((snapshot) => {
                       let team = firebaseLooper(snapshot)
                       this.setState({
                           article,
                           team
                       })
                       this.getRelated()
                   })
                   
           })
    }

    getRelated = () => {
        firebaseTeams.once('value')
            .then((snapshot) => {
                const teams = firebaseLooper(snapshot)

                firebaseVideos
                .orderByChild('team')
                .equalTo(this.state.article.team)
                .limitToFirst(3).once('value')
                .then((snapshot) => {
                    const related = firebaseLooper(snapshot);
                    this.setState({
                        teams,
                        related
                    })
                })
            })
        // axios.get(`${URL}/teams`)
        //    .then(response => {
        //        let teams = response.data;
        //        axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
        //          .then( response => {
        //              this.setState({
        //                 teams,
        //                 related: response.data
        //              })
        //          })
        //    })
    }

    render(){

        const article = this.state.article;
        const team = this.state.team;
        return(
            <div>
                <Header teamData={team[0]}/>
                <div className="videoWrapper">
                    <h1>{article.title}</h1>
                    <iframe
                     title="videoPlayer"
                     width="100%"
                     height="300%"
                     src={`https://www.youtube.com/embed/${article.url}`}
                    >

                    </iframe>
                </div>
                <VideosRelated
                  data={this.state.related}
                  teams={this.state.teams}
                />
            </div>
        )
    }
}

export default Video;