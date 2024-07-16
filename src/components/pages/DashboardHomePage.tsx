import { useAppSelector } from "../../store/hooks";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { LinearProgress } from "@mui/material";

export default function DashboardHomePage() {
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
        <>
            <Typography variant="h1">Dashboard</Typography>
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                }}
            >
                {allArticles.map((article) => {
                    return (
                        <>
                            <Divider variant="inset" component="li" />
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
                        </>
                    );
                })}
            </List>
        </>
    );
}
