import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
const LogoutButton = () => {
  const dispatch = useDispatch();
  const logoutHandle = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return <button onClick={logoutHandle}>Logout</button>;
};

export default LogoutButton;
