import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthPage, RootPage } from '@/pages';

const router = createBrowserRouter([{ path: '/', element: <RootPage />, children: [{ path: 'auth', element: <AuthPage /> }] }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
