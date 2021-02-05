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
      <hr />
      <div>History</div>
      <div>
        <ul>
          {
            props.history.map(element => (
              <li className="historyItem" key={element.id} onClick={()=> props.onDelItem(element.id)}>
                {element.age}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}


//we're using the store to maintain the state. we need to plugin the store in here and every single components or page.
//To access the store we need to map it with props. We need to subscribe to the store so that any changes happen in the store automatically comes to this component. The second thing we need to do is dispatch action from every page. Inside the component we will use props to map it to the store and action

const mapStateToProps = (state) => { 
  //we will return an object with some data from the redux store and this object will serve as a prop to the App component
  return {
    age: state.age,
    history: state.history
  }
}

//dispatches an action:--->dispatch sends the action to reducer
const mapDispatchToProps = (dispatch) => { 
  //we will return an object with two actions from the redux store and this object will serve as a prop to the App component
  //value is the payload in the action
  return {
    onAgeUP: () => dispatch({type: 'AGE_UP', value: 1}),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
    onDelItem: (id) => dispatch({ type: 'DEL_ITEM', key: id})
  }
}


//connect both functions to the store
export default connect(mapStateToProps, mapDispatchToProps)(App);



//to use redux we need to build the store. And for creating the store we need state and reducers. Reducers are the functions, for ex- onAgeUP and onAgeDown
