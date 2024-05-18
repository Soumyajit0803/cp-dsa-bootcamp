import { React, useEffect } from "react";
import useFetchCF from "../../hooks/useFetchCF";
import useFetchLC from "../../hooks/useFetchLC";
import { Box } from "@mui/material";
import "./Resources.css";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

const CF_HANDLES = () => {
    const usernames = ["SD125","tourist"];
    return usernames
};

const LC_HANDLES = () => {
    const usernames = ["SamyajitDas", "__Abhijit__"];
    return usernames
};

// const Resources = () => {
//     const { data, loading, error } = useFetchLC(LC_HANDLES());

//     if (loading) {
//         console.log("Fetching data");
//         return <Loading />;
//     }
//     if (error) {
//         console.log(error);
//         return <Error message={error.response.request.responseText} error_code={error.response.request.status} />;
//     }

//     return (
//         <Box sx={{ marginTop: 15 }}>
//             <h1>Data from API:</h1>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//         </Box>
//         // <Error message="This is detailed message" error_code={"NET _ERR"} status={404} />
//     );
// };

const Resources = () => {
  return (
    <div>Resources</div>
  )
}

export default Resources;
