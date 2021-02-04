//we will replace the hook state in App.js with store state. create initial state
const initialState = {
  age: 21
};


//create a reducer which is a function. you have to give the state parameter a default
//take the state and based on the action, change the state and return it. like we did with onAgeUp and onAgeDown functions
function reducer(state = initialState, action) { 
  //create a copy of the state
  const newState = { ...state };

  if (action.type === 'AGE_UP') { 
    newState.age++;
  }

  if (action.type === 'AGE_DOWN') { 
    newState.age--;
  }

  return newState;
};



//export reducers to use it in other components


export default reducer;


