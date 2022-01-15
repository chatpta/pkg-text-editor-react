import { connect } from "react-redux";
import reduxStoreUtility from "@chatpta/redux-store-utility";

const prSct = reduxStoreUtility.createActions( "Item" );
const itemMutate = dispatch => keyValue => dispatch( prSct.itemMutate( keyValue ) );
const itemReset = dispatch => resetValue => dispatch( prSct.itemReset( resetValue ) );
const prsAct = reduxStoreUtility.createAsyncActions( "Item" );
const itemFetch = dispatch => request => dispatch( prsAct.itemFetch( request ) );


function StoreConnectItemEdit( Element ) {

    const mapStateToProps = state => {
        return {
            item: state.item,
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            itemFetch: itemFetch( dispatch ),
            itemMutate: itemMutate( dispatch ),
            itemReset: itemReset( dispatch )
        };
    };

    return connect( mapStateToProps, mapDispatchToProps )( Element );
}

export default StoreConnectItemEdit;
