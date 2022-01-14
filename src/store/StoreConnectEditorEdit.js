import { connect } from "react-redux";
import reduxStoreUtility from "@chatpta/redux-store-utility";

const prSct = reduxStoreUtility.createActions( "Editor" );
const editorMutate = dispatch => keyValue => dispatch( prSct.editorMutate( keyValue ) );
const editorReset = dispatch => resetValue => dispatch( prSct.editorReset( resetValue ) );
const prsAct = reduxStoreUtility.createAsyncActions( "Editor" );
const editorFetch = dispatch => request => dispatch( prsAct.editorFetch( request ) );


function StoreConnectEditorEdit( Element ) {

    const mapStateToProps = state => {
        return {
            editorState: state.editor,
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            setEditorState: editorMutate( dispatch ),
            resetEditorState: editorReset( dispatch ),
            fetchEditorState: editorFetch( dispatch )
        };
    };

    return connect( mapStateToProps, mapDispatchToProps )( Element );
}

export default StoreConnectEditorEdit;
