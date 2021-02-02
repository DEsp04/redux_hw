

//allow us to create a store. //store has state and reducer
const { createStore } = require('redux');


//create a default state
const initialState = {
  age: 21
}

//create reducer as a function. Reducer takes in state and action. If state is not provided, then equal it to the initialState object
//if we receive the type action like 'ADD' then add something
const myReducer = (state = initialState, action) => { 

  //to change the state we need to create a copy because state can't be mutated directly, it's immutable
  const newState = { ...state };

  //action.type is coming from the store.dispatch
  if (action.type === 'ADD') { 
    newState.age += action.val;
  } 
  if (action.type === 'SUBSTRACT') { 
    newState.age -= action.val;
  }


  return newState;
}

//passing myReducer so the store is complete. which has state and reducer
const store = createStore(myReducer);

//subscribe lets me know when there's a change in the state
store.subscribe(() => { 
  console.log("state changed" + JSON.stringify(store.getState()));
});


//increment and decrement age by writing action. Actions are commands which will let reducer know what to do with the command and execute it
//type is the name of the command
store.dispatch({ type: 'ADD', val:10 });


//create another action 
store.dispatch({ type: 'SUBSTRACT', val:5});
