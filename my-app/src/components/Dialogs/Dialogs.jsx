import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.appState.dialogData.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.appState.messageData.map( message => <Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
           <div className={classes.dialogs_items}>
               {dialogsElements}
           </div>
           <div className={classes.messages}>
               {messagesElements}
           </div>
        </div>
        
    )
}

export default Dialogs;