type Action = {
  type: string;
  payload?: any;
};

const initialState = {
  cart: [
    { id: 1, title: "Pizza", price: 30, quantity: 1 },
    { id: 2, title: "Hamburger", price: 40, quantity: 1 },
    { id: 3, title: "Bread", price: 20, quantity: 1 },
    { id: 4, title: "Cake", price: 10, quantity: 1 },
  ],
};

export const reducerCart = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREASE": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    case "DECREASE": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }
    case "DELETE": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case "ADD_TO_CART": {
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    default:
      return state;
  }
};
