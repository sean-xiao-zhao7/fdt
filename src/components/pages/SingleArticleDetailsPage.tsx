import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import {
    Divider,
    Paper,
    Typography,
    Box,
    Chip,
    IconButton,
} from "@mui/material";
import { FavoriteSharp, ShareRounded } from "@mui/icons-material";

export default function SingleArticleDetailsPage() {
    const { id } = useParams();
    const currentArticle = useAppSelector((state) =>
        state.articles.articles.find((article) => id === article.id)
    );

    const navigatePage = () => {};

    return (
        <Paper sx={{ padding: "2rem 4rem" }} elevation={2}>
            <Typography
                variant="h2"
                sx={{ color: "#1c57b4", textAlign: "center" }}
            >
                {currentArticle.title}
            </Typography>
            <Box textAlign={"center"} sx={{ marginTop: 1 }}>
                <Chip
                    label={currentArticle.type.toUpperCase()}
                    variant="outlined"
                    onClick={navigatePage}
                    onDelete={navigatePage}
                    sx={{ mr: 1 }}
                />
                <IconButton aria-label="favorite" color="primary">
                    <FavoriteSharp />
                </IconButton>
                <IconButton aria-label="share" color="primary">
                    <ShareRounded />
                </IconButton>
            </Box>
            <Divider component="div" sx={{ margin: "1rem 0" }} />
            <Typography variant="body1">{currentArticle.intro}</Typography>
            {currentArticle.body.map((paragraph, index) => {
                return (
                    <div key={index}>
                        <br />
                        <Typography variant="body1">{paragraph}</Typography>
                    </div>
                );
            })}
        </Paper>
    );
}
