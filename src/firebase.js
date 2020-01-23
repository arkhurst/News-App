import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOn0bSG3HG9tnrGwX6rw4wMlQsMPC-yko",
    authDomain: "news-app-29395.firebaseapp.com",
    databaseURL: "https://news-app-29395.firebaseio.com",
    projectId: "news-app-29395",
    storageBucket: "news-app-29395.appspot.com",
    messagingSenderId: "368247998217",
    appId: "1:368247998217:web:f109deb3ad3cae8ad275d8"
  };
 
  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot) => {
    const data = []
    snapshot.forEach(childSnapshot => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        });
    });  
    return data;
  }

  export{
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseTeams,
      firebaseVideos,
      firebaseLooper
  }