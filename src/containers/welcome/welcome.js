import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Choice, Header } from 'components';
import { getCorrectUserAnswers, getTotalQsRequested, getType, getDifficulty } from 'selectors';
import './welcome.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
};

const difficultyOption = [{id: 0, type: "easy"},
                          {id: 1, type: "medium"},
                          {id: 2, type: "hard"}];

const qsTypeOption = [{id: 0, type: "boolean"},
                          {id: 1, type: "multiple"},
                          {id: 2, type: "mix it up"}];

const quizSizeOption = [{id: 0, type: "5"},
                          {id: 1, type: "10"},
                          {id: 2, type: "20"}];

class welcome extends Component {

    handleDifficultySelected(event) {
        if (event) {
            console.log(event);
        }
    }

    handleTypeSelected(event) {
        if (event) {
            console.log(event);
        }
    }

    handleSizeSelected(event) {
        if (event) {
            console.log(event);
        }
    }

    render() {
        return (
            <div className="App">
                <Header content={"Welcome to the Trivia Challenge!!"}/>
                <div>
                    <Choice 
                        header={"Question Type:"}
                        choiceOptions={qsTypeOption}
                        onChoiceSelected={this.handleTypeSelected}
                        selected={this.props.typeSelected}
                    />
                    <Choice 
                        header={"Difficulty:"}
                        choiceOptions={difficultyOption}
                        onChoiceSelected={this.handleDifficultySelected}
                        selected={this.props.difficultySelected}
                    />
                    <Choice 
                        header={"Exected Quiz Size:"}
                        choiceOptions={quizSizeOption}
                        onChoiceSelected={this.handleSizeSelected}
                        selected={this.props.totalQsSelected.toString()}
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
    correctAnswers: getCorrectUserAnswers(state),
    totalQsSelected: getTotalQsRequested(state),
    typeSelected: getType(state),
    difficultySelected: getDifficulty(state)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(welcome);