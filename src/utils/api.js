const url = process.env.REACT_APP_SERVER_HOST;

const fetchJSON = async (url, optionProp) => {
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

export const fetchTopics = async () => {
  return await fetchJSON(`${url}/api/topic/list`);
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

