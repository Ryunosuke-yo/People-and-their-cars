import { Input, Form, Button } from "antd";
import { useMutation } from "@apollo/client";
import { UPDATE_CAR } from "../../../../graphql/query";
import DropMenu from "../../dropdown/DropMenu"
import { useState } from "react";

const {Item} = Form



export default function({car}){
    
    const {year, make, model, price, id} = car


    const [personId, setPersonId] = useState()
    const [updateCar] = useMutation(UPDATE_CAR)


    const onFinish = (e)=>{
        const {make, model} = e
        const price = Number(e.price)
        const year = Number(e.year)
        // console.log(e)
        // console.log(personId)
        updateCar({
            variables : {
                id,
                make,
                model,
                price,
                year,
                personId
            }
        })
    }

    return (
        <Form  layout="vertical" onFinish={onFinish}>
            <Item label="Model" name="model">
                <Input placeholder={model}/>
            </Item>

            <Item label="Make" name="make">
                <Input placeholder={make}/>
            </Item>

            <Item label="Price" name="price">
                <Input placeholder={price} type="number" step="0.01" />
            </Item>

            <Item label="Year" name="year">
                <Input placeholder={year} type="number"/>
            </Item>
            <Item>
                <DropMenu setValue={setPersonId}/>
            </Item>
            <Item style={{textAlign : "center"}}>
                <Button htmlType="submit">Update</Button>
            </Item>
        </Form>
    )
}