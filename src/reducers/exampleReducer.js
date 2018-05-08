import actions from '../actions'

const initialState = {
  counter: 0
};

const exampleReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case actions.exampleActions.INCREMENT:
      return {
        ...state, 
        counter: state.counter + 1
      }

    case actions.exampleActions.DECREMENT:
      return {
        ...state, 
        counter: state.counter - 1
      }

    default:
      return initialState
  }
};

export default exampleReducer;

