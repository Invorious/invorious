import styles from './login-options.module.scss';
import { useState } from 'react';

import { ReactComponent as GoogleLogoIcon } from '../../../assets/svg/google-logo.svg';
import { ReactComponent as MetamaskLogoIcon } from '../../../assets/svg/metamask-logo.svg';
import {
  useLocalStrategy,
  useMetamaskStrategy,
} from '@invorious/access-control-front';
import { Link, useNavigate } from 'react-router-dom';

export function LoginOptions() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { login: loginLocal, requestError: requestErrorLocal } =
    useLocalStrategy({
      baseURL: '/api/auth/local',
    });
  const { login: loginMetamask, requestError: requestErrorMetamask } =
    useMetamaskStrategy({
      baseURL: '/api/auth/metamask',
    });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      username: '',
      password: '',
    });
    const response = await loginLocal(formData.username, formData.password);
    if (!requestErrorMetamask) {
      localStorage.setItem('token', response.accessToken);
      navigate('/profile');
    }
  };

  const handleGoogleLogin = () => {
    console.log('useGoogleLogin');
  };

  const handleMetamaskLogin = async () => {
    const message =
      'Welcome back you beatiful bastard, please sign this message to login, xoxo in your butty';
    const response = await loginMetamask(message);
    if (!requestErrorLocal) {
      localStorage.setItem('token', response.accessToken);
      navigate('/profile');
    }
  };

  return (
    <div>
      <h1>Welcome, please select your login preference</h1>
      <form className={styles['login-local-form']} onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            onChange={handleChange}
            placeholder="email"
            type="text"
            value={formData.username}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            onChange={handleChange}
            placeholder="password"
            type="text"
            value={formData.password}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
      <hr />
      <div className={styles['register']}>
        <h3>Not registered yet? what are you waiting for?</h3>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      <hr />
      <div className={styles['social-media-icons']}>
        <h2>Or login with</h2>
        <div
          className={styles['social-media-icon']}
          onClick={handleGoogleLogin}
        >
          <GoogleLogoIcon />
        </div>
        <div
          className={styles['social-media-icon']}
          onClick={handleMetamaskLogin}
        >
          <MetamaskLogoIcon />
        </div>
      </div>
    </div>
  );
}

export default LoginOptions;
