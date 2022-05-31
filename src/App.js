
import './App.css';
import { GoogleLogin } from 'react-google-login';
// import { GoogleLogin } from '@react-oauth/google';

function App() {
  const handleFailure = (result) => {
    console.log(result)
  }
  const handleLogin = (googleData) => {
    console.log(googleData)
  }
  return (
    <div className="App">
      <header className="App-header">
        <GoogleLogin
          clientId="848864457200-ei7alu2v67k9ct00r96c5jdrb00m8r31.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
        />

      </header>
    </div>
  );
}

export default App;
