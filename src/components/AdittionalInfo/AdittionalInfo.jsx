import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from 'react';
import { Info, Title, Detail } from "./AdittionalInfo.styled"
const Cast = lazy(() => import('pages/Cast/Cast' /* webpackChunkName: "Cast"*/));
const Reviews = lazy(() => import('pages/Reviews/Reviews' /* webpackChunkName: "Reviews"*/));
export const AdittionalInfo = () => {
    return (
            <Info>
                <Title>Adittional information</Title>
                <Detail to={"cast"}>Actors</Detail>
                <Detail to={"reviews"}>Reviews</Detail>
            <Suspense>
                <Routes>
                    <Route path='cast' element={<Cast/>} />
                    <Route path='reviews' element={<Reviews />} />
                </Routes>
            </Suspense>


            </Info>
    )
}