import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import initialStateFromJsonFile from "./initialState.json";
import rootReducer from "./rootReducer";
import { EditorState } from "draft-js";

// Load the locally stored user to the store.
const storedUser = JSON.parse( localStorage.getItem( 'user' ) );
const editorState = EditorState.createEmpty();

// Create initial state.
const initialStateForStoreInitialization = {
    ...initialStateFromJsonFile,
    user: storedUser || initialStateFromJsonFile.user,
    editor: editorState
};


// Initialize store.
const store = createStore(
    rootReducer,
    initialStateForStoreInitialization,
    applyMiddleware( thunk )
);

export default store;
