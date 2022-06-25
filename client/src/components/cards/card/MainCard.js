import { Button, Card } from "antd";
import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import CarCard from "./subCard/CarCard";


export default function({peopleData}){
    const [filteredCars, setFilteredCars] = useState([])

    const {carData, isCar} = useContext(Context)

    const {firstName, lastName, id} = peopleData

    useEffect(()=>{
        if (isCar){
            const filteredCars = carData?.filter(car=> car.personId === id)
            setFilteredCars(filteredCars)
        }
    }, [carData])
    
    
    const mapCars = filteredCars?.map(car=>  <CarCard car={car} key={car.id}/>)


    const title = `${firstName} ${lastName}`

    return (
        <Card title={title}>
            <div style={btnCon}>
            <Button>Edit</Button>
            <Button>Delete</Button>
            </div>
            {isCar ? mapCars : null}
            {/* <Card type="inner">
                {firstName}
            </Card>
            <Card type="inner">
                {lastName}
            </Card> */}
            {/* <Card type="inner">
                inner
            </Card>
            <Card type="inner">
                inner
            </Card> */}
        </Card>
    )
}


const btnCon = {
    display : "flex",
    justifyContent : "space-around"
}