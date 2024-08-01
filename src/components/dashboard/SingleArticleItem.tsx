import { Paper } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { ArticleType } from "../../store/data/articles";

export default function SingleArticleListItem({
    article,
}: {
    article: ArticleType;
}) {
    return (
        <Paper key={article.title + article.author}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={article.author} src={article.imageURL} />
                </ListItemAvatar>
                <ListItemText
                    primary={article.title}
                    primaryTypographyProps={{
                        fontSize: "1.4rem",
                    }}
                    secondary={
                        <>
                            <Typography color="text.primary">
                                {article.intro}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
        </Paper>
    );
}
