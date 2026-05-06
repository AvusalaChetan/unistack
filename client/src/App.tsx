import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/landingpage/LandingPage';
import RegisterInstitute from './pages/auth/RegisterInstitute';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import AuthLayout from './layout/AuthLayout';

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/auth',
        element: <AuthLayout />,
        children: [
          { path: 'register-institute', element: <RegisterInstitute /> },
          { path: 'signup', element: <Signup /> },
          { path: 'login', element: <Login /> },
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
      },
    }
  );
  return <RouterProvider router={router} />;
};

export default App;
