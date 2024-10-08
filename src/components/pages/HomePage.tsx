import { useAppSelector } from "../../store/hooks";

import { Divider, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";

import SingleArticleListItem from "../dashboard/SingleArticleItem";

export default function HomePage() {
    const allArticles = useAppSelector((state) => state.articles.articles);

    return (
        <Paper
            elevation={2}
            square
            sx={{ padding: "2rem", textAlign: "center" }}
        >
            <Typography variant="h1">Welcome!</Typography>
            <Divider sx={{ margin: "1.5rem 0" }} />
            <Typography variant="body1" sx={{ mb: 2 }}>
                This is Fellowship Church GTA's Christian Hermeneutic blog. Any
                question is welcome.
                <br />
                Select topic you like from the top, or browse all articles
                below.
                <br />
                Click on a preview to see the full text.
            </Typography>
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                }}
            >
                <Stack spacing={3}>
                    {allArticles.map((article) => {
                        return (
                            <SingleArticleListItem
                                article={article}
                                key={article.id}
                            />
                        );
                    })}
                </Stack>
            </List>
        </Paper>
    );
}
