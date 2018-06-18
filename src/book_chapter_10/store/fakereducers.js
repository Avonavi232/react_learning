import C from '../constants'

export const color = (state = {}, action = {type: null}) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return Object.assign({}, state, {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            });

        case C.RATE_COLOR:
            return {
                ...state,
                rating: action.rating
            };

        default :
            return state
    }
}

