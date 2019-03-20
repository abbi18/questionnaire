import React from 'react';
import PropTypes from 'prop-types';
import './question.css';

export function Question(props) {
  return <h2 className="question">
    {props.content.replace(/&quot;/g,'"')
                  .replace(/&#039;/g,"'")
                  .replace(/&ocirc;/g, "ô")}
  </h2>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};
