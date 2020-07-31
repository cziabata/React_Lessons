import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./../../redux/dialog-reducer";

const Dialogs = (props) => {
    
    let state = props.store.getState().dialogPage;

    let dialogsElements = state.dialogData.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messageData.map( message => <Message message={message.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };

    return (
        <div className={classes.dialogs}>
           <div className={classes.dialogs_items}>
               {dialogsElements}
           </div>
           <div className={classes.messages}>
               <div>{messagesElements}</div>
               <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea></div>
               <div><button onClick = { onSendMessageClick }>Send</button></div>
           </div>
        </div>
        
    )
}

export default Dialogs;