const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogData : [
        {id: 1, name: "Julia"},
        {id: 2, name: "Chabak"},
        {id: 3, name: "Slawek"},
        {id: 4, name: "Jarek"},
        {id: 5, name: "Teresa"},
    ],
    messageData : [
        {id: 1, message: "Privet"},
        {id: 2, message: "Privet. Kak dela?"},
        {id: 3, message: "Privet. Kak dela?1"},
        {id: 4, message: "Privet. Kak dela?2"},
        {id: 5, message: "Privet. Kak dela?3"},
    ],
    newMessageBody: "",
};

export const dialogReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messageData.push({id: 6, message: body});
            return state;
        default: 
            return state;
    }
}

export let sendMessageCreator = () => {
    return {
       type: SEND_MESSAGE
    }
  }
export let updateNewMessageBodyCreator = (body) => {
    return {
       type: UPDATE_NEW_MESSAGE_BODY,
       body: body,
    }
  }

export default dialogReducer;