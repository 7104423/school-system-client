import {
  defaultInitialState,
  defaultContentReducer,
} from "./defaultContentReducer";

const reducer = (actionTarget, state, action) => ({
  ...state,
  [actionTarget]: defaultContentReducer(state[actionTarget], action),
});

export const appReducer = (state, action) => {
  return reducer(action.target, state, action);
};

export const appInitialState = {
  subjects: defaultInitialState,
  subject: defaultInitialState,
  subjectTopics: defaultInitialState,
  subjectContents: defaultInitialState,
  topics: defaultInitialState,
  topicContents: defaultInitialState,
  digitalContents: defaultInitialState,
  studyProgrammes: defaultInitialState,
  topic: defaultInitialState,
  digitalContent: defaultInitialState,
  studyProgramme: defaultInitialState,
  user: defaultInitialState,
  users: defaultInitialState,
};
