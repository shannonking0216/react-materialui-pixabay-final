import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Helloooooo World</h1>
                <h2>This is going to work, this time around. </h2>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))