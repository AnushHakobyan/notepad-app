import React, { Component } from 'react';
import Button from '../Button';
import TextInput from '../TextInput';

class NotepadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notepadTitle: '',
        };
    }

    updateNotepadTitle = (input) => {
        this.setState({
            notepadTitle: input,
        })
    };

    handleOnChange = (event) => {
        this.updateNotepadTitle(event.target.value);
    };

    handleOnClick = () => {
        this.props.saveNotepad(this.state.notepadTitle);
    };

    render() {
        const { saveNotepad } = this.props;
        return (
            <div name="notepad">
                <TextInput onChangeHandler={this.handleOnChange} />
                <Button label="Save" onClickHandler={this.handleOnClick} viewType="secondary" />
            </div>
        );
    }
}

export default NotepadForm;