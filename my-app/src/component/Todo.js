import React, { useReducer } from 'react';

//imported reducer
import { initialState, reducer } from '../reducers/reducer';


const Todo = () => {
    // useReducer - takes in a reducer, and an initialState obj
    // returns - a state obj, and the dispatch fn
    const [state, dispatch] = useReducer (reducer, initialState);
    console.log('This is my state:', state)


    return(
        <div>
            <h1>Todo:</h1>
        </div>
    )
}

export default Todo;