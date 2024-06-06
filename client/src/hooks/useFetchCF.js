// src/hooks/useFetchCF.js
import { useState, useEffect } from "react";
import { fetchData } from "../api/apiservice";

const getContests = async (handles) => {
    const contests = (handle) => `https://codeforces.com/api/user.rating?handle=${handle}`;
    var prunedResult = {};
    for (let handle of handles) {
        const result = await fetchData(contests(handle));
        prunedResult[handle] = result.result.length;
    }
    return prunedResult;
};

const sortingFunc = (a, b) => {
    if (a.rating !==b.rating) {
        return b.rating - a.rating
    } else if (a.maxrating !== b.maxrating) {
        return b.maxrating - a.maxrating
    } else {
        return a.handle - b.handle
    }
}

const Count = (sub) => {
    const solves = new Set();
    var size = 0;

    sub.forEach((submission) => {
        if (submission.verdict === "OK" && !solves.has(submission.problem.name)) {
            solves.add(submission.problem.name);
            size += 1;
        }
    });
    return size;
};

const getSolves = async (handles) => {
    const problems = (handle) => `https://codeforces.com/api/user.status?handle=${handle}`;
    var prunedResult = {};
    for (let handle of handles) {
        const result = await fetchData(problems(handle));
        prunedResult[handle] = Count(result.result);
    }
    return prunedResult;
};

const getBasic = async (handles) => {
    var h = "";
    for (let i of handles) {
        h = h + i + ";";
    }
    const endpoint = `https://codeforces.com/api/user.info?handles=${h}&checkHstoricHandles=false`;

    // console.log(endpoint);

    var prunedResult = [];
    const response = await fetchData(endpoint);
    response.result.forEach((user) => {
        prunedResult.push({
            maxrating: user.maxRating || 0,
            rating: user.rating || 0,
            maxrank: user.maxRank || "unrated",
            rank: user.rank || "unrated",
            handle: user.handle,
        });
    });
    // console.log(prunedResult);
    return prunedResult;
};

const INTERVAL = 1000;

const useFetchCF = (endpoint) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const lastLoadCF = parseInt(localStorage.getItem("CFload"));
    const cacheAvailable = lastLoadCF !== null;
    // console.log("Last loading attempt at: " + lastLoadCF);

    const currLoad = new Date().getTime();
    useEffect(() => {
        if (lastLoadCF + INTERVAL > currLoad && cacheAvailable) {
            const cache = localStorage.getItem("CFdata");
            setData(JSON.parse(cache));
            // console.log("Too many requests. Data cached");
            setLoading(false);

        } else {
            
            const getData = async () => {
                try {
                    // console.log("APIs going to get called");
                    // const solves = await getSolves(endpoint);
                    // const contests = await getContests(endpoint);
                    const basic = await getBasic(endpoint);


                    // for (let user of basic) {
                    //     user["solves"] = solves[user.handle];
                    //     user["contests"] = contests[user.handle];
                    // }

                    // basic.forEach((user)=>{
                    //     user['solves'] = solves[user.handle];
                    //     user["contests"] = contests[user.handle];
                    // });

                    // console.log("CF is returning this data: ");
                    // console.log(basic);
                    // console.log(contests);
                    // console.log(solves);

                    const basicData = basic.sort(sortingFunc)
                    setData(basicData);
                    // console.log(basicData);

                    localStorage.setItem("CFdata", JSON.stringify(basicData));
                    localStorage.setItem("CFload", JSON.stringify(currLoad));
                } catch (err) {
                    if (!cacheAvailable) {
                        setError(err);
                    } else {
                        const cache = localStorage.getItem("CFdata");
                        setData(JSON.parse(cache));
                        // console.log(err);
                        // console.log("Error in fetching. Data cached");
                    }
                } finally {
                    setLoading(false);
                }
            };
            getData();
        }
    }, []);

    return { data, loading, error };
};

export default useFetchCF;
