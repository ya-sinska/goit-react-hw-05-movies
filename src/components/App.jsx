import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';
import { NoFetchResults } from './NoFetchResults/NoFetchResults';
const HomePage = lazy(() => import('pages/HomePage/HomePage' /* webpackChunkName: "HomePage"*/));
const Layout  = lazy(() => import('./Layout/Layout' /* webpackChunkName: "Layout"*/));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage"*/));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/));

export const App = () => {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage/>} />
            <Route path="movies" element={<MoviesPage />}>
              <Route path=':slug/*' element={<MovieDetailsPage />}/>
            </Route>
            <Route path="*" element={<NoFetchResults text={ "Sorry, there is no page here"}/>}/>
          </Route>
        </Routes>
      </Suspense>

    </>
  );
};
