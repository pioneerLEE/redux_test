//import

//actions

//action creators

//initail state
const intialState = {
    isLoggedIn: localStorage.getItem('jwt') || false
}
//reducer

function reducer(state = intialState, action){
    switch(action.type){
        default:
            return state;
    }
}

//reducer functions

//exports

//reducer exports

export default reducer;