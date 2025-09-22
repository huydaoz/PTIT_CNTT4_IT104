import "./index.css";
import store from "./store/store.ts";

import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
