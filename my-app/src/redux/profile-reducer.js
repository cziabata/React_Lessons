const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postData : [
        {id: 1, message: "Hi, i am president", likesCount: 55},
        {id: 2, message: "It's my first post", likesCount: 23},
    ],
    newPostText : "",
    profile: null,
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
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
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
export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export default profileReducer;