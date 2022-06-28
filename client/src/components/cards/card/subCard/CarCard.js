import { useMutation } from "@apollo/client";
import { Button, Card } from "antd";
import { useEffect, useState } from "react";
import { DELETE_CAR, GET_CAR } from "../../../../graphql/query";
import UpdateCarForm from "../../../form/forms/updateForm/UpdateCarForm";
import { filter } from 'lodash'
import { useLocation, useParams } from "react-router-dom";

export default function({car}){

    const {year, make, model, price, id, personId} = car
    const location= useLocation()
    const [isCarPage, setIsCarPage] = useState(true)
    
    useEffect(()=>{
        if(location.pathname == "/cars"){
            setIsCarPage(true)
        } else {
            setIsCarPage(false)
        }
    }, [location])

    const [isUpdateCar, setIsUpdateCar] = useState(false)

    const [deleteCar] = useMutation(DELETE_CAR, {
        update(cache, {data: {deleteCar}}) {
            const {cars} = cache.readQuery({query : GET_CAR})

            cache.writeQuery({
                query : GET_CAR,
                data: {
                    cars : filter(cars, c=> c.id !== deleteCar.id)
                }
            })
        }
    })


    const onClickDelete = ()=>{
            deleteCar({
                variables : {
                    id,
                    year,
                    make,
                    model,
                    price,
                    personId
                }
            })
    }

    const formatCurrency = new Intl.NumberFormat("en-US", {
        style : "currency",
        currency: "CAD",
        maximumSignificantDigits: 3
    })


    return (
            isUpdateCar ? <UpdateCarForm car={car}/> :

            <Card type="inner" style={{margin : "2rem", textAlign: "center"}}>
                {model} - {make} - {formatCurrency.format(price)} - {year}

                {isCarPage ? 
                    <div style={btnCon}>
                        <Button size="small" onClick={()=>setIsUpdateCar(prev => !prev)}>Edit</Button>
                        <Button size="small" onClick={onClickDelete}>Delete</Button>
                    </div> 
                : null
                }
                
            </Card>
        
    )
}


const btnCon = {
    display : "flex",
    justifyContent : "space-around",
    marginTop  :"1rem"
}