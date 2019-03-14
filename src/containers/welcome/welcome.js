import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../media/logo.svg';
import { getQuestions } from '../../api/questionList';
import './Welcome.css';

class Welcome extends Component {

    componentDidMount() {
        getQuestions(10, "hard", "multiple");
    }

    render() {
        return (
            <div className="App">
                <div className="App-header" >
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>React Quiz</h2>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
