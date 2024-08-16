import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/bebas-neue";

import "./styles/index.scss";
import { router } from "./router/router";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
