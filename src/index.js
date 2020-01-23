import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {firebase} from './firebase'

//All components
import Routes from './routes'

const App =  (props) => {
    return(
        <div>
             <BrowserRouter>
                    <Routes {...props} />
             </BrowserRouter> 
        </div>
    )
}

firebase.auth().onAuthStateChanged((user) => {
    ReactDOM.render(<App user={user} />, document.getElementById('root'));
})
