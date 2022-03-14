export const login = async (email, tokenId) => {
  const data = await fetch(
    `${process.env.REACT_APP_SERVER_HOST}/login/google`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: tokenId, email }),
    }
  );
  return await data.json();
};
