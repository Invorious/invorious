import { useUserManagement } from '@invorious/access-control-front';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthorizationHeader } from '../../hooks/use-authorization-headers';
import { IUser } from '../../types/user.interface';
import ProfileInformation from '../profile-information/profile-information';
import styles from './profile.module.scss';

export function Profile() {
  const navigate = useNavigate();
  const [updateProfile, setUpdateProfile] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(false);
  const [user, setUser] = useState<IUser>();
  const { bearerAuthHeader } = useAuthorizationHeader();
  const { requestError, getProfile, update, deleteProfile } = useUserManagement(
    {
      headers: bearerAuthHeader(),
    },
  );

  const [formData, setFormData] = useState<IUser>({} as IUser);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({} as IUser);
    setUpdateProfile(false);
    const updatedUser = await update<IUser>(formData);
    setUser(updatedUser);
  };

  const handleDelete = async () => {
    if (user) {
      await deleteProfile(user.id);
      signout();
    }
  };

  const signout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getProfile<IUser>();
      if (!requestError && user.id) {
        setUser(user);
      } else {
        navigate('/login');
      }
    };
    setFetchingUser(true);
    fetchUser();
    setFetchingUser(false);
  }, []);

  return (
    <div className={styles['container']}>
      {fetchingUser ? (
        <h1>Getting profile information...</h1>
      ) : (
        <>
          <h1>Profile information</h1>
          {updateProfile ? (
            <form className={styles['container']} onSubmit={handleUpdate}>
              <label>
                Name:
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  defaultValue={user?.name}
                />
              </label>
              <label>
                Email:
                <input
                  name="email"
                  onChange={handleChange}
                  type="text"
                  defaultValue={user?.email}
                />
              </label>
              <label>
                Username:
                <input
                  name="username"
                  onChange={handleChange}
                  type="text"
                  defaultValue={user?.username}
                />
              </label>
              <label>
                Address:
                <input
                  name="address"
                  onChange={handleChange}
                  type="text"
                  defaultValue={user?.address}
                />
              </label>
              <input type="submit" value="update profile" />
            </form>
          ) : (
            <>
              <ProfileInformation user={user} />
              <button onClick={() => setUpdateProfile(true)}>
                update information
              </button>
              <button onClick={() => handleDelete()}>delete profile</button>
              <button onClick={() => signout()}>signout()</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Profile;
