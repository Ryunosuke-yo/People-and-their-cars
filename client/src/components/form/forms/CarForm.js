import FormWrapper from "../wrapper/FormWrapper";
import { Input, Form } from "antd";
import DropMenu from "../dropdown/DropMenu";
import { useMutation } from "@apollo/client";
import { ADD_CARS, GET_CAR } from "../../../graphql/query";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'



const {Item} = Form



export default function(){
    const [id] = useState(uuidv4())
    const [addCars] = useMutation(ADD_CARS)
    const [personId, setPersonId] = useState()

    const onFinishCar = v =>{
        const {make, model} = v
        const price = Number(v.price)
        const year = Number(v.year)
        
        
        console.log(v, personId)
        addCars({variables : { 
            id,
            year,
            make,
            model,
            price,
            personId,
        },
        update : (proxy, {data : {addCars}})=>{
            const data = proxy.readQuery({query : GET_CAR})
            proxy.writeQuery({
                query : GET_CAR,
                data : {
                    ...data,
                    cars: [...data.cars, addCars]
                }
            })
        }
    })
    }

    return (
        <FormWrapper  title="Car Form" onFinish={onFinishCar}>
                <Item label="Year" name="year">
                    <Input placeholder="year" type="number"/>
                </Item>
                <Item label="Make" name="make">
                    <Input placeholder="make"/>
                </Item>
                <Item label="Model" name="model">
                    <Input placeholder="model"/>
                </Item>
                <Item label="Price" name="price">
                    <Input placeholder="price" type="number" step="0.01"/>
                </Item>
                <Item>
                    <DropMenu setValue={setPersonId}/>
                </Item>
           </FormWrapper>
    )
}