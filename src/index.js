import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';


//All components
import Routes from './routes'

const App =  () => {
    return(
        <div>
             <BrowserRouter>
                    <Routes/>
             </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));