export const url = process.env.REACT_APP_SERVER_HOST;

export const fetchJSON = async (url, optionProp) => {
  const token = localStorage.getItem("token");
  const option = {
    ...optionProp,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...optionProp?.headers,
    },
  };
  const data = await fetch(url, option);
  if (!data.ok) {
    try {
      const { message } = await data.clone().json();
      const err = new Error(message);
      err.status = data.status;
      throw err;
    } catch (e) {
      const message = await data.clone().text();
      const err = new Error(message);
      err.status = data.status;
      throw err;
    }
  }
  const dataJson = await data.json();
  return await dataJson;
};

export const loginGoogle = async (email, tokenId) => {
  return await fetchJSON(`${url}/api/login/google`, {
    method: "POST",
    body: JSON.stringify({ idToken: tokenId, email }),
  });
};

export const login = async (email, password) => {
  return await fetchJSON(`${url}/api/login`, {
    method: "POST",
    body: JSON.stringify({ password, email }),
  });
};

export const validateUser = async () => {
  return await fetchJSON(`${url}/api/app/index`);
};

export const fetchSubjects = async () => {
  return await fetchJSON(`${url}/api/subject/list`);
};

export const fetchSubject = async (id) => {
  return await fetchJSON(`${url}/api/subject/${id}`);
};

export const fetchSubjectTopics = async (id) => {
  return await fetchJSON(`${url}/api/subject/${id}/topics`);
};

export const fetchSubjectContents = async (id) => {
  return await fetchJSON(`${url}/api/subject/${id}/contents`);
};

export const fetchTopics = async () => {
  return await fetchJSON(`${url}/api/topic/list`);
};

export const fetchTopicContents = async (id) => {
  return await fetchJSON(`${url}/api/topic/${id}/contents`);
};

export const fetchDigitalContents = async () => {
  return await fetchJSON(`${url}/api/content/list`);
};

export const fetchStudyProgrammes = async () => {
  return await fetchJSON(`${url}/api/study-programme/list`);
};

export const fetchUsers = async () => {
  return await fetchJSON(`${url}/api/user/list`);
};

export const fetchStudentEnum = async () => {
  return await fetchJSON(`${url}/api/user/enum/students`);
};

export const fetchTeacherEnum = async () => {
  return await fetchJSON(`${url}/api/user/enum/teachers`);
};

export const fetchTopic = async (id) => {
  return await fetchJSON(`${url}/api/topic/${id}`);
};

export const fetchDigitalContent = async (id) => {
  return await fetchJSON(`${url}/api/content/${id}`);
};

export const fetchStudyProgramme = async (id) => {
  return await fetchJSON(`${url}/api/study-programme/${id}`);
};

export const fetchUser = async (id) => {
  return await fetchJSON(`${url}/api/user/${id}`);
};

export const deleteSubject = async (body) => {
  return await fetchJSON(`${url}/api/subject/delete`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const deleteTopic = async (body) => {
  return await fetchJSON(`${url}/api/topic/delete`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const deleteDigitalContent = async (body) => {
  return await fetchJSON(`${url}/api/content/delete`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const deleteStudyProgramme = async (body) => {
  return await fetchJSON(`${url}/api/study-programme/delete`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const deleteUser = async (body) => {
  return await fetchJSON(`${url}/api/user/delete`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateSubject = async (body) => {
  return await fetchJSON(`${url}/api/subject/update`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateTopic = async (body) => {
  return await fetchJSON(`${url}/api/topic/update`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateDigitalContent = async (body) => {
  return await fetchJSON(`${url}/api/content/update`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateStudyProgramme = async (body) => {
  return await fetchJSON(`${url}/api/study-programme/update`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const createUser = async (body) => {
  return await fetchJSON(`${url}/api/user/update`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const createSubject = async (body) => {
  return await fetchJSON(`${url}/api/subject/create`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const createTopic = async (body) => {
  return await fetchJSON(`${url}/api/topic/create`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const createDigitalContent = async (body) => {
  return await fetchJSON(`${url}/api/content/create`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const createStudyProgramme = async (body) => {
  return await fetchJSON(`${url}/api/study-programme/create`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateUser = async (body) => {
  return await fetchJSON(`${url}/api/user/create`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};
