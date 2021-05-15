import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './redux/reducers'
import {createStore, applyMiddleware} from 'redux'
import { Provider} from 'react-redux';
import thunk from "redux-thunk" 



const store = createStore(
  reducer,
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
