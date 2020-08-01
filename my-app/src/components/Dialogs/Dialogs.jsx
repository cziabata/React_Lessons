import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    
    let state = props.dialogPage;

    let dialogsElements = state.dialogData.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messageData.map( message => <Message message={message.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
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