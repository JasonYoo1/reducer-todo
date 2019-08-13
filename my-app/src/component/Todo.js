import React, { useState, useReducer } from 'react';

//imported reducer
import { initialState, reducer } from '../reducers/reducer';


export const Todo = () => {
    const [newItem, setNewItem] = useState();
    // useReducer - takes in a reducer, and an initialState obj
    // returns - a state obj, and the dispatch fn
    const [state, dispatch] = useReducer (reducer, initialState);

    // console.log('This is my state:', state)
    const handleChanges = e => {
        setNewItem(e.target.value);
      };
    
      

    return(
        <div>
            {/* {console.log('new Item:', newItem)} */}
            <div>
                <input
                className="item-input"
                type="text"
                name="newItem"
                value={newItem}
                onChange={handleChanges}
                />

                {state.map(a => {
                    return(
                        <div key= {a.id} >{a.item} <button>Remove Item</button></div>
                        
                    )
                })}
                
                <button
                onClick={() =>
                dispatch({ type: 'ADD_TODO', payload: newItem })
                }   
                >Add Item</button>
            </div>
        </div>
    )
    
}


