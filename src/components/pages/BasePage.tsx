import { useAppSelector, useAppDispatch } from "../../store/hooks";
// import { useState } from "react";

import { LinearProgress } from "@mui/material";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";

// custom components
import SingleArticleListItem from "../dashboard/SingleArticleItem";

// import AddSingleArticle from "../dashboard/AddSingleArticle";
// import { addSingleArticle } from "../../store/slices/articlesSlice";

export default function BasePage({ title }) {
    const allArticles = useAppSelector((state) => state.articles.articles);

    // const dispatch = useAppDispatch();
    // const [addNewArticle, setAddNewArticle] = useState(false);

    // const openNewArticleModal = () => {
    //     setAddNewArticle(true);
    // };

    // const closeNewArticleModal = () => {
    //     setAddNewArticle(false);
    // };

    // const submitNewArticle = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     const formJson = Object.fromEntries((formData as any).entries());
    //     const title = formJson.title;
    //     const intro = formJson.intro;
    //     const body = formJson.body;
    //     const author = "Travis Howard";
    //     const dateAdded = Date.now().toLocaleString();
    //     dispatch(
    //         addSingleArticle({
    //             title,
    //             intro,
    //             body,
    //             author,
    //             imageURL: "",
    //             dateAdded,
    //         })
    //     );
    //     closeNewArticleModal();
    // };

    if (!allArticles) {
        return <LinearProgress />;
    } else if (allArticles.length <= 0) {
        return (
            <>
                <Typography variant="h1">Dashboard</Typography>
                <Typography>No articles.</Typography>
            </>
        );
    }

    return (
        <>
            {/* <AddSingleArticle
                open={addNewArticle}
                handleClose={closeNewArticleModal}
                handleSubmit={submitNewArticle}
            /> */}
            <Typography variant="h1" sx={{ marginLeft: "0.5rem" }}>
                {title}
            </Typography>
            {/* <Fab
                variant="extended"
                color="primary"
                aria-label="add"
                onClick={openNewArticleModal}
                sx={{ margin: "1rem 0" }}
            >
                <AddIcon sx={{ mr: 1 }} />
                New Article
            </Fab> */}
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                }}
            >
                <Stack spacing={2}>
                    {allArticles.map((article) => {
                        return <SingleArticleListItem article={article} />;
                    })}
                </Stack>
            </List>
        </>
    );
}
