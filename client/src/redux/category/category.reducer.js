const INITIAL_STATE = {
  categories: 'muuuulte'
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
}

export default categoryReducer;