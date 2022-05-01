import { Outlet} from "react-router-dom"

import { Info, Title, Detail } from "./AdittionalInfo.styled"
export const AdittionalInfo = () => {
    return (
            <Info>
                <Title>Adittional information</Title>
                <Detail to={"cast"}>Actors</Detail>
                <Detail to={"reviews"}>Reviews</Detail>
                <Outlet/>
            </Info>
    )
}