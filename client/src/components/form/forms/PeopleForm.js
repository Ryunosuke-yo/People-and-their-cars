import FormWrapper from "../wrapper/FormWrapper";
import { Input, Form } from "antd";
import { ADD_PEOPLE, GET_PEOPLE } from "../../../graphql/query";
import { v4 as uuidv4 } from 'uuid'
import { useMutation } from "@apollo/client";
import { useState } from "react";

const {Item} = Form


export default function() {
    const [id] = useState(uuidv4())
    const [addPeople] = useMutation(ADD_PEOPLE)

    const onFinishPerson = (v)=>{
        const {firstName, lastName} = v

        addPeople({variables : {id, firstName, lastName}, 
            update : (proxy, {data : {addPeople}})=>{

                const data = proxy.readQuery({query : GET_PEOPLE})
                proxy.writeQuery({
                    query : GET_PEOPLE,
                    data : {
                        ...data,
                        people : [...data.people, addPeople]
                    }
                })
            }
        })
    }

    return (
        <FormWrapper title="Person Form" onFinish={onFinishPerson}>
            <Item label="First Name" name="firstName">
                <Input placeholder="first name"/>
            </Item>
            <Item label="Last name" name="lastName">
                <Input placeholder="last name" />
            </Item>
        </FormWrapper>
    )
}