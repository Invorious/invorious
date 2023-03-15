import styles from './profile.module.scss';
import { Link } from 'react-router-dom';

export const Profile = () => {
  return (
    <>
      <h1>Profile page</h1>
      <br />
      <hr />
      <br />
      <Link to="/">Click here to get back to Home page.</Link>
    </>
  );
};
