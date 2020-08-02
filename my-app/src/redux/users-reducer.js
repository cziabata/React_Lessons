const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        { id: 1, photoUrl: "https://cic.vic.edu.au/wp-content/uploads/pexels-photo-1770310.jpeg", 
          followed: false, 
          fullName: "Dmity", 
          status: "Some status, some text", 
          location: {city: "Minsk", country: "Belarus"}},
          
        { id: 2, photoUrl: "https://cic.vic.edu.au/wp-content/uploads/pexels-photo-1770310.jpeg", 
          followed: true, 
          fullName: "Andrew", 
          status: "Some status, some text", 
          location: {city: "London", country: "Norway"}},
          
        { id: 3, photoUrl: "https://cic.vic.edu.au/wp-content/uploads/pexels-photo-1770310.jpeg", 
          followed: false, 
          fullName: "Bob", 
          status: "Some status, some text", 
          location: {city: "Orhus", country: "Denmark"}},
    ]
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if(users.id === action.userId) {
                        return {...users, followed: true}
                    }
                    return users;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if(users.id === action.userId) {
                        return {...users, followed: false}
                    }
                    return users;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;