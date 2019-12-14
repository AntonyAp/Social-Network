import React from "react";
import {sendMessage} from "../../Redux/Reducers/DialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hocs/WithAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

let mapStateToProps = (state) =>{
    return {
        dialogsPage : state.dialogsPage,
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs);