import { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authService from './appwrite/auth';
import { Header, Footer } from './components';

function App() {
  const [loading, setLoading] = useState(true);
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
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full  block">
        <Header>{/* <Outlet></Outlet> */}</Header>
        <Footer></Footer>
      </div>
    </div>
  ) : null;
}

export default App;
