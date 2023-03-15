import { useUserManagement } from '@invorious/access-control-front';
import { useEffect, useState } from 'react';
import { IUser } from '../../types/user.interface';
import ProfileInformation from '../profile-information/profile-information';
import styles from './profile.module.scss';

export function Profile() {
  //const location = useLocation();
  const [updateProfile, setUpdateProfile] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(false);
  const [user, setUser] = useState<IUser>();
  const { requestError, getProfile, update } = useUserManagement({
    baseURL: 'api/auth',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

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

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getProfile<IUser>();
      if (!requestError) {
        setUser(user);
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
            </>
          )}
          <div className={styles['profile-information']}>{/* */}</div>
        </>
      )}
    </div>
  );
}

export default Profile;
