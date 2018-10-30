import { combineReducers } from 'redux';
import notepads from './notepads.reducer';
import notepad from './notepad.reducer';

export default combineReducers({ notepads });