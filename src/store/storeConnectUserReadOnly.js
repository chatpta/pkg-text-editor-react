import { connect } from "react-redux";


function StoreConnectUserReadOnly( Element ) {

    const mapStateToProps = state => {
        return {
            user: state.user,
        };
    };

    return connect( mapStateToProps, null )( Element );
}

export default StoreConnectUserReadOnly;
