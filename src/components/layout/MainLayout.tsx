import { Outlet } from "react-router-dom";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function MainLayout() {
    return (
        <Box sx={{ width: "100%", maxWidth: 500 }}>
            <ButtonGroup
                variant="contained"
                size="large"
                aria-label="Large button group"
            >
                <Button>Dashboard</Button>
                <Button>Data Table</Button>
            </ButtonGroup>
            <Outlet />
        </Box>
    );
}
