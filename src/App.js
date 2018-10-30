import React, { Component } from 'react';
import Button from './components/Button';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                Dictionary
                <Button
                    label="Click"
                />
            </div>
        );
    }
}

export default App;
