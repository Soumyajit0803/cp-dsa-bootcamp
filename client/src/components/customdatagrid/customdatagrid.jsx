import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import './customdatagrid.css'

function CustomDataGrid({rows, columns, toshow}) {
    
    rows.forEach((row, index)=>{
        row.id = index+1;
    })

    console.log(rows);

    const hide = {zIndex: "-1", opacity: 0, position:"absolute"}
    const display = {zIndex: "100", opacity: 1}
    return (
        <Box className="leaderboard" sx = {toshow ? display : hide} >
            <DataGrid
                sx={{
                    "& .MuiDataGrid-cell:": {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    "& .numbers": {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    "& .MuiDataGrid-row:hover": {
                      backgroundColor: "#23292d" // Or 'transparent' or whatever color you'd like
                    }
                }}
                columns={columns}
                rows={rows}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 100,
                        },
                    },
                }}
                disableRowSelectionOnClick
                autoHeight
                pageSizeOptions={[100]}
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
                disableEval
                getRowClassName={() => {
                    return "row";
                }}
                getCellClassName={(params) => {
                    return params.field;
                }}
            />
        </Box>
    );
}

export default CustomDataGrid;