import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.scss';

const TextInput = ({ onChangeHandler }) => (
    <input type="text" className={styles.general} onChange={onChangeHandler} />
);

export default TextInput;

