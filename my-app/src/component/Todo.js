import React, { useState, useReducer } from 'react';

//imported reducer
import { initialState, reducer } from '../reducers/reducer';


const Todo = () => {
    const [newItem, setNewItem] = useState();
    // useReducer - takes in a reducer, and an initialState obj
    // returns - a state obj, and the dispatch fn
    const [state, dispatch] = useReducer (reducer, initialState);
    console.log('This is my state:', state)

    const handleChanges = e => {
        setNewItem(e.target.value);
      };
    

    return(
        <div>
            <h1>Todo:</h1>

            <div>
                <input
                className="title-input"
                type="text"
                name="newItem"
                value={newItem}
                onChange={handleChanges}
                />
                <button
                onClick={() =>
                dispatch({ type: 'ADD_TODO', payload: newItem })
                }   
                >Add Item</button>
            </div>
        </div>
    )
}

export default Todo;