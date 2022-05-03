import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import  HomePage  from '../pages/HomePage/HomePage';
// import  Layout  from './Layout/Layout';
// import  MoviesPage  from '../pages/MoviesPage/MoviesPage';
// import  MovieDetailsPage  from '../pages/MovieDetailsPage/MovieDetailsPage';
// import  Cast  from 'pages/Cast/Cast';
// import  Reviews  from 'pages/Reviews/Reviews';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Layout  = lazy(() => import('./Layout/Layout'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));
export const App = () => {
  return (
    <>
      <ToastContainer />
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage/>} />
            <Route path="movies" element={<MoviesPage />}>
              <Route path=':movieId' element={<MovieDetailsPage />}>
                <Route path='cast' element={<Cast/>} />
                <Route path='reviews' element={<Reviews />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>

    </>

   
  );
};
