// import { FaUser } from 'react-icons/fa';
import '../LoginForm/LoginForm.css';

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' id='email' required />
          <label htmlFor='email'>Email</label>
          {/* <FaUser/> */}
        </div>
        <div className='input-box'>
          <input type='password' required />
          <label htmlFor='password'>Password</label>
        </div>
        <div className='button-container'>
          <button type='button' className='cancel-btn'>Cancel</button>
          <button type='submit' className='login-btn'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
