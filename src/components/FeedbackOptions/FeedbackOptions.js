import s from './FeedbackOptions.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <button className={s.button} key={option} onClick={onLeaveFeedback}>
      {option}
    </button>
  ));

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
