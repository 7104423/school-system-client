import {
  defaultInitialState,
  defaultContentReducer,
  subjectInitialObject,
  defaultInitialObject,
} from "./defaultContentReducer";

const reducer = (actionTarget, state, action) => ({
  ...state,
  [actionTarget]: defaultContentReducer(state[actionTarget], action),
});

export const appReducer = (state, action) => {
  return reducer(action.target, state, action);
};

export const appInitialState = {
  subjects: defaultInitialObject,
  subject: subjectInitialObject,
  subjectTopics: defaultInitialState,
  subjectContents: defaultInitialState,
  topics: defaultInitialState,
  topicContents: defaultInitialState,
  digitalContents: defaultInitialState,
  studyProgrammes: defaultInitialObject,
  topic: defaultInitialState,
  digitalContent: defaultInitialState,
  studyProgramme: defaultInitialState,
  user: defaultInitialObject,
  users: defaultInitialState,
  studentEnum: defaultInitialState,
  teacherEnum: defaultInitialState,
};
