export default function userReducer(state = {username: "", userId: "", submitting: false}, action) {
    switch (action.type) {
        case "SUBMITTING":
            return {
                ...state,
                submitting: true
            };
        case "SET_USER":
            return {
                ...state,
                username: action.username,
                userId: action.userId,
                submitting: false
            };
        case "REMOVE_USER":
            return {
                ...state,
                username: "",
                userId: "",
                submitting: false
            }
        default:
            return state;
    }
}