export default function reducer(state, action) {
  switch (action.type) {
    case 'ADDED': {
      return [...state, { id: Date.now(), task: action.task, done: false }];
    }
    case 'UPDATED': {
      return state.map((todo) =>
        todo.id !== action.id ? todo : { ...todo, task: action.task }
      );
    }
    case 'TOGGLE': {
      return state.map((todo) =>
        todo.id !== action.id ? todo : { ...todo, done: !todo.done }
      );
    }
    case 'DELETED': {
      return state.filter((todo) => todo.id !== action.id);
    }
    default: {
      return state;
    }
  }
}
