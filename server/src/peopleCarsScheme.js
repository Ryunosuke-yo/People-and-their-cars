import { gql } from 'apollo-server-express'
import { people, cars } from './people_cars.js'

const typeDefs = gql`
    type People {
        id : String!
        firstName : String!
        lastName : String!
      }

      type Car {
        id: String!
        year: Int!
        make: String!
        model: String!
        price: Float!
        personId: String!
      }
    
      type Query {
        people: [People]
        cars : [Car]
      }

      type Mutation {
        addPeople(id : String!, firstName : String!, lastName : String!) : People
        addCars(year: Int!, make : String!, model: String!, price: Float!, personId: String!, id: String!) : Car
      }
`

const resolvers = {
  Query : {
    people(){
      return people
    },
    cars(){
      return cars
    }
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
    },

    addCars (root, args) {
        const {year, make, model, price, personId, id} = args
        const newCar = {
            id : id,
            personId : personId,
            year : year,
            make : make,
            model : model,
            price  : price
        }

        cars.push(newCar)
        return newCar
    }
  }
}

export {typeDefs, resolvers}