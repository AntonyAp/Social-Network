import React from "react";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/Reducers/DialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hocs/WithAuthRedirect";
import Dialogs from "./Dialogs";

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

let withRedirect = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirect);
export default DialogsContainer;