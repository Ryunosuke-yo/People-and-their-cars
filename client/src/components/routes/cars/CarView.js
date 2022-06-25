import CardList from "../../cards/CardList";
import CarForm from "../../form/forms/CarForm";
import { GET_PEOPLE, GET_CAR } from "../../../graphql/query";
import { useQuery } from "@apollo/client";
import Loading from "../../loading/Loading";
import Context from "../../context/Context";


export default function(){
    const {data : peopleData, loading} = useQuery(GET_PEOPLE)
    const {data: carData, loading: carLoading} = useQuery(GET_CAR)
    console.log(carData)

    const contextValue = {
        peopleData :peopleData?.people,
        carData : carData?.cars,
        carLoading,
        isCar : true
    }
    return (
        loading ? <Loading /> :
        <>
            <Context.Provider value={contextValue}>
                <CarForm />
                <CardList peopleData={peopleData.people}/>
            </Context.Provider>
        </>
    )
}