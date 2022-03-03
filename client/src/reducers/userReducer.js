export default function userReducer(state = {Username: "", UserId: "", submitting: false}, action) {
    switch (action.type) {
        case "SUBMITTING":
            return {
                ...state,
                submitting: true
            };
        case "SET_USER":
            return {
                ...state,
                Username: action.Username,
                UserId: action.UserId,
                submitting: false
            };
        case "RESET_USER":
            return {
                ...state,
                Username: "",
                UserId: "",
                submitting: false
            }
        default:
            return state;
    }
}