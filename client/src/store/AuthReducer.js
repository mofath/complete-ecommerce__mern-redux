import { initialState } from "./AuthContext";

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("currentUserInfo", JSON.stringify(action.payload.user));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
            };

        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };

        default:
            return state;
    }
};

export default authReducer;