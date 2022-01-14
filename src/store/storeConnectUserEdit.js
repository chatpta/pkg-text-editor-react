import { connect } from "react-redux";
import reduxStoreUtility from "@chatpta/redux-store-utility";

const prSct = reduxStoreUtility.createActions( "User" );
const userMutate = dispatch => keyValue => dispatch( prSct.userMutate( keyValue ) );
const userReset = dispatch => resetValue => dispatch( prSct.userReset( resetValue ) );
const prsAct = reduxStoreUtility.createAsyncActions( "User" );
const userFetch = dispatch => request => dispatch( prsAct.userFetch( request ) );


function StoreConnectUserEdit( Element ) {

    const mapStateToProps = state => {
        return {
            user: state.user,
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            userFetch: userFetch( dispatch ),
            userMutate: userMutate( dispatch ),
            userReset: userReset( dispatch )
        };
    };

    return connect( mapStateToProps, mapDispatchToProps )( Element );
}

export default StoreConnectUserEdit;
