//we will replace the hook state in App.js with store state. create initial state
const initialState = {
  age: 21,
  history: []
};


//create a reducer which is a function. you have to give the state parameter a default
//take the state and based on the action, change the state and return it. like we did with onAgeUp and onAgeDown functions
function reducer(state = initialState, action) { 
  //create a copy of the state
  const newState = { ...state };

  if (action.type === 'AGE_UP') { 
    // newState.age++;

    return {
      ...state,
      age: state.age + action.value,
      history: state.history.concat({id: Math.random(), age: state.age + action.value})
    }

  }

  if (action.type === 'AGE_DOWN') { 
    // newState.age--;

    return {
      ...state,
      age: state.age - action.value,
      history: state.history.concat({id: Math.random(), age: state.age - action.value})
    }
  }

  if (action.type === 'DEL_ITEM') { 

    return {
      ...state,
      history: state.history.filter((el) => el.id !== action.key)
    }
  }

  return newState;
};



//export reducers to use it in other components


export default reducer;


