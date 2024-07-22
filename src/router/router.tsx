import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import HomePage from "../components/pages/HomePage";

import TheologyPage from "../components/pages/TheologyPage";
import SalvationPage from "../components/pages/SalvationPage";
import RelationshipsPage from "../components/pages/RelationshipsPage";
import OldTestamentPage from "../components/pages/OldTestamentPage";
import EarlyChurchPage from "../components/pages/EarlyChurchPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <MainLayout />,
        children: [
            { element: <HomePage />, index: true },
            { element: <TheologyPage />, path: "/theology" },
            { element: <SalvationPage />, path: "/salvation" },
            { element: <RelationshipsPage />, path: "/relationships" },
            { element: <OldTestamentPage />, path: "/old-testament" },
            { element: <EarlyChurchPage />, path: "/early-church" },
        ],
    },
]);
