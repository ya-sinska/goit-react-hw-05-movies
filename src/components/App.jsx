import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { Layout } from './Layout/Layout';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage/MovieDetailsPage';
import { Cast } from 'pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';

export const App = () => {
  return (
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
   
  );
};
// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе.
//  Рендерится на странице < MovieDetailsPage >.
// /movies/:movieId/reviews - компонент <Reviews>, 
// информация об обзорах.Рендерится на странице < MovieDetailsPage >.