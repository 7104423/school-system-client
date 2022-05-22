export const defaultContentReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "finished":
      return {
        data: action.payload.data,
        contentID: action.payload.id,
        isLoading: false,
      };
    case "failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload.data,
        contentID: action.payload.id,
      };
    default:
      return { ...state };
  }
};

export const defaultInitialState = {
  isLoading: false,
  contentID: null,
  data: [],
  error: null,
};

export const defaultInitialObject = {
  isLoading: false,
  contentID: null,
  data: [],
  error: null,
};

export const subjectInitialObject = {
  isLoading: false,
  contentID: null,
  data: {
    id: "",
    name: "",
    goal: "",
    supervisor: null,
    teachers: null,
    studyProgramme: null,
  },
  error: null,
};
