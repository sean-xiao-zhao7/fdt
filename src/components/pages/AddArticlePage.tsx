import { useState } from "react";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Paper } from "@mui/material";

import AddSingleArticle from "../dashboard/AddSingleArticle";

import { useAppDispatch } from "../../store/hooks";
import { addSingleArticle } from "../../store/slices/articlesSlice";

export default function AddArticlePage() {
    const dispatch = useAppDispatch();
    const [addNewArticle, setAddNewArticle] = useState(false);

    const openNewArticleModal = () => {
        setAddNewArticle(true);
    };

    const closeNewArticleModal = () => {
        setAddNewArticle(false);
    };

    const submitNewArticle = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        const title = formJson.title;
        const intro = formJson.intro;
        const body = formJson.body;
        const author = "Jamey Baird";
        const type = formJson.type;
        const dateAdded = Date.now().toLocaleString();

        dispatch(
            addSingleArticle({
                id: Date.now().toLocaleString(),
                title,
                intro,
                body,
                author,
                imageURL: "",
                dateAdded,
                type,
            })
        );
        closeNewArticleModal();
    };
    return (
        <Paper elevation={2} square sx={{ padding: "2rem" }}>
            <AddSingleArticle
                open={addNewArticle}
                handleClose={closeNewArticleModal}
                handleSubmit={submitNewArticle}
            />
            <Fab
                variant="extended"
                color="primary"
                aria-label="add"
                onClick={openNewArticleModal}
                sx={{ margin: "1rem 0" }}
            >
                <AddIcon sx={{ mr: 1 }} />
                New Article
            </Fab>
        </Paper>
    );
}
