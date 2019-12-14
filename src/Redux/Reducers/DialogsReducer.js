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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE : {
            let message = action.newMessageText;
            state.newMessageText = "";
            return {
                ...state,
                messageList: [...state.messageList, {
                    id : 6,
                    text : message
                }],
            };
        }
        default : return state;
    }
};

export const sendMessage = (newMessageText) =>{
    return {
        type : SEND_MESSAGE,
        newMessageText
    }
};

export default dialogsReducer;