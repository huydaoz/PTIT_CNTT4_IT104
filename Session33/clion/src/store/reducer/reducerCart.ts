type Action = {
  type: string;
  payload: any;
};

const initialState = {
  cart: [
    {
      id: 1,
      title: "Cake",
      price: 10,
      quantity: 5,
    },
    {
      id: 2,
      title: "Hamburger",
      price: 15,
      quantity: 32,
    },
  ],
};

export const reducerCart = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return state;
    default:
      return state;
  }
};
