import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { store } from "./components/PTIT_CNTT4_IT104_Session32_EXERCISE01/store";
// import { store } from "./components/PTIT_CNTT4_IT104_Session32_EXERCISE02/store";
// import { store } from "./components/PTIT_CNTT4_IT104_Session32_EXERCISE03/store";
// import { store } from "./components/PTIT_CNTT4_IT104_Session32_EXERCISE04/store";
// import { store } from "./components/PTIT_CNTT4_IT104_Session32_EXERCISE05/store";
// import { store } from "./components/PTIT_CNTT4_IT104_Session32_EXERCISE06/store";
import { store } from "./components/PTIT_CNTT4_IT104_Session32_EXERCISE07/store";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
