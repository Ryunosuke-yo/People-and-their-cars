import { PERSON_WITH_CARS } from "../../../graphql/query";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Button, Card } from "antd";
import CarCard from "../../cards/card/subCard/CarCard";
import Loading from "../../loading/Loading"
import { useNavigate, useParams } from "react-router-dom";


export default function(){
    const {personId: id} = useParams()

    const [cars, setCars] = useState([])
    
    const navigate = useNavigate()
    // console.log(personData?.personWithCars)
    const {data, loading} = useQuery(PERSON_WITH_CARS, {
        variables: {
            id
        }
    })
    

    console.log(data)

    const mapCars = data?.personWithCars.cars.map(car=> <CarCard car={car} key={car.id}/>)
   

    const firstName = data?.personWithCars.person.firstName
    const lastName = data?.personWithCars.person.lastName

    const clickGoBack = ()=>{
        navigate("/")
    }

    return (
        loading ? <Loading /> :
        <div style={{marginLeft : "16rem", padding: "2rem"}}>
            <Card title= {`${firstName} ${lastName}`} >
                {mapCars}
            <Button style={{width : "100%"}} onClick={clickGoBack}>GO BACK HOME</Button>
            </Card>
        </div>
        
    )
}