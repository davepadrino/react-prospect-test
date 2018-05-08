import React from 'react';
import { connect } from "react-redux";
import {increment, decrement} from '../../actions/exampleAction'

const Home = props =>  
  <div>
    Home Page
    <button onClick={props.increment}>
        +
    </button>
    <button onClick={props.decrement}>
        -
    </button>
    {' '}
    {props.counter}
  </div>

const mS = state => ({
  counter: state.exampleReducer.counter,
});

const mD = {
  increment,
  decrement
};

export default connect(mS, mD)(Home);
