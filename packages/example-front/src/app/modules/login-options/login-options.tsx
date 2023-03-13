import styles from './login-options.module.scss';
import { useState } from 'react';

import { ReactComponent as GoogleLogoIcon } from '../../../assets/svg/google-logo.svg';
import { ReactComponent as MetamaskLogoIcon } from '../../../assets/svg/metamask-logo.svg';

export function LoginOptions() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setFormData({
      username: '',
      password: '',
    });

    console.log(
      'credentials to send in the body to the endpoint through useLocalLogin',
      formData,
    );
  };

  const handleGoogleLogin = () => {
    console.log('useGoogleLogin');
  };

  const handleMetamaskLogin = () => {
    console.log('useMetamaskLogin');
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
