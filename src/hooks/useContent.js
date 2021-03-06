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
  deleteSubject,
  deleteTopic,
  deleteDigitalContent,
  deleteStudyProgramme,
  deleteUser,
  fetchStudentEnum,
  fetchTeacherEnum,
  updateSubject,
  updateTopic,
  updateDigitalContent,
  updateStudyProgramme,
  updateUser,
  createSubject,
  createTopic,
  createDigitalContent,
  createStudyProgramme,
  createUser,
  updateUserPassword,
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
  studentEnum: fetchStudentEnum,
  teacherEnum: fetchTeacherEnum,
};

const deleteContentMap = {
  subject: deleteSubject,
  topic: deleteTopic,
  digitalContent: deleteDigitalContent,
  studyProgramme: deleteStudyProgramme,
  user: deleteUser,
};

const editContentMap = {
  subject: updateSubject,
  topic: updateTopic,
  digitalContent: updateDigitalContent,
  studyProgramme: updateStudyProgramme,
  user: updateUser,
  userPassword: updateUserPassword,
};

const addContentMap = {
  subject: createSubject,
  topic: createTopic,
  digitalContent: createDigitalContent,
  studyProgramme: createStudyProgramme,
  user: createUser,
};

export const useContent = (contentName, id) => {
  const {
    state: {
      [contentName]: { data },
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
        },
      });
    } catch (error) {
      dispatch({
        type: "failed",
        target: contentName,
        payload: {
          message: error?.message || "Failed to download data",
          code: error.status,
          id,
        },
      });
      setError(error?.message || "Failed to download data");
    }
  }, [dispatch, contentName, id, setError]);

  return [data, fetch];
};

export const useDeleteContent = (contentName, id) => {
  const { dispatch, setError, setSuccess } = useApp();

  const remove = useCallback(async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) {
      return false;
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
      setSuccess(`Record has been deleted`);
      return true;
    } catch (error) {
      dispatch({
        type: "failed",
        target: contentName,
        payload: {
          message: error?.message || "Unable to remove a record",
          code: error.status,
          id,
        },
      });
      setError(error?.message || "Unable to remove a record");
      return false;
    }
  }, [contentName, dispatch, id, setError, setSuccess]);

  return remove;
};

export const useAddContent = (contentName, options) => {
  const { dispatch, setError, setSuccess } = useApp();

  const add = useCallback(
    async (body) => {
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
        setSuccess(`Record has been created`);
        return true;
      } catch (error) {
        console.log(error.message);
        dispatch({
          type: "failed",
          target: contentName,
          payload: {
            message: error?.message || "Unable to add a record",
            code: error.status,
          },
        });
        setError(error?.message || "Unable to add a record");
        return false;
      }
    },
    [contentName, dispatch, setError, setSuccess]
  );

  return add;
};

export const useEditContent = (contentName) => {
  const { dispatch, setError, setSuccess } = useApp();

  const edit = useCallback(
    async (body) => {
      dispatch({
        type: "loading",
        target: contentName,
      });
      try {
        if (!editContentMap[contentName]) {
          throw new Error();
        }
        const content = await editContentMap[contentName]?.(body);
        dispatch({
          type: "finished",
          target: contentName,
          payload: {
            data: content,
            id: body.id,
          },
        });
        setSuccess(`Record has been updated`);
        return true;
      } catch (error) {
        dispatch({
          type: "failed",
          target: contentName,
          payload: {
            message: error?.message || "Unable to update record",
            code: error.status,
          },
        });
        setError(error?.message || "Unable to update record");
        return false;
      }
    },
    [contentName, dispatch, setError, setSuccess]
  );

  return edit;
};
