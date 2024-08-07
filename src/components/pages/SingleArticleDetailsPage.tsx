import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { Paper, Typography } from "@mui/material";

export default function SingleArticleDetailsPage() {
    const { id } = useParams();
    const currentArticle = useAppSelector((state) =>
        state.articles.articles.find((article) => id === article.id)
    );

    return (
        <Paper sx={{ padding: "2rem" }} elevation={2}>
            <Typography variant="h2">{currentArticle.title}</Typography>
            <Typography variant="body1">{currentArticle.body}</Typography>
        </Paper>
    );
}
