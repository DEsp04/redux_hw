import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Provider allow us to inject the Global Store
import { Provider} from 'react-redux'
//we need to build the store now
import { createStore } from 'redux'
//import the reducers
import reducer from './store/reducer';


//store is created and we in the reducer
const store = createStore(reducer);

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
