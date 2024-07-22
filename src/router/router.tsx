import { createBrowserRouter } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
import MainLayout from "../components/layout/MainLayout";
import DashboardHomePage from "../components/pages/DashboardHomePage";
import DatatableHomePage from "../components/pages/DatatableHomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <MainLayout />,
        children: [
            { element: <HomePage />, index: true },
            { element: <DashboardHomePage />, path: "/theology" },
            { element: <DatatableHomePage />, path: "/salvation" },
            { element: <DatatableHomePage />, path: "/relationships" },
            { element: <DatatableHomePage />, path: "/old-testament" },
            { element: <DatatableHomePage />, path: "/early-church" },
        ],
    },
]);
