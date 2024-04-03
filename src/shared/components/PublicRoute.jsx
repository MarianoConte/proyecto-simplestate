import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const PublicRoute = () => {
  const { token } = useAuth();

  if (token) return <Navigate to='/new-investment' />;

  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicRoute;
