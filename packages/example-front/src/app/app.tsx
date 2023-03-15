// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { LoginOptions } from './modules/login-options/login-options';
import { Profile } from './modules/profile/profile';

export function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const receivedToken = searchParams.get('token');
    if (receivedToken) {
      localStorage.setItem('token', receivedToken);
      setToken(receivedToken);
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<LoginOptions />} />
      <Route
        path="/profile"
        element={token !== '' ? <Profile /> : <Navigate to="/login" />}
      />
      <Route
        path="/"
        element={
          <div>
            <h1>Home page</h1>
            <Link to="/login">Click here to go to the Login Options page.</Link>
            <br />
            <Link to="/profile">
              Click here to go to the Profile page only if you have jwt.
            </Link>
          </div>
        }
        errorElement={<h1>Error not found page</h1>}
      />
    </Routes>
  );
}

export default App;
