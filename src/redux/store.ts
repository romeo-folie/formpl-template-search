import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk"
import TemplateReducer from './templates/template.reducer'


const middleware = []
middleware.push(thunk)

if(process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}
  
const store = createStore(TemplateReducer, applyMiddleware(...middleware))

export default store;