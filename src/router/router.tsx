import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import HomePage from "../components/pages/HomePage";

import FaithDoubtPage from "../components/pages/FaithDoubtPage";
import SalvationPage from "../components/pages/SalvationPage";
import RelationshipsPage from "../components/pages/RelationshipsPage";
import OldTestamentPage from "../components/pages/OldTestamentPage";
import EarlyChurchPage from "../components/pages/EarlyChurchPage";
import AddArticlePage from "../components/pages/AddArticlePage";
import SingleArticleDetailsPage from "../components/pages/SingleArticleDetailsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <MainLayout />,
        children: [
            { element: <HomePage />, index: true },
            { element: <FaithDoubtPage />, path: "/faith-doubt" },
            { element: <SalvationPage />, path: "/salvation" },
            { element: <RelationshipsPage />, path: "/relationships" },
            { element: <OldTestamentPage />, path: "/old-testament" },
            { element: <EarlyChurchPage />, path: "/early-church" },
            { element: <AddArticlePage />, path: "/add-article" },
            {
                path: "/article",
                element: <SingleArticleDetailsPage />,
            },
        ],
    },
]);
