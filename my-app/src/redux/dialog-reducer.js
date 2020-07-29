const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export const dialogReducer = (state, action) => {
    
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
