export const cartReducer = (state, action) => {
    switch (action.type) {
      case "SET_CART":
        return { ...state };
      default:
        return state;
    }
  };
  
  