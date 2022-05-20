export const defaultContentReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoaded: false };
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

export const defaultInitialObject = {
  isLoaded: false,
  contentID: null,
  data: [],
  error: null,
};

export const subjectInitialObject = {
  isLoaded: false,
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
