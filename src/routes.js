// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <NavBar />
        <Movie />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/directors",
    element: (
      <>
        <NavBar />
        <Directors />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/actors",
    element: (
      <>
        <NavBar />
        <Actors />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
