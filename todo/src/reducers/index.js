export const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589,
    },
  ],
  newTodoText: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'SET_NEW_TODO_TEXT':
      return { ...state, newTodoText: action.payload };
    case 'SET_COMPLETED':
      const newState = state.todos.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return { ...state, todos: newState };
    case 'CLEAR_COMPLETED':
      const clearCompleted = state.todos.filter(
        (item) => item.completed === false
      );
      return { ...state, todos: clearCompleted };
    default:
      return state;
  }
};

export default reducer;
