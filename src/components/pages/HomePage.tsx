import { Divider, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function HomePage() {
    return (
        <Paper
            elevation={2}
            square
            sx={{ padding: "2rem", textAlign: "center" }}
        >
            <Typography variant="h1">Welcome to Jamey's blog.</Typography>
            <Divider sx={{ margin: "1rem 0" }} />
            <Typography variant="body1">
                Welcome to Jamey's Christian applications blog.
            </Typography>
            <Typography variant="body1">
                Select topic you like from the top.
            </Typography>
        </Paper>
    );
}
