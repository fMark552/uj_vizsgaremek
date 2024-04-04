import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
            </form>
            <button>Login</button>
          </div>
          <div className="right">
            <h1>Register</h1>
            <p>If you dont't have an account, you can register here.</p>
            <Link to="/registration">
              <button>Registration</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
