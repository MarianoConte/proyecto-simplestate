import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NewInvestment from './pages/NewInvestment';
import ProtectedRoute from './shared/components/ProtectedRoute';
import { ApolloProvider } from '@apollo/client';
import AuthProvider from './context/AuthProvider';
import { apolloClient } from './apolloClient';
import PublicRoute from './shared/components/PublicRoute';
import NewInvestmentReceipt from './pages/NewInvestmentReceipt.jsx';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path='/' element={<Login />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path='/new-investment' element={<NewInvestment />} />
              <Route
                path='/new-investment-receipt'
                element={<NewInvestmentReceipt />}
              />
            </Route>
          </Routes>
        </ApolloProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
