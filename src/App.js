import React, { Component } from 'react';
import NotepadFormContainer from './components/NotepadForm';
import './App.scss';


class App extends Component {
    render() {
        return (
            <div className="App row">
                <div className="medium-6 small-12 column">
                    <NotepadFormContainer />
                </div>
            </div>
        );
    }
}

export default App;
