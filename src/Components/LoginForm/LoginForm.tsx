import { useState } from 'react';
import { getCurrentUser, login } from '../../services/authServices';
import '../LoginForm/LoginForm.css';

interface LoginFormProps {
  setIsLoggedIn: (value: boolean) => void;
  setUserData: (data: { image: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setIsLoggedIn, setUserData }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const data = await login(username, password);
      console.log('Login successful:', data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      const user = await getCurrentUser(data.token);
      setUserData({ image: user.image });
      setIsLoggedIn(true);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='wrapper'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h1 style={{ marginBottom: error ? '5px' : '50px' }}>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='input-box'>
          <input
              type='text'
              id='email'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          <label htmlFor='email'>Email</label>
        </div>
        <div className='input-box'>
          <input
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
