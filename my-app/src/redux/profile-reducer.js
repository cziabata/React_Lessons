const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
    postData : [
        {id: 1, message: "Hi, i am president", likesCount: 55},
        {id: 2, message: "It's my first post", likesCount: 23},
    ],
    newPostText : "",
};

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id : 5,
                message : state.newPostText,
                likesCount : 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: "",
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }
};

export let addPostActionCreator = () => {
    return {
       type: ADD_POST
    }
}
export let updateNewPostText = (text) => {
    return {
       type: UPDATE_NEW_POST_TEXT,
       newText: text,
    }
}

export default profileReducer;