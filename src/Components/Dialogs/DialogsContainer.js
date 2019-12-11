import React from "react";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        dialogsPage : state.dialogsPage,
        isAuth : state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage : () => dispatch(sendMessageActionCreator()),
        onMessageTextChange : (body) => dispatch(updateNewMessageActionCreator(body))
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;