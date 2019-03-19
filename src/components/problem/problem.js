import React from 'react';
import PropTypes from 'prop-types';
// import { CSSTransitionGroup } from 'react-transition-group';
import { Question, QuestionCount, AnswerOption } from 'components';
import './problem.css';

export function Problem(props) {

  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.id}
        answerContent={key.answer}
        answerId={key.id}
        answer={''}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    // <CSSTransitionGroup
    //   className="container"
    //   component="div"
    //   transitionName="fade"
    //   transitionEnterTimeout={800}
    //   transitionLeaveTimeout={500}
    //   transitionAppear
    //   transitionAppearTimeout={500}
    // >
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId+1} total={props.questionTotal} />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
    // </CSSTransitionGroup>
  );
}

Problem.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Problem;