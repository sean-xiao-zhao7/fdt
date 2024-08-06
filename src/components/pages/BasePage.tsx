import { useAppSelector } from "../../store/hooks";

import { LinearProgress, Paper } from "@mui/material";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// custom components
import SingleArticleListItem from "../dashboard/SingleArticleItem";

export default function BasePage({ title, articleType }) {
    const allArticles = useAppSelector((state) => state.articles.articles);

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
        <Paper elevation={2} square sx={{ padding: "2rem" }}>
            <Typography variant="h1" sx={{ marginLeft: "0.5rem" }}>
                {title}
            </Typography>
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
        </Paper>
    );
}
