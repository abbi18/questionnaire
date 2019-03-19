import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from 'media/logo.svg';
import { getQuestions } from 'api/question-list';
import { Problem } from 'components';
import { getAnswer,
    getAnswerOptions,
    getQuestion,
    getTotalQuestions,
    getIndex
} from 'selectors';
import { increaseIndex,
    modifyCorrectAnswerCount
} from 'actions';
import './main.css';

class main extends Component {

    constructor(props) {
        super(props);
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentDidMount() {
        getQuestions(3, "easy", "boolean");
    }

    handleAnswerSelected(event) {
        if (event.target.value === this.props.answer) {
            this.props.rightAnswer();
        }
        if (this.props.index < this.props.totalQuestion-1) {
            this.props.displayNextQs();
        } else {
            this.props.history.push('/');
        }
      }

    render() {
        return (
            <div className="App">
                <div className="App-header" >
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Questionnaire</h2>
                </div>
                <Problem
                    answer={this.props.answer}
                    answerOptions={this.props.answerOptions}
                    questionId={this.props.index}
                    question={this.props.question}
                    questionTotal={this.props.totalQuestion}
                    onAnswerSelected={this.handleAnswerSelected}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    totalQuestion: getTotalQuestions(state),
    answer: getAnswer(state),
    answerOptions: getAnswerOptions(state),
    question: getQuestion(state),
    index: getIndex(state)
});

const mapDispatchToProps = (dispatch) => ({
    displayNextQs() {
        dispatch(increaseIndex());
    },
    rightAnswer() {
        dispatch(modifyCorrectAnswerCount());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(main);
