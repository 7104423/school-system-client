import { useCallback } from "react";
import { useApp } from "../contexts/appContext";
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
  fetchSubjectContents,
  fetchTopicContents,
} from "../utils/api";

const contentMap = {
  subjects: fetchSubjects,
  subject: fetchSubject,
  subjectTopics: fetchSubjectTopics,
  subjectContents: fetchSubjectContents,
  topics: fetchTopics,
  topicContents: fetchTopicContents,
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
    setError,
  } = useApp();

  const fetch = useCallback(async () => {
    dispatch({
      type: "loading",
      target: contentName,
    });
    try {
      if (!contentMap[contentName]) {
        throw new Error("Failed to download data");
      }
      const content = await contentMap[contentName]?.(id);
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
          message: "Failed to download data",
          code: error.status,
          id,
        },
      });
      setError("Failed to download data");
    }
  }, [dispatch, contentName, id, setError]);

  return [isLoaded, data, fetch, contentID];
};
