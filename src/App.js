import React, { Component } from 'react';
import Button from './components/Button';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                Dictionary
                <Button
                    label="Click 1"
                    viewType="primary"
                />
                <Button
                    label="Click 2"
                    viewType="secondary"
                />
                <Button
                    label="Click 3"
                    viewType="danger"
                />
            </div>
        );
    }
}

export default App;
