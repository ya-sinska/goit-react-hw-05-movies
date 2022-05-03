import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';
const HomePage = lazy(() => import('pages/HomePage/HomePage' /* webpackChunkName: "HomePage"*/));
const Layout  = lazy(() => import('./Layout/Layout' /* webpackChunkName: "Layout"*/));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage"*/));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/));
const Cast = lazy(() => import('pages/Cast/Cast' /* webpackChunkName: "Cast"*/));
const Reviews = lazy(() => import('pages/Reviews/Reviews' /* webpackChunkName: "Reviews"*/));
export const App = () => {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loader/>}>
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
