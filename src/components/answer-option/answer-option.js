import React from 'react';
import PropTypes from 'prop-types';
import './answer-option.css';

export function AnswerOption(props) {
  return (
    <div>
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerContent === props.answer}
        id={props.answerContent}
        value={props.answerContent}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerContent}>
        {props.answerContent}
      </label>
    </li>
    <div className="answerOption"/>
    </div>
  );
}

AnswerOption.propTypes = {
  answerId: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};