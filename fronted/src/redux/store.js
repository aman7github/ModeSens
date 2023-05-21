
import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {reducer as menReducer} from "./men/menreducer"
import {reducer as womenReducer} from "./women/wonenreducer"


const rootReducer = combineReducers({menReducer,womenReducer})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}
