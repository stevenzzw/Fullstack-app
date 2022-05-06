import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import person from './person_reducer'
import app from './app_reducer'


const allReducers = combineReducers({
    person,
    
   
})

export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))