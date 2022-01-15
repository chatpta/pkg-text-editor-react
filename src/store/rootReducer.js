/******************************************************************************
 * Written by Peter Craftsmn                                                  *
 * All rights reserved 2019                                                   *
 ******************************************************************************/

import { combineReducers } from "redux";
import reduxStoreUtility from "@chatpta/redux-store-utility";

// Note argument to createReducer is not case sensitive.
const user = reduxStoreUtility.createReducer( "user" );
const item = reduxStoreUtility.createReducer( "ITEM" );
const items = reduxStoreUtility.createReducer( "Items" );
const editor = reduxStoreUtility.createReducer( "Editor" );


const app = combineReducers( {
    user: user.userReducer, // Note the prefix 'user' in userReducer
    item: item.itemReducer,
    items: items.itemsReducer,
    editor: editor.editorReducer
} );

export default app;
