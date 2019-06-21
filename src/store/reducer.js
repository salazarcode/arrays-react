export default function(state = {}, action){
    switch (action.type) {
        case "ADD_USER":
            state.users = [...state.users, action.payload.user]
            return state
        case "SET_TOKEN":
            state.token = action.payload.token;
            return state
        default:
          return state
      }
}