import { Divider, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function HomePage() {
    return (
        <Paper
            elevation={2}
            square
            sx={{ padding: "2rem", textAlign: "center" }}
        >
            <Typography variant="h1">Welcome!</Typography>
            <Divider sx={{ margin: "1rem 0" }} />
            <Typography variant="body1">
                This is Jamey's Christian Hermeneutic blog. Any question is
                welcome.
            </Typography>
            <Typography variant="body1">
                Select topic you like from the top.
            </Typography>
        </Paper>
    );
}
