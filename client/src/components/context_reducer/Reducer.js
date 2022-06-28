export const initialState = {
    peopleData : [],
    isUpdatePeople : false,
    idToUpdatePeople : "",
    isUpdateCar : false,
    peopleData : {},
    carData : [],
    isCar : false
}


export const reducer = (state, action)=> {
    switch (action.type) {
        case "SET_PEOPLE_DATA" : 
            return {...state, peopleData: action.payload}
        case "IS_UPDATE_PEOPLE" : 
            return {...state, isUpdatePeople : action.payload}
        case "ID_TO_UPDATE_PEOPLE" : 
            return {...state, idToUpdatePeople : action.payload}
        case "PEOPLE_DATA" : 
            return {...state, peopleData : action.payload}
        case "CAR_DATA" :
            return {...state, carData : action.payload}
        case "IS_CAR" : 
            return {...state, isCar : action.payload}
    }
}