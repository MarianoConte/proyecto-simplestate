import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useAuth } from '../../context/AuthProvider';

const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) return <Navigate to='/' />;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
