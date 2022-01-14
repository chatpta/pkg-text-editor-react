import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import initialStateFromJsonFile from "./initialState.json";
import rootReducer from "./rootReducer";

// Load the locally stored user to the store.
const storedUser = JSON.parse( localStorage.getItem( 'user' ) );


// Create initial state.
const initialStateForStoreInitialization = {
    ...initialStateFromJsonFile,
    user: storedUser || initialStateFromJsonFile.user,
};


// Initialize store.
const store = createStore(
    rootReducer,
    initialStateForStoreInitialization,
    applyMiddleware( thunk )
);

export default store;
