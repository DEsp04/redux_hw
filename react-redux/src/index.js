import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Provider allow us to inject the Global Store
import { Provider} from 'react-redux'
//we need to build the store now
import { createStore, applyMiddleware } from 'redux'
//import the reducers
import reducer from './store/reducers/reducer';


/* Middleware:
  Asynchronously means when I create an action and save it to the server,
  once the action is saved on the server then we update the redux state.
  -reducers are designed to runs synchronous code.
  -What we want to do is when an action is created we want to save or cache that action in the middleware, do the saving operation, and once we're done then the action can be send to the reducer.
  There is a middleware called thunk->  means executing an action within a function and call the function to execute the action.
*/
const logAction = store => { 
  return next => { 
    return action => { 
      const result = next(action);
      console.log(`caught in the middleware ${JSON.stringify(result)}`);
      return result;
    }
  }
}


//store is created and we in the reducer
const store = createStore(reducer, applyMiddleware(logAction));

//we need to pass the store as a property to the Provider. This way the store is available to the entire application
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


