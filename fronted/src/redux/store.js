
import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {reducer as menReducer} from "./men/menreducer"
import {reducer as womenReducer} from "./women/wonenreducer"
import {reducer as singlePageReducer} from "./SingleProduct/SingleReducer"
import {reducer as cartReducer} from "./Cart/cartReducer"
import {reducer as wishListReducer} from "./WishList/wishListReducer"
import {reducer as addressReducer} from "./Address/reducer"
import {reducer as userReducer} from "./User/userReducer"


const rootReducer = combineReducers({menReducer,womenReducer,singlePageReducer,cartReducer,wishListReducer,addressReducer,userReducer})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}
