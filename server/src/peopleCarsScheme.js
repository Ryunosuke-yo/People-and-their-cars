import { gql } from 'apollo-server-express'
import { people, cars } from './people_cars.js'

const typeDefs = gql`
    type People {
        id : String!
        firstName : String!
        lastName : String!
      }
    
      type Query {
        people: [People]
      }

      type Mutation {
        addPeople(id : String!, firstName : String!, lastName : String!) : People
      }
`

const resolvers = {
  Query : {
    people(){
      return people
    },
  },
  Mutation : {
    addPeople(root, args) {
      const {id, firstName, lastName} = args
      const newPeople = {
          id : id,
          firstName : firstName,
          lastName : lastName
      }
      people.push(newPeople)
      return newPeople
    }
  }
}

export {typeDefs, resolvers}