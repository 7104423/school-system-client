import { useState } from "react";
import GoogleLogin from "react-google-login";
import { login } from "../../../../utils/api";

export const GoogleLoginButton = () => {
  const [state, setState] = useState("");

  const responseGoogle = async (payload) => {
    const {
      tokenId,
      profileObj: { email },
    } = payload;
    const json = await login(email, tokenId);
    setState(`email: ${email}, token: ${json.token}`);
  };

  const failedGoogle = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={failedGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <div>
        <p>{state}</p>
      </div>
    </div>
  );
};
