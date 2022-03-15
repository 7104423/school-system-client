const url = process.env.REACT_APP_SERVER_HOST;

export const loginGoogle = async (email, tokenId) => {
  const data = await fetch(`${url}/api/login/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idToken: tokenId, email }),
  });
  return await data.json();
};

export const login = async (email, password) => {
  const data = await fetch(`${url}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  });
  return await data.json();
};
