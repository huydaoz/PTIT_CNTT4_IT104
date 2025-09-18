import { createStore } from "redux";

const CHANGE_COMPANY = "CHANGE_COMPANY";

export const changeCompany = () => {
  return {
    type: CHANGE_COMPANY,
  };
};

const initialState = {
  company: "Rikkei Academy",
};

const companyReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case CHANGE_COMPANY:
      return {
        ...state,
        company: "RikkeiSoft",
      };
    default:
      return state;
  }
};

export const store = createStore(companyReducer);
