import { useCallback, useMemo } from "react";
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
  deleteSubject,
  deleteTopic,
  deleteDigitalContent,
  deleteStudyProgramme,
  deleteUser,
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

const deleteContentMap = {
  subject: deleteSubject,
  topic: deleteTopic,
  digitalContent: deleteDigitalContent,
  studyProgramme: deleteStudyProgramme,
  user: deleteUser,
};

const editContentMap = {
  subject: fetchSubject,
  topic: fetchTopic,
  digitalContent: fetchDigitalContent,
  studyProgramme: fetchStudyProgramme,
  user: fetchUser,
};

const addContentMap = {
  subject: fetchSubject,
  topic: fetchTopic,
  digitalContent: fetchDigitalContent,
  studyProgramme: fetchStudyProgramme,
  user: fetchUser,
};

export const useContent = (contentName, id) => {
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

export const useDeleteContent = (contentName, id) => {
  const { dispatch, setError } = useApp();

  const remove = useCallback(async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) {
      return;
    }
    dispatch({
      type: "loading",
      target: contentName,
    });
    try {
      if (!deleteContentMap[contentName]) {
        throw new Error();
      }
      const content = await deleteContentMap[contentName]?.({ id });
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
          message: "Unable to remove a record",
          code: error.status,
          id,
        },
      });
      setError("Unable to remove a record");
    }
  }, [contentName, dispatch, id, setError]);

  return remove;
};

export const useAddContent = (contentName, body) => {
  const { dispatch, setError } = useApp();

  const remove = useCallback(async () => {
    dispatch({
      type: "loading",
      target: contentName,
    });
    try {
      if (!addContentMap[contentName]) {
        throw new Error();
      }
      const content = await addContentMap[contentName]?.(body);
      dispatch({
        type: "finished",
        target: contentName,
        payload: {
          data: content,
          id: body.id,
        },
      });
    } catch (error) {
      dispatch({
        type: "failed",
        target: contentName,
        payload: {
          message: "Unable to remove a record",
          code: error.status,
          data: body,
        },
      });
      setError("Unable to remove a record");
    }
  }, [body, contentName, dispatch, setError]);

  return remove;
};

export const useEditContent = (contentName, body) => {
  const { dispatch, setError } = useApp();

  const remove = useCallback(async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) {
      return;
    }
    dispatch({
      type: "loading",
      target: contentName,
    });
    try {
      if (!editContentMap[contentName]) {
        throw new Error();
      }
      const content = await editContentMap[contentName]?.({ body });
      dispatch({
        type: "finished",
        target: contentName,
        payload: {
          data: content,
          id: body.id,
        },
      });
    } catch (error) {
      dispatch({
        type: "failed",
        target: contentName,
        payload: {
          message: "Unable to remove a record",
          code: error.status,
        },
      });
      setError("Unable to remove a record");
    }
  }, [body, contentName, dispatch, setError]);

  return remove;
};
