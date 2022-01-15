import { connect } from "react-redux";
import reduxStoreUtility from "@chatpta/redux-store-utility";

const prSct = reduxStoreUtility.createActions( "Items" );
const itemsMutate = dispatch => keyValue => dispatch( prSct.itemsMutate( keyValue ) );
const itemsReset = dispatch => resetValue => dispatch( prSct.itemsReset( resetValue ) );
const prsAct = reduxStoreUtility.createAsyncActions( "Items" );
const itemsFetch = dispatch => request => dispatch( prsAct.itemsFetch( request ) );


function StoreConnectItemsEdit( Element ) {

    const mapStateToProps = state => {
        return {
            items: state.items,
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            itemsFetch: itemsFetch( dispatch ),
            itemsMutate: itemsMutate( dispatch ),
            itemsReset: itemsReset( dispatch )
        };
    };

    return connect( mapStateToProps, mapDispatchToProps )( Element );
}

export default StoreConnectItemsEdit;
