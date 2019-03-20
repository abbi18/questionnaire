import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import logo from 'media/logo.svg';
import { Question, QuestionStatus } from 'components';
import { getCorrectUserAnswers, getTotalQsRequested, getQuestionAnswerList } from 'selectors';
import { clearAPIState, clearLocalState } from 'actions';
import './result.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
};

class result extends Component {

    renderQsList(key) {
        return (
            <QuestionStatus
                key={key.id}
                question={key.question}
                answerStatus={key.correctly_answered}
                answer={key.answer}
            />
        );
    }

    render() {
        return (
            <div className="App">
                <div className="App-header" >
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Congratulations, you completed the challenge!!</h2>
                </div>
                <div style={divStyle}>
                    <br/>
                    <Question content={"You scored " + this.props.correctAnswers + " of " + this.props.totalQs} />
                    <br/>
                    <Link to="/" className="btn btn-primary" onClick={this.props.clearState}>
                        Would you like to replay?
                    </Link>
                </div>
                <ul>
                    {this.props.qsList.map(this.renderQsList)}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    correctAnswers: getCorrectUserAnswers(state),
    totalQs: getTotalQsRequested(state),
    qsList: getQuestionAnswerList(state),
});

const mapDispatchToProps = (dispatch) => ({
    clearState: () => {
        dispatch(clearAPIState());
        dispatch(clearLocalState());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(result);