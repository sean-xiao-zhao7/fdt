import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function AddSingleArticle({ open, handleClose, handleSubmit }) {
    const [type, setType] = useState("faith-doubt");

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={"md"}
            fullWidth={true}
            scroll={"paper"}
            PaperProps={{
                component: "form",
                onSubmit: handleSubmit,
            }}
        >
            <DialogTitle>New Article</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill out the title, intro and body of the new
                    article.
                </DialogContentText>
                <FormControl fullWidth>
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
                </FormControl>
                <FormControl fullWidth>
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
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        label="Body"
                        multiline
                        rows={4}
                        name="body"
                        id="body"
                        fullWidth
                        required
                        sx={{ marginTop: "2rem" }}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ marginTop: "2rem" }}>
                    <InputLabel id="type-select-label">Article Type</InputLabel>
                    <Select
                        labelId="type-select-label"
                        id="type-select"
                        value={type}
                        label="Article Type"
                        onChange={handleTypeChange}
                    >
                        <MenuItem value="faith-doubt">Faith & Doubt</MenuItem>
                        <MenuItem value="salvation">Salvation</MenuItem>
                        <MenuItem value="relationships">Relationships</MenuItem>
                        <MenuItem value="old-testament">Old Testament</MenuItem>
                        <MenuItem value="early-church">Early Church</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained">
                    Cancel
                </Button>
                <Button type="submit" variant="contained">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}
