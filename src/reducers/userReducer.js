let localUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: localUser ? localUser : null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET__USER":
      localStorage.setItem("user", JSON.stringify(action.user));
      return action.payload;
    case "REMOVE__USER":
      localStorage.removeItem("user");
      return null;

    default:
      return state;
  }
};

export default userReducer;
