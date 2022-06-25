import CardList from "../../cards/CardList";
import PeopleForm from "../../form/forms/PeopleForm";
import { gql, useQuery } from '@apollo/client';
import { GET_PEOPLE } from "../../../graphql/query";
import Loading from "../../loading/Loading";
import Context from "../../context/Context";


export default function(){
    const {data, loading} = useQuery(GET_PEOPLE)

    const value = {
        isCar: false
    }
    

    return (
        <>
            <Context.Provider value={value}>
                <PeopleForm />
                {loading ? <Loading /> : <CardList peopleData={data.people}/>}
            </Context.Provider>
        </>
    )
}