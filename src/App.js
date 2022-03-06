import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useState } from "react";
import GoogleLogin from "react-google-login";

function App() {
	const [state, setState] = useState("");

	const responseGoogle = async (payload) => {
		const { tokenId, profileObj: { email } } = payload;
		const data = await fetch(`${process.env.REACT_APP_SERVER_HOST}/login/google`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ password: tokenId, email })
		});
		const json = await data.json();
		setState(`email: ${email}, token: ${json.token}`)
	};

	const failedGoogle = (error) => {
		console.log(error);
	}

	return (
		<div className="App">
			<h1>Hello World {process.env.REACT_APP_GOOGLE_CLIENT_ID}</h1>
			<div>
				<GoogleLogin
					clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
					buttonText="Login"
					onSuccess={responseGoogle}
					onFailure={failedGoogle}
					cookiePolicy={'single_host_origin'}
				/>
				<div>
					<p>
						{state}
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;

