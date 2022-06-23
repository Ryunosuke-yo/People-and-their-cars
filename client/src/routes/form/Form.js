import FormWrapper from "./FormWrapper";
import { useState } from "react";
import {Button, Form, Input} from "antd"
import { useMutation } from "@apollo/client";
import { ADD_PEOPLE } from "../../graphql/query";
import { v4 as uuidv4 } from 'uuid'

const {Item} = Form


export default function(){
    const [id] = useState(uuidv4())
    const [addPeople] = useMutation(ADD_PEOPLE)
    const onFinish = (v)=>{
        const {firstName, lastName} = v
        console.log(v)
        addPeople({variables : {id, firstName, lastName}})
    }
    return (
        <div style={{marginLeft : "auto", marginRight : "auto", marginTop : "3rem"}}>

           <FormWrapper title="Person Form" onFinish={onFinish} formType="person">
                <Item label="First Name" name="firstName">
                    <Input placeholder="first name"/>
                </Item>
                <Item label="Last name" name="lastName">
                    <Input placeholder="last name" />
                </Item>
           </FormWrapper>

           <FormWrapper  title="Car Form">
                <Item label="Year" name="year">
                    <Input placeholder="year"/>
                </Item>
                <Item label="Make" name="make">
                    <Input placeholder="make"/>
                </Item>
                <Item label="Model" name="model">
                    <Input placeholder="model"/>
                </Item>
                <Item label="Price" name="price">
                    <Input placeholder="price"/>
                </Item>
           </FormWrapper>
        </div>
    )
}
