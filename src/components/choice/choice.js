import React from 'react';
import PropTypes from 'prop-types';
import { Question, ChoiceOption } from 'components';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
};

const textStyle = {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start'
};

export function Choice(props) {

    function renderChoiceOptions(key) {
        return (
            <ChoiceOption
                key={key.id}
                answerContent={key.type}
                onChoiceSelected={props.onChoiceSelected}
            />
        );
    }

    return (
        <div>
            <Question content={props.header} textStyle={textStyle}/>
            <ul style={divStyle}>
                {props.choiceOptions.map(renderChoiceOptions)}
            </ul>
        </div>
    );
}

Choice.propTypes = {
    header: PropTypes.string.isRequired,
    choiceOptions: PropTypes.array.isRequired,
    onChoiceSelected: PropTypes.func.isRequired,
}

export default Choice;