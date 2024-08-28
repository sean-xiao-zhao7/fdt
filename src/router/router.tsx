import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import HomePage from "../components/pages/HomePage";
import SingleArticleDetailsPage from "../components/pages/SingleArticleDetailsPage";

import FaithDoubtPage from "../components/pages/FaithDoubtPage";
import SalvationPage from "../components/pages/SalvationPage";
import RelationshipsPage from "../components/pages/RelationshipsPage";
import OldTestamentPage from "../components/pages/OldTestamentPage";
import EarlyChurchPage from "../components/pages/EarlyChurchPage";
import AddArticlePage from "../components/pages/AddArticlePage";
import LifestylePage from "../components/pages/LifestylePage";
import JesusPage from "../components/pages/JesusPage";
import TrinityPage from "../components/pages/TrinityPage";
import ChristianityPage from "../components/pages/ChristianityPage";
import AboutPage from "../components/pages/AboutPage";
import OtherResourcesPage from "../components/pages/OtherResourcesPage";

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
            { element: <LifestylePage />, path: "/lifestyle" },
            { element: <JesusPage />, path: "/jesus" },
            { element: <TrinityPage />, path: "/trinity" },
            { element: <ChristianityPage />, path: "/christianity" },
            { element: <AboutPage />, path: "/about" },
            { element: <OtherResourcesPage />, path: "/other-resources" },
            { element: <MySavedArticles />, path: "/my-saved-articles" },
            {
                path: "/article/:id",
                element: <SingleArticleDetailsPage />,
            },
        ],
    },
]);
