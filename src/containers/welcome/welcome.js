import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Choice, Header } from 'components';
import { getEntryOrExit, getCorrectUserAnswers, getTotalQsRequested } from 'selectors';
import './welcome.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
};

const difficultyOption = [{id: 0, type: "easy"},
                          {id: 1, type: "medium"},
                          {id: 2, type: "hard"},
                          {id: 3, type: "whatever"}];

const qsTypeOption = [{id: 0, type: "binary"},
                          {id: 1, type: "multiple"},
                          {id: 2, type: "whatever"}];

const quizSizeOption = [{id: 0, type: "5"},
                          {id: 1, type: "10"},
                          {id: 2, type: "20"},
                          {id: 3, type: "whatever"}];

function handledifficultyOptionSelected(event) {
    if (event) {
        console.log(event);
    }
}

class welcome extends Component {
    render() {
        return (
            <div className="App">
                <Header content={"Welcome to the Trivia Challenge!!"}/>
                <div>
                    <Choice 
                        header={"Question Type:"}
                        choiceOptions={qsTypeOption}
                        onChoiceSelected={handledifficultyOptionSelected}
                    />
                    <Choice 
                        header={"Difficulty:"}
                        choiceOptions={difficultyOption}
                        onChoiceSelected={handledifficultyOptionSelected}
                    />
                    <Choice 
                        header={"Exected Quiz Size:"}
                        choiceOptions={quizSizeOption}
                        onChoiceSelected={handledifficultyOptionSelected}
                    />
                    <br/>
                    <div style={divStyle}>
                        <Link to="/main" className="btn btn-secondary" onClick={this.props.clearState}>
                            Skip This
                        </Link>
                        <Link to="/main" className="btn btn-primary" onClick={this.props.clearState}>
                            Let's Start
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    entry: getEntryOrExit(state),
    correctAnswers: getCorrectUserAnswers(state),
    totalQs: getTotalQsRequested(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(welcome);