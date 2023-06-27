import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import { HomePage, BooksPage, ErrorPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'books',
        element: <BooksPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
