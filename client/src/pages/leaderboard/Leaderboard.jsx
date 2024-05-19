import * as React from "react";
import "./leaderboard.css";
import { Button, Tooltip, ButtonGroup, Box } from "@mui/material";
import CustomDataGrid from "../../components/customdatagrid/customdatagrid";
import cf from "../../assets/cf.webp";
import leetcode from "../../assets/leetcode.png";

import userData from "../../../public/assets/data/data.json";
import { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

// import useFetchLC from "../../hooks/useFetchLC";
import useFetchCF from "../../hooks/useFetchCF";

function CFTag(rating) {
    if (rating < 1200) {
        return "newbie";
    } else if (1200 <= rating && rating < 1400) {
        return "pupil";
    } else if (1400 <= rating && rating < 1600) {
        return "specialist";
    } else if (1600 <= rating && rating < 1900) {
        return "expert";
    } else if (1900 <= rating && rating < 2100) {
        return "candidate-master"
    } else if (2100 <= rating && rating < 2400) {
        return "master"
    } else {
        return "grandmaster"
    }
}

function ratingTag(params) {
    const rating = params.value;
    var classname = CFTag(rating);
    return <div className={"lb " + classname}>{rating}</div>;
}

function GetQuestionStats({ handle }) {
    const [easy, med, hard] = [100, 200, 300];
    return (
        <div className="q-stats">
            <div className="row">
                <div className="level easy">Easy</div>
                <div className="solved">{easy}</div>
            </div>
            <div className="row">
                <div className="level med">Medium</div>
                <div className="solved">{med}</div>
            </div>
            <div className="row">
                <div className="level hard">Hard</div>
                <div className="solved">{hard}</div>
            </div>
        </div>
    );
}

function Msg({ msg }) {
    return (
        <div className="tooltip-msg" style={{ fontSize: "1rem" }}>
            {msg}
        </div>
    );
}

const cfcolumns = [
    {
        field: "id",
        headerName: "#",
        width: 50,
        headerClassName: "lb-header",
        resizable: false,
        sortable: false,
        renderCell: (params) => (
            <Tooltip title={params.value} arrow placement="right">
                {params.value}
            </Tooltip>
        ),
    },
    {
        field: "handle",
        headerName: "User Handle",
        width: 200,
        headerClassName: "lb-header",
        sortable: false,
        resizable: false,
        renderCell: (params) => (
            <Tooltip title={<Msg msg={`${params.row.rank} ${params.row.name}`} />} arrow placement="right">
                <a className="usr_name" href={`https://codeforces.com/profile/${params.value}`}>
                    {params.value}
                </a>
            </Tooltip>
        ),
    },
    {
        field: "year",
        headerName: "Year",
        width: 70,
        sortable: false,
        headerClassName: "lb-header",
        resizable: false,
        headerAlign: "center",
        renderCell: (params) =>
            `${params.value}${
                params.value === 1 ? "st" : params.value === 2 ? "nd" : params.value === 3 ? "rd" : "th"
            }`,
    },
    // {
    //     field: "contests",
    //     headerName: "Contests given",
    //     width: 150,
    //     headerClassName: "lb-header",
    //     resizable: false,
    //     headerAlign: "center",
    //     renderCell: (params) => (
    //         <Tooltip title={params.value} arrow placement="right">
    //             {params.value}
    //         </Tooltip>
    //     ),
    // },
    // {
    //     field: "solves",
    //     headerName: "Qs solved",
    //     width: 120,
    //     headerClassName: "lb-header",
    //     resizable: false,
    //     headerAlign: "center",
    //     renderCell: (params) => (
    //         <Tooltip title={params.value} arrow placement="right">
    //             {params.value}
    //         </Tooltip>
    //     ),
    // },
    {
        field: "rating",
        headerName: "Rating",
        width: 120,
        renderCell: ratingTag,
        headerClassName: "lb-header",
        resizable: false,
        headerAlign: "center",
    },
    {
        field: "maxrating",
        headerName: "Best Rating",
        width: 150,
        renderCell: ratingTag,
        headerClassName: "lb-header",
        resizable: false,
        headerAlign: "center",
    },
];
const lccolumns = [
    {
        field: "id",
        headerName: "#",
        width: 50,
        headerClassName: "lb-header",
        resizable: false,
        sortable: false,
        renderCell: (params) => (
            <Tooltip title={params.value} arrow placement="right">
                {params.value}
            </Tooltip>
        ),
    },
    {
        field: "username",
        headerName: "User Handle",
        width: 200,
        headerClassName: "lb-header",
        sortable: false,
        resizable: false,
        renderCell: (params) => (
            <Tooltip title={`${params.value}`} arrow placement="right">
                <a className="usr_name" href={`https://leetcode.com/u/${params.value}`}>
                    {params.value}
                </a>
            </Tooltip>
        ),
    },
    {
        field: "year",
        headerName: "Year",
        width: 70,
        sortable: false,
        headerClassName: "lb-header",
        resizable: false,
        headerAlign: "center",
        renderCell: (params) =>
            `${params.value}${
                params.value === 1 ? "st" : params.value === 2 ? "nd" : params.value === 3 ? "rd" : "th"
            }`,
    },
    {
        field: "contests",
        headerName: "Contests given",
        width: 150,
        headerClassName: "lb-header",
        resizable: false,
        headerAlign: "center",
        renderCell: (params) => (
            <Tooltip title={params.value} arrow placement="right">
                {params.value}
            </Tooltip>
        ),
    },
    {
        field: "questions",
        headerName: "Total Qs",
        width: 120,
        headerClassName: "lb-header",
        resizable: false,
        headerAlign: "center",
        renderCell: (params) => (
            <Tooltip title={<GetQuestionStats handle="__Abhijit__" />} arrow placement="right">
                {params.value}
            </Tooltip>
        ),
    },
    {
        field: "cf_rating",
        headerName: "Rating",
        width: 90,
        headerClassName: "lb-header",
        resizable: false,
        headerAlign: "center",
        renderCell: (params) => (
            <Tooltip title={params.value} arrow placement="right">
                {params.value}
            </Tooltip>
        ),
    },
    {
        field: "cf_best_rating",
        headerName: "Best Rating",
        width: 120,
        headerClassName: "lb-header",
        resizable: false,
        headerAlign: "center",
        renderCell: (params) => (
            <Tooltip title={params.value} arrow placement="right">
                {params.value}
            </Tooltip>
        ),
    },
];

const Leaderboard = () => {
    const [show, setShow] = useState(1);
    const cfUsers = {};

    const width = window.innerWidth;


    for (let user of userData) {
        if (!user["Codeforce  Handle "] || !user["Leetcode Handle "]) {
            continue;
        }
        if (user["Codeforce  Handle "].includes(" ") || user["Leetcode Handle "].includes(" ")) {
            continue;
        }
        cfUsers[user["Codeforce  Handle "].toLowerCase()] = [user.Name, user["Year (1/2/3/4)"]];
    }

    // const { lcData, lcLoading, lcError } = useFetchLC(Object.keys(lcUsers));

    const v = Object.keys(cfUsers);
    const { data, loading, error } = useFetchCF(v);

    if (loading) {
        console.log("Fetching Data");
        return <Loading />;
    }

    if (error) {
        console.log("error occured.");
        return <Error message={error.response.request.responseText} error_code={error.response.request.status} />;
    }
    else {

        for(let user of data){
            [user.name, user.year] = cfUsers[user.handle.toLowerCase()];
        }
    }

    return (
        <div className="lb-page">
            <div className="heading">
                Know where you <span className="gradient-text">Stand</span>
            </div>
            <div className="content">
                Discover the top coders, track your progress, and compete for the top spot on our dynamic competitive
                programming leaderboard!
            </div>
            <ButtonGroup size="large" aria-label="coding website" className="button-group" orientation={width < 340 ? "vertical":"horizontal"}>
                <Button
                    className={"table-swap " + (show ? "active" : "")}
                    size="large"
                    onClick={() => setShow(1)}
                    startIcon={<img src={cf} className="cf-img" />}
                >
                    Codeforces
                </Button>
                {/* <Button
                    className={"table-swap " + (!show ? "active" : "")}
                    size="large"
                    onClick={() => setShow(0)}
                    endIcon={<img src={leetcode} className="cf-img" />}
                >
                    LeetCode
                </Button> */}
            </ButtonGroup>
            <Box className="datagrid-wrapper">
                {<CustomDataGrid rows={data} columns={cfcolumns} toshow={show} />}
                {/* <CustomDataGrid rows={cfrows} columns={lccolumns} toshow={!show} /> */}
            </Box>
        </div>
    );
};

export default Leaderboard;
