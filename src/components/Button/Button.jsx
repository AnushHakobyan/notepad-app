import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

/**
 *
 * @param label - the title of the button
 * @param type - whether button is a submit or not
 * @param viewType - depending on this button gets its style
 */
const Button = ({ label, type, viewType, onClickHandler }) => (
    <button
        type={type}
        onClick={onClickHandler}
        className={styles[viewType]}
    >
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit']),
    viewType: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    onClickHandler: PropTypes.func,
};

Button.defaultProps = {
    type: 'button',
    viewType: 'secondary',
    onClickHandler: null,
};

export default Button;