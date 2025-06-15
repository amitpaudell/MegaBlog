import { useState } from 'react';
import { Header, Footer } from './components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';

function App() {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !isLoading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header></Header>
        <main>{/* <Outlet></Outlet> */}</main>
        <Footer></Footer>
      </div>
    </div>
  ) : null;
}

export default App;
