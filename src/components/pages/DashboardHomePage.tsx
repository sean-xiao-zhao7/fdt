import { useAppSelector } from "../../store/hooks";
import { useState } from "react";

import { LinearProgress, Paper } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AddSingleArticle from "../dashboard/AddSingleArticle";

export default function DashboardHomePage() {
    const allArticles = useAppSelector((state) => state.articles.articles);
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
        const author = "Travis Howard";
        const dateAdded = Date.now().toLocaleString();
        closeNewArticleModal();
    };

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
            <AddSingleArticle
                open={addNewArticle}
                handleClose={closeNewArticleModal}
                handleSubmit={submitNewArticle}
            />
            <Typography variant="h1" sx={{ marginLeft: "0.5rem" }}>
                Dashboard
            </Typography>
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
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                }}
            >
                <Stack spacing={2}>
                    {allArticles.map((article) => {
                        return (
                            <Paper key={article.title + article.author}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={article.author}
                                            src={article.imageURL}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={article.title}
                                        secondary={
                                            <>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {article.intro}
                                                </Typography>
                                                {article.body}
                                            </>
                                        }
                                    />
                                </ListItem>
                            </Paper>
                        );
                    })}
                </Stack>
            </List>
        </>
    );
}
