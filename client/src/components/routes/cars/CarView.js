import CardList from "../../cards/CardList";
import CarForm from "../../form/forms/CarForm";
import { GET_PEOPLE, GET_CAR } from "../../../graphql/query";
import { useQuery } from "@apollo/client";
import Loading from "../../loading/Loading";
import Context from "../../context_reducer/Context";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../../context_reducer/Reducer";
import PeopleForm from "../../form/forms/PeopleForm";
import { useLocation } from "react-router-dom";


export default function(){
    const {data : peopleData, loading} = useQuery(GET_PEOPLE)
    const {data: carData, loading: carLoading} = useQuery(GET_CAR)
    // console.log(carData)

    const [isHomePage, setIsHomePage] = useState(false)
    const [showCarForm, setShowCarForm] = useState(true)

    const location = useLocation()
    useEffect(()=>{
        if(location.pathname == "/"){
            setIsHomePage(true)
        } else {
            setIsHomePage(false)
        }
    }, [])

    useEffect(()=>{
       peopleData?.people.length == 0 ? setShowCarForm(false) : setShowCarForm(true)
    }, [peopleData])

    const contextValue = {
        peopleData :peopleData?.people,
        carData : carData?.cars,
        isCar : true
    }

    console.log(peopleData)


    return (
        loading ? <Loading /> :
        <>
            <Context.Provider value={contextValue}>
                {isHomePage && <PeopleForm />}  
                {showCarForm && <CarForm />}            
                <CardList peopleData={peopleData.people}/>
            </Context.Provider>
        </>
    )
}