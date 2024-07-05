import { createBrowserRouter } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
import MainLayout from "../components/layout/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [{ element: <HomePage />, index: true }],
    },
]);
