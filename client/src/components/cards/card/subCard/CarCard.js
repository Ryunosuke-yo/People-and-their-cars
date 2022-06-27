import { Button, Card } from "antd";
import { useState } from "react";
import UpdateCarForm from "../../../form/forms/updateForm/UpdateCarForm";


export default function({car}){

    const {year, make, model, price} = car

    const [isUpdateCar, setIsUpdateCar] = useState(false)

    return (
            isUpdateCar ? <UpdateCarForm car={car}/> :

            <Card type="inner" style={{margin : "2rem", textAlign: "center"}}>
                {model} - {make} - {price} - {year}
            
                <div style={btnCon}>
                    <Button size="small" onClick={()=>setIsUpdateCar(prev => !prev)}>Edit</Button>
                    <Button size="small">Delete</Button>
                </div>
            </Card>
        
    )
}


const btnCon = {
    display : "flex",
    justifyContent : "space-around",
    marginTop  :"1rem"
}