import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, subtract } from '../actions/mathActions';
import { setName, setAge } from '../actions/userActions';
import { getName, getAge } from '../selectors/userSelectors';
import { getValue } from '../selectors/mathSelectors';



class Home extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.setName}>Set Name</button>
                <div>{this.props.name}</div>
                <br />
                <button onClick={this.props.setAge}>Set Age</button>
                <div>{this.props.age}</div>
                <br />
                <button onClick={this.props.add}>Add value</button>
                <div>{this.props.value}</div>
                <br />
                <button onClick={this.props.subtract}>Subtract value</button>
                <div>{this.props.value}</div>
                <br />
            </div>
        );
    }
}

const makeId = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

const mapStateToProps = (state) => {
    return {
        name: getName(state),
        age: getAge(state),
        value: getValue(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: () => dispatch(setName(makeId())),
        setAge: () => dispatch(setAge(Math.random())),
        add: () => dispatch(add(Math.random())),
        subtract: () => dispatch(subtract(Math.random())),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
