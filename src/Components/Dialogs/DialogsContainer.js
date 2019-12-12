import React from "react";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/Reducers/DialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hocs/WithAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

let mapStateToProps = (state) =>{
    return {
        dialogsPage : state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage : () => dispatch(sendMessageActionCreator()),
        onMessageTextChange : (body) => dispatch(updateNewMessageActionCreator(body))
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);