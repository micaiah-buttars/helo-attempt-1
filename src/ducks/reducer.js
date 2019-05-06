const initialState = {
    username: '',
    id: null,
    profile_picture: ''
}

const USER_CREDENITAL = 'USER_CREDENITAL'

export const credential = (req) => {
    const {username, id, profile_picture} = req
    return {
        type: USER_CREDENITAL,
        payload: {username, id, profile_picture}
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case USER_CREDENITAL:
            return {...state, ...action.payload}
        default:
            return state
    }
}