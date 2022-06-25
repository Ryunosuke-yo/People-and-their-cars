import {gql} from "@apollo/client"


export const GET_PEOPLE = gql`
        query Query {
            people {
            id
            firstName
            lastName
            }
        }
`

export const GET_CAR = gql`
        query Query {
            cars {
            id
            year
            make
            model
            price
            personId
            }
        }
`
export const ADD_PEOPLE = gql`
        mutation Mutation($id: String!, $firstName: String!, $lastName: String!) {
            addPeople(id: $id, firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
            }
        }
`   

export const ADD_CARS = gql`
        mutation Mutation($year: Int!, $make: String!, $model: String!, $price: Float!, $personId: String!, $id: String!) {
            addCars(year: $year, make: $make, model: $model, price: $price, personId: $personId, id: $id) {
            id
            year
            make
            model
            price
            personId
            }
        }
`   