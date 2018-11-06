const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      // console.log("project created", action);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    case "DELETE_PROJECT":
      console.log("project deleted", action);
      return state;
    case "DELETE_PROJECT_ERROR":
      console.log("project delete error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
