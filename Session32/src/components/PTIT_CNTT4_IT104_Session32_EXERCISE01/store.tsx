import { createStore } from "redux";

export interface UserState {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialState: UserState = {
  id: 1,
  userName: "Đào Quang Huy",
  gender: "Nam",
  dateBirth: "25/06/2006",
  address: "Thanh Xuân, Hà Nội",
};

function userReducer(state = initialState, action: any): UserState {
  switch (action.type) {
    default:
      return state;
  }
}

export const store = createStore(userReducer);

export type RootState = ReturnType<typeof store.getState>;
