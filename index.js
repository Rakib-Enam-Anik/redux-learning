//state 

//defining constants 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialCounterState = {
    count: 0,
    }

    const initialUsersState = {
        users: [
            {name: 'Rakib Enam'}
        ],
        }

//action
//INCREMENT COUNTER
const incrementCounter = () => {
    return {
        type : 'INCREMENT',
    
    };

};

const decrementCounter = () => {
    return {
        type : 'DECREMENT',
    
    };
};

const addUser = () => {
        return {
            type : "ADD_USER",
        
        };

};


//DECREMENT COUNTER

// 1. State
// 2. dispatch action
// 3. reducer
// 4. store

// create reducer for counter

const counterReducer = ( state=initialCounterState, action) => {
    switch (action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
            //
        case DECREMENT:
            return{
                ...state,
             count: state.count - 1
            };
            
            //
        default:
            state:
    }
}