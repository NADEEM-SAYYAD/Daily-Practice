//Constants
export const INCREMENT = 'INC';
export const DECREMENT = 'DEC';
//Functions
export const counterInc = () =>{
    return{
        type : INCREMENT
    }
}
export const counterDec = () =>{
    return{
        type: DECREMENT
    }
}
export const counterReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
};

