import { connect } from "react-redux";
import reduxStoreUtility from "@chatpta/redux-store-utility";

const prSct = reduxStoreUtility.createActions( "Editor" );
const editorReset = dispatch => resetValue => dispatch( prSct.editorReset( resetValue ) );


function StoreConnectEditorEdit( Element ) {

    const mapStateToProps = state => {
        return {
            state: state.editor,
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            setState: editorReset( dispatch )
        };
    };

    return connect( mapStateToProps, mapDispatchToProps )( Element );
}

export default StoreConnectEditorEdit;
