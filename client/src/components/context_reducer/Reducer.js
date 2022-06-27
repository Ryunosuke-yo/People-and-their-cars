export const initialState = {
    peopleData : [],
    isUpdatePeople : false,
    idToUpdatePeople : "",
    isUpdateCar : false
}


export const reducer = (state, action)=> {
    switch (action.type) {
        case "SET_PEOPLE_DATA" : 
            return {...state, peopleData: action.payload}
        case "IS_UPDATE_PEOPLE" : 
            return {...state, isUpdatePeople : action.payload}
        case "ID_TO_UPDATE_PEOPLE" : 
            return {...state, idToUpdatePeople : action.payload}
    }
}