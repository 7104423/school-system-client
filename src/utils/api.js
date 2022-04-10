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
  const { message, status, ...json } = await data.json();
  if (!data.ok) {
    const err = new Error(message);
    err.status = status;
    throw err;
  }
  return await json;
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

