import { useCallback, useEffect } from "react";
import { useApp } from "../contexts/appContext";
import { defaultInitialState } from "../reducers/defaultContentReducer";
import {
  fetchSubjects,
  fetchSubject,
  fetchTopics,
  fetchDigitalContents,
  fetchStudyProgrammes,
  fetchUsers,
  fetchSubjectTopics,
  fetchTopic,
  fetchDigitalContent,
  fetchStudyProgramme,
  fetchUser,
} from "../utils/api";

const contentMap = {
  subjects: fetchSubjects,
  subject: fetchSubject,
  subjectTopics: fetchSubjectTopics,
  topics: fetchTopics,
  digitalContents: fetchDigitalContents,
  studyProgrammes: fetchStudyProgrammes,
  users: fetchUsers,
  topic: fetchTopic,
  digitalContent: fetchDigitalContent,
  studyProgramme: fetchStudyProgramme,
  user: fetchUser,
};

export const useContent = (contentName = "subjects", id) => {
  const {
    state: {
      [contentName]: { isLoaded, data, contentID },
    },
    dispatch,
  } = useApp();

  const fetch = useCallback(async () => {
    dispatch({
      type: "loading",
      target: contentName,
    });
    try {
      const content = await contentMap[contentName](id);
      dispatch({
        type: "finished",
        target: contentName,
        payload: {
          data: content,
          id,
        },
      });
    } catch (error) {
      dispatch({
        type: "failed",
        target: contentName,
        payload: {
          message: "Failed to load data stream",
          code: error.status,
          id,
        },
      });
    }
  }, [dispatch, contentName, id]);

  return [isLoaded, data, fetch, contentID];
};
