import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import logo from 'media/logo.svg';
import { Question } from 'components';
import { getEntryOrExit, getCorrectUserAnswers, getTotalQsRequested } from 'selectors';
import './welcome.css';


class welcome extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header" >
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to the Trivia Challenge!!</h2>
                </div>
                <div>
                    <br/>
                    <Question content={"You'll be presented with 10 multiple choice Questions."} />
                    <br/>
                    <Question content={"Can you score 100%?"} />
                    <br/>
                    <Link to="/main" className="btn btn-primary">
                        Let's find out
                    </Link>
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