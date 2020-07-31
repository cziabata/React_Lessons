import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store = {
  _state : {
    profilePage : {
          postData : [
              {id: 1, message: "Hi, i am president", likesCount: 55},
              {id: 2, message: "It's my first post", likesCount: 23},
          ],
          newPostText : "",
    },
    dialogPage : {
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
    },
  },
  _rerenderEntireTree() {
    console.log("state changed");
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogReducer(this._state.messagesPage, action);

    this._rerenderEntireTree(this._state);
    
  } 
}

export default store;