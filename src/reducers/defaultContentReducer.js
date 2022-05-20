export const defaultContentReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, data: [], isLoaded: false };
    case "finished":
      return {
        data: action.payload.data,
        contentID: action.payload.id,
        isLoaded: true,
      };
    case "failed":
      return {
        data: [],
        isLoaded: true,
        error: action.payload.data,
        contentID: action.payload.id,
      };
    default:
      return { ...state };
  }
};

export const defaultInitialState = {
  isLoaded: false,
  contentID: null,
  data: [],
  error: null,
};
