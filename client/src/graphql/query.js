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

export const PERSON_WITH_CARS = gql`
        query Query($id: String!) {
            personWithCars(id: $id) {
            person {
                lastName
                firstName
                id
            }
            cars {
                id
                year
                make
                model
                price
                personId
            }
            }
        }
`

export const CAR_WITH_PERSON_ID = gql`
        query Query($personId: String!){
            carWithPersonId(personId: $personId) {
                personId
                price
                id
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
        mutation Mutation($year: Int!, $make: String!, $model: String!, $price: Float!, $id: String!) {
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


export const UPDATE_People = gql`
    mutation Mutation($id: String!, $firstName: String!, $lastName: String!) {
        updatePeople(id: $id, firstName: $firstName, lastName: $lastName) {
        id
        firstName
        lastName
        }
    }
  `

export const UPDATE_CAR = gql`
        mutation Mutation($year: Int!, $make: String!, $model: String!, $price: Float!, $personId: String!, $id: String!) {
            updateCar(year: $year, make: $make, model: $model, price: $price, personId: $personId, id: $id) {
            id
            year
            model
            make
            price
            personId
            }
        }
`

export const DELETE_PEOPLE = gql`
        mutation Mutation($id: String!, $firstName: String!, $lastName: String!) {
            deletePeople(id: $id, firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
            }
        }`

export const DELETE_CAR = gql`
        mutation Mutation($year: Int!, $make: String!, $model: String!, $price: Float!, $personId: String!, $id: String!) {
            deleteCar(year: $year, make: $make, model: $model, price: $price, personId: $personId, id: $id) {
            id
            year
            make
            model
            price
            personId
            }
        }
`

