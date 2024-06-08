import ErrorNotification from './ErrorNotification'

const LoginForm = ({ handleLogin, username, setUsername, password, setPassword, errorMessage }) => {
  return (
    <div>
      <h2>Log In To Application</h2>
      <ErrorNotification message={errorMessage}/>
      <form onSubmit = {handleLogin}>
        <div>
            Username: <input
            id='username'
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}/>
        </div>
        <div>
            Password: <input
            id='password'
            type="text"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}/>
        </div>
        <button id='login-button' type = "Submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm