import React from 'react';
import Button from '../Button';
import TextInput from '../TextInput';

const NotepadForm = ({ saveNotepad }) => (
    <div name="notepad">
        <TextInput />
        <Button label="Save" onClickHandler={saveNotepad} viewType="secondary" />
    </div>
);

export default NotepadForm;