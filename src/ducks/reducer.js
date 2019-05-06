const initialState = {
    username: '',
    id: null,
    profile_pic: ''
}

const USER_CREDENITAL = 'USER_CREDENITAL'

export const updateUser = (req) => {
    const {username, id, profile_pic} = req
    return {
        type: USER_CREDENITAL,
        payload: {username, id, profile_pic}
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