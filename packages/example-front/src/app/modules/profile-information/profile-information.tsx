import { IUser } from '../../types/user.interface';
import styles from './profile-information.module.scss';

export function ProfileInformation(props: { user: IUser | undefined }) {
  const { user } = props;
  if (!user) {
    return <></>;
  }
  return (
    <div className={styles['profile-information']}>
      <div>
        <span>username:</span>
        {user.username}
      </div>
      <div>
        <span>name:</span>
        {user.name}
      </div>
      <div>
        <span>email:</span>
        {user.email}
      </div>
      <div>
        <span>address:</span>
        {user.address}
      </div>
    </div>
  );
}

export default ProfileInformation;
