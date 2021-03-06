import { gql } from 'apollo-server-express'
import { people, cars } from './people_cars.js'
import pkg from "lodash"


const {find, remove} = pkg;


const typeDefs = gql`
    type People {
        id : String!
        firstName : String
        lastName : String
      }
      type Car {
        id: String!
        year: Int!
        make: String!
        model: String!
        price: Float!
        personId: String!
      }

      type Person {
        person : People
        cars : [Car]
      }

    
      type Query {
        people: [People]
        cars : [Car]
        personWithCars(id : String!) : Person
      }

      type Mutation {
        addPeople(id : String!, firstName : String!, lastName : String!) : People
        addCars(year: Int!, make : String!, model: String!, price: Float!, personId: String!, id: String!) : Car
        updatePeople(id : String!, firstName: String!, lastName: String!) : People
        updateCar(year: Int!, make : String!, model: String!, price: Float!, personId: String!, id: String!) : Car
        deletePeople(id : String!, firstName : String!, lastName : String!) : People
        deleteCar(year: Int!, make : String!, model: String!, price: Float!, personId: String, id: String!) : Car
      }
`

const resolvers = {
  Query : {
    people(){
      return people
    },
    cars(){
      return cars
    },
    personWithCars(parent, args, context, info){
      // console.log(args)
      const carsToFind = cars.filter(car=> car.personId == args.id)
      const peopleToFind = find(people, {id : args.id})
      return {person : peopleToFind, cars: carsToFind}
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
    },

    updatePeople (root, args) {
      const peopleToUpdate = find(people, {id : args.id})
      console.log(peopleToUpdate)

      peopleToUpdate.firstName = args.firstName
      peopleToUpdate.lastName = args.lastName

      return peopleToUpdate
    },

    updateCar (root, args) {
      const carToUpdate = find(cars, {id : args.id})
      const {make, model, year, price, personId} = args
      carToUpdate.make = make
      carToUpdate.year = year
      carToUpdate.price = price
      carToUpdate.make = make
      carToUpdate.personId = personId
      carToUpdate.model = model

      return carToUpdate
    },

    deletePeople (root, args) {
      const peopleToDelete = find(people, {id : args.id})
      remove(people, {id :args.id})
      remove(cars, {personId : args.id})

      return peopleToDelete
    },

    deleteCar (root, args) {
      const carToDelete = find(cars, {id: args.id})
      remove(cars, {id : args.id})

      return carToDelete
    },
  }
}

export {typeDefs, resolvers}