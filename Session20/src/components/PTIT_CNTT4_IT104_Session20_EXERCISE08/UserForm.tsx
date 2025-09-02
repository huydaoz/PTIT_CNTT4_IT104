import React, { useReducer } from "react";

interface FormState {
  name: string;
  email: string;
}

type FormAction =
  | { type: "CHANGE_NAME"; payload: string }
  | { type: "CHANGE_EMAIL"; payload: string };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const UserForm: React.FC = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_NAME", payload: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_EMAIL", payload: e.target.value });
  };

  return (
    <div>
      <h2>User In4 Form</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={handleEmailChange}
          />
        </div>
      </form>
      <h3>Thông tin người dùng:</h3>
      <p>Name: {formState.name}</p>
      <p>Email: {formState.email}</p>
    </div>
  );
};

export default UserForm;
