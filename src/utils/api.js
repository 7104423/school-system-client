const url = process.env.REACT_APP_SERVER_HOST;

const fetchJSON = async (url, options) => {
  const data = await fetch(url, options);
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
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idToken: tokenId, email }),
  });
};

export const login = async (email, password) => {
  return await fetchJSON(`${url}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  });
};
