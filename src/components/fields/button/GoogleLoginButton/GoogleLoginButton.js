import { useCallback } from "react";
import GoogleLogin from "react-google-login";
import { loginGoogle } from "../../../../utils/api";

export const GoogleLoginButton = ({ onReponse, onFailure }) => {
  const responseGoogle = useCallback(
    async (payload) => {
      const {
        tokenId,
        profileObj: { email },
      } = payload;
      try {
        const json = await loginGoogle(email, tokenId);
        onReponse(json);
      } catch (error) {
        onFailure(error);
      }
    },
    [onReponse, onFailure]
  );

  const failedGoogle = useCallback(
    (error) => {
      onFailure(error);
    },
    [onFailure]
  );

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Sign in"
      onSuccess={responseGoogle}
      onFailure={failedGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};
