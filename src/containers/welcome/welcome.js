import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import logo from 'media/logo.svg';
import { Question } from 'components';
import { getEntryOrExit, getCorrectUserAnswers, getTotalQsRequested } from 'selectors';
import { renderResultNext } from 'actions';
import './welcome.css';
import { clearAPIState, clearLocalState } from '../../actions';

class welcome extends Component {

    renderContent() {
        if (this.props.entry) {
            return (
                <div>
                    <br/>
                    <Question content={"You'll be presented with 3 True/False Questions."} />
                    <br/>
                    <Question content={"Can you score 100%?"} />
                    <br/>
                    <Link to="/main" className="btn btn-primary" onClick={this.props.renderResultNext}>
                        Let's find out
                    </Link>
                </div>
            );
        } else {
            return (
                <div>
                    <br/>
                    <Question content={"You scored"} />
                    <Question content={this.props.correctAnswers + "/" + this.props.totalQs} />
                    <br/>
                    <Link to="/" className="btn btn-primary" onClick={this.props.clearState}>
                        Would you like to replay?
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header" >
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to the Trivia Challenge!!</h2>
                </div>
                {this.renderContent()}
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
    clearState: () => {
        dispatch(clearAPIState());
        dispatch(clearLocalState());
    },
    renderResultNext: () => dispatch(renderResultNext())
});

export default connect(mapStateToProps, mapDispatchToProps)(welcome);