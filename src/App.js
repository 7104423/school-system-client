import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useState } from "react";
import GoogleLogin from "react-google-login";

function App() {
	const [state, setState] = useState("");

	const responseGoogle = async (payload) => {
		const { tokenId, profileObj: { email } } = payload;
		const data = await fetch('http://localhost:3000/login/google', {
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
			<h1>Hello World</h1>
			<div>
				<GoogleLogin
					clientId={"670781469452-58l9b45eben8smb1qsldn34ajnfcifgn.apps.googleusercontent.com"}
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

