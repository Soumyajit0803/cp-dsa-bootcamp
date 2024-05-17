import { React, useEffect } from "react";
import useFetchCF from "../../hooks/useFetchCF";
import { Box } from "@mui/material";
import "./Resources.css";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

const BASIC_INFO = () => {
    const usernames = ["CF_Soumyajit","SD125"];
    return usernames
};

const Resources = () => {
    const { data, loading, error } = useFetchCF(BASIC_INFO());

    if (loading) {
        console.log("Fetching data");
        return <Loading />;
    }
    if (error) {
        console.log("Getting data wrong", error);
        return <Error message={error.response.data.comment} error_code={error.response.status} />;
    }

    return (
        <Box sx={{ marginTop: 15 }}>
            <h1>Data from API:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Box>
        // <Error message="This is detailed message" error_code={"NET _ERR"} status={404} />
    );
};

export default Resources;
