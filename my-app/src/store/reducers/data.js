const initialState = {
    hasErrored: false,
    isLoading: false,
    items: []
}

export const data = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_HAS_ERRORED':
            return {
                ...state, 
                hasErrored: action.hasErrored 
            };
        case 'DATA_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
  
            };
        case 'DATA_FETCH_SUCCESS':
            return {
              ...state,
              items: action.payload  
            };
        default:
            return state;
    }
}

