import './Registration.scss'

const Registration = () => {
  return (
    <div className="registration">
      <div className="card">
        <div className="left">
          <h1>Registration</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
          </form>
          <button>Registration</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <p>If you already have an account, you can login here.</p>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Registration
