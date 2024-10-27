import React from "react";
import {
    Box,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const Loading = ({cols}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box height={200}>
                <DataGrid
                    sx={{ width: "100%" }}
                    rows={[]}
                    columns={cols}
                    loading
                    slotProps={{
                        loadingOverlay: {
                            variant: "skeleton",
                            noRowsVariant: "skeleton",
                        },
                    }}
                    initialState={{
                        pinnedColumns: {
                            left: ["desk"],
                        },
                    }}
                />
            </Box>
        </ThemeProvider>
    );
};

export default Loading;
