import './App.css';
import React, { useState } from "react";

//connect react to redux
import { connect } from 'react-redux';




function App(props) {
//we're no longer using the hook state
  // const [age, setAge] = useState(25);

  // function onAgeUp() { 
  //   setAge(prevAge => prevAge + 1);
  // }

  
  // function onAgeDown() { 
  //   setAge(prevAge => prevAge - 1);
  // }

  console.log(props)

  return (
    <div className="App">
      <div>Age: <span>{props.age}</span></div>
      <button onClick={props.onAgeUP}>Age UP</button>
      <button onClick={props.onAgeDown}>Age Down</button>
    </div>
  );
}




//we're using the store to maintain the state. we need to plugin the store in here and every single components or page.
//To access the store we need to map it with props. We need to subscribe to the store so that any changes happen in the store automatically comes to this component. The second thing we need to do is dispatch action from every page. Inside the component we will use props to map it to the store and action

const mapStateToProps = (state) => { 
  return {
    age: state.age
  }
}


const mapDispatchToProps = (dispatch) => { 
  //returns the map object which will have two events or action types
  return {
    onAgeUP: () => dispatch({type: 'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'})
  }
}


//connect both functions to the store
export default connect(mapStateToProps, mapDispatchToProps)(App);



//to use redux we need to build the store. And for creating the store we need state and reducers. Reducers are the functions, for ex- onAgeUP and onAgeDown
