import { useUserManagement } from '@invorious/access-control-front';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../types/user.interface';
import styles from './register.module.scss';

export function Register() {
  const navigate = useNavigate();
  const { register, requestError } = useUserManagement();
  const [formData, setFormData] = useState<Partial<IUser>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({} as IUser);
    await register<IUser>(formData);
    if (!requestError) {
      navigate('/login');
    }
  };
  return (
    <div className={styles['container']}>
      <h1>Fulfill your information!</h1>
      <form className={styles['register-form']} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            onChange={handleChange}
            placeholder="name"
            type="text"
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            onChange={handleChange}
            placeholder="email"
            type="text"
          />
        </label>
        <label>
          Username:
          <input
            name="username"
            onChange={handleChange}
            placeholder="username"
            type="text"
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            onChange={handleChange}
            placeholder="password"
            type="text"
          />
        </label>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
