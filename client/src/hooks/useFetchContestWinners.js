import { useState, useEffect } from "react";
import { fetchData } from "../api/apiservice";
import userData from "../../public/assets/data/data.json";
import useFetchCFcontest from "./useFetchCFcontest";
const INTERVAL = 5000;

async function getLatestContestId() {
    const endpoint = "https://codeforces.com/api/contest.list";
    const response = await fetchData(endpoint);
    const contestinfo = response.result;
    for (let contest of contestinfo) {
        if (contest.phase === "FINISHED") {
            return contest.id;
        }
    }
    throw new Error("No finished contest found");
}

const useFetchContestWinners = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [contestID, setContestID] = useState(null);
    const [cfdata, setCFdata] = useState(null);
    const [cache, setCache] = useState(null);
    // Fetch the latest contest ID
    useEffect(() => {
        const fetchContestID = async () => {
            try {
                const ID = await getLatestContestId();
                setContestID(ID);
                const currLoad = new Date().getTime();
                const lastLoad = parseInt(localStorage.getItem("CWLoad"));
                const cacheData = localStorage.getItem("CWData");
                
                if (cacheData !== null && lastLoad !== null) { 
                    setCache(JSON.parse(cacheData));
                    console.log("cache is there");
                    console.log(cache);
                    
                }

                if (cache!==null && (lastLoad + INTERVAL > currLoad || cache["ID"] === contestID)) {
                    console.log("Repeated data");
                    setData(cache);
                    setLoading(false);
                } else {
                    console.log(cache);
                }
                
            } catch (err) {
                console.log(err);
                setError(err);
                setLoading(false);
            }
        };
        fetchContestID();
    }, [contestID]);

    // Map Codeforces handles to user names
    const cfNameMap = {};
    userData.forEach((user) => {
        const cfHandle = user["Codeforce  Handle "];
        if (cfHandle && !cfHandle.includes(" ")) {
            cfNameMap[cfHandle.toLowerCase()] = user.Name;
        }
    });

    // Get all valid Codeforces handles
    const allHandles = userData
        .filter((user) => user["Codeforce  Handle "] && !user["Codeforce  Handle "].includes(" "))
        .map((user) => user["Codeforce  Handle "]);

    // Fetch contest data using the latest contest ID
    
    const { data: fetchedCFData, cfloading, cferror, callAPI } = useFetchCFcontest();
    useEffect(() => {
        if (contestID && (!cache)) {
            console.log("Calling API");
            callAPI(allHandles, contestID);
        }
    }, [contestID]);
    
    useEffect(() => {
        if (fetchedCFData) {
            setCFdata(fetchedCFData);
        }
        if (cferror) {
            setError(cferror);
        } 
    }, [fetchedCFData])
    
    const getWinners = async () => {
        try {
            if (error) {
                console.log(error);
                
                throw new Error("Some error occured fetching details of the latest contest");
            }

            if (cfdata) {
                const origData = { ID: contestID, name: cfdata.contest.name };
                const rankings = cfdata.contest.rows;
                // console.log(cfdata.contest);

                for (let i = 0; i < Math.min(3, rankings.length); i++) {
                    origData[`rank${i + 1}`] = rankings[i];
                    origData[`rank${i + 1}`].name = cfNameMap[rankings[i].handle.toLowerCase()] || rankings[i].handle;
                }

                setData(origData);
                const currLoad = new Date().getTime();
                localStorage.setItem("CWData", JSON.stringify(origData));
                localStorage.setItem("CWLoad", JSON.stringify(currLoad));
            }
        } catch (err) {
            console.log("Error", err);
            if (!cache) {
                console.log("No backup available as cache");
                
                setError(err);
            } else {
                console.log("Backup available as cache");
                setData(cache);
                setLoading(false);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (cfdata) {
            getWinners();
        }
    }, [cfdata]);
    return { data, loading, error };
};

export default useFetchContestWinners;
