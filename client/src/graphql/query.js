import {gql} from "@apollo/client"

export const ADD_PEOPLE = gql`
        mutation Mutation($id: String!, $firstName: String!, $lastName: String!) {
            addPeople(id: $id, firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
            }
        }
`