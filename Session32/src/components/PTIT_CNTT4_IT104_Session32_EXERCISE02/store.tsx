import { createStore } from "redux";

export interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialState: User[] = [
  {
    id: 1,
    userName: "Đào Quang Huy",
    gender: "Nam",
    dateBirth: "25/06/2006",
    address: "Thanh Xuân, Hà Nội",
  },
  {
    id: 2,
    userName: "Đào Huyền Trang",
    gender: "Nữ",
    dateBirth: "11/07/2006",
    address: "Cầu Giấy, Hà Nội",
  },
];

function userReducer(state = initialState, action: any): User[] {
  switch (action.type) {
    default:
      return state;
  }
}

export const store = createStore(userReducer);

export type RootState = ReturnType<typeof store.getState>;
