import { useMutation } from "@apollo/client";
import { Button, Card } from "antd";
import { useContext, useEffect, useReducer, useState } from "react";
import { DELETE_PEOPLE, GET_PEOPLE } from "../../../graphql/query";
import Context from "../../context_reducer/Context";
import { initialState, reducer } from "../../context_reducer/Reducer";
import UpdatePeopleForm from "../../form/forms/updateForm/UpdatePeopleForm";
import CarCard from "./subCard/CarCard";
import { filter } from 'lodash'
import { useNavigate, useParams } from "react-router-dom";



export default function({peopleData}){
    const [filteredCars, setFilteredCars] = useState([])
    const navigate = useNavigate()
    let {personId: params} = useParams()
    
    const [state, dispatch] = useReducer(reducer, initialState)
    const {isUpdatePeople} = state

    const {carData, isCar} = useContext(Context)

    const {firstName, lastName, id} = peopleData

    const [deletePeople] = useMutation(DELETE_PEOPLE, {
        update(cache, {data: {deletePeople}}) {
            const {people} = cache.readQuery({query : GET_PEOPLE})

            cache.writeQuery({
                query : GET_PEOPLE,
                data: {
                    people : filter(people, p=> p.id !== deletePeople.id)
                }
            })
        }
    })
    useEffect(()=>{
        if (isCar){
            const filteredCars = carData?.filter(car=> car.personId === id)
            setFilteredCars(filteredCars)
        }
        
    }, [carData])
    
    
    const mapCars = filteredCars?.map(car=>  <CarCard car={car} key={car.id}/>)

    const clickEditBtn = ()=>{
        dispatch({type : "IS_UPDATE_PEOPLE", payload : state.isUpdatePeople = !state.isUpdatePeople})
        console.log("cli")
    }

    const clickDeleteBtn = ()=>{
        console.log("a")
        deletePeople({
            variables : {
                id,
                firstName,
                lastName
            }, 
        })
    }
    const title = `${firstName} ${lastName}`

    const onClickLearn = ()=>{
        params = id
        console.log(params)
        navigate(`/people/show/${params}`)
    }
    const LearnMoreBtn =  <Button style={{marginTop : "3rem", width : "100%"}} onClick={onClickLearn}>Learn More</Button>

    return (
        <Card title={title}>
            {state.isUpdatePeople && <UpdatePeopleForm peopleData={peopleData}/>}
            <div style={btnCon}>
            <Button onClick={clickEditBtn}>Edit</Button>
            <Button onClick={clickDeleteBtn}>Delete</Button>
            </div>
            {isCar ? mapCars : LearnMoreBtn}
        </Card>
    )
}


const btnCon = {
    display : "flex",
    justifyContent : "space-around"
}