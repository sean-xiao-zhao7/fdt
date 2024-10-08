import { useAppSelector } from "../../store/hooks";

import { LinearProgress } from "@mui/material";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import SingleArticleListItem from "../dashboard/SingleArticleItem";

export default function BasePage({ title, articleType }) {
    let allArticles = useAppSelector((state) => state.articles.articles);
    allArticles = allArticles.filter((article) => article.type === articleType);

    if (!allArticles) {
        return <LinearProgress />;
    } else if (allArticles.length <= 0) {
        return (
            <>
                <Typography variant="h2">{title}</Typography>
                <Typography>No articles.</Typography>
            </>
        );
    }

    return (
        <>
            <Typography variant="h2" sx={{ margin: "0.5rem" }}>
                {title}
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
        </>
    );
}
