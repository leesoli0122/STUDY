const thunk = (store) =>  (next) => (action) => {
  //logic
  if(typeof action === 'function') {
    action(store.dispatch, store.getState);
  } else {
    next(action);
  }
}

export default thunk;