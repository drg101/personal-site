const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ADDRESS':
            return {
                ...state,
                address: action.payload
            };
        case 'SET_CONTRACT':
            return {
                ...state,
                contract: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;