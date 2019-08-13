// Export Two Things - initialState, reducer fn

export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }

]


  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
            ...state,
            {
                item: action.payload,
                completed: false
             }
            ];
      default:
        return state;
    }
  };
  
