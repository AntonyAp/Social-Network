const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    messageList: [
        {id: 1, text: "Hello friend"},
        {id: 2, text: "Hello"},
        {id: 3, text: "Скинь лабы"}
    ],
    dialogsList: [
        {id: 1, name: "Anton"},
        {id: 2, name: "Valera"},
        {id: 3, name: "Sanya"}
    ],
    newMessageText : ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY : {
            return {
                ...state,
                newMessageText : action.newMessageText
            }
        }
        case SEND_MESSAGE : {
            let message = state.newMessageText;
            state.newMessageText = "";
            return {
                ...state,
                messageList: [...state.messageList, {
                    id : 6,
                    text : message
                }],
                newMessageText: ''
            };
        }
        default : return state;
    }
};

export const sendMessageActionCreator = () =>{
    return {
        type : SEND_MESSAGE
    }
};
export const updateNewMessageActionCreator = (newText) =>{
    return {
        type : UPDATE_NEW_MESSAGE_BODY,
        newMessageText : newText
    }
};
export default dialogsReducer;