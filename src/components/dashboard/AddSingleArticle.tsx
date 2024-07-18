import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";

export default function AddSingleArticle({ open, handleClose }) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={"md"}
            fullWidth={true}
            scroll={"paper"}
            PaperProps={{
                component: "form",
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(
                        (formData as any).entries()
                    );
                    const email = formJson.email;
                    handleClose();
                },
            }}
        >
            <DialogTitle>New Article</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill out the title, intro and body of the new
                    article.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="title"
                    name="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    required
                    margin="dense"
                    id="intro"
                    name="intro"
                    label="Intro"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogContent>
                <TextField
                    label="Body"
                    multiline
                    rows={4}
                    name="body"
                    id="body"
                    fullWidth
                    required
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
        </Dialog>
    );
}
