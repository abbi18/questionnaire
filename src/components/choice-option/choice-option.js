import React from 'react';
import PropTypes from 'prop-types';
import './choice-option.css';

export function ChoiceOption(props) {
  return (
    <div>
    <li className="choiceOption">
      <input
        type="radio"
        className="cradioCustomButton"
        name="cradioGroup"
        checked={props.answerContent === props.answer}
        id={props.answerContent}
        value={props.answerContent}
        onChange={props.onChoiceSelected}
      />
      <label className="cradioCustomLabel" htmlFor={props.answerContent}>
        {props.answerContent}
      </label>
    </li>
    <div className="choiceOption"/>
    </div>
  );
}

ChoiceOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
  onChoiceSelected: PropTypes.func.isRequired
};