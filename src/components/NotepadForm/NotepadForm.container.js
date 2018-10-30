import { connect } from 'react-redux';
import NotepadFrom from './NotepadForm';
import { saveNotepad } from '../../actions/notepad.actions';

const mapDispatchToProps = {
    saveNotepad,
};

export default connect(null, mapDispatchToProps)(NotepadFrom);