// src/hooks/useFetchCF.js
import { useState, useEffect } from "react";
import { fetchData } from "../api/apiservice";

const getContests = async(handles)=>{
    const contests = (handle)=> `https://codeforces.com/api/user.rating?handle=${handle}`
    var prunedResult = {};
    for(let handle of handles){
        const result = await fetchData(contests(handle));
        prunedResult[handle] = result.result.length
    }
    return prunedResult;
}

const Count = (sub)=>{
    const solves = new Set();
    var size = 0

    sub.forEach((submission)=>{
        if(submission.verdict==="OK" && !solves.has(submission.problem.name)){
        solves.add(submission.problem.name)
        size+=1
        }
    })
    return size
}

const getSolves = async(handles)=>{
    const problems = (handle)=> `https://codeforces.com/api/user.status?handle=${handle}`
    var prunedResult = {};
    for(let handle of handles){
        const result = await fetchData(problems(handle));
        prunedResult[handle] = Count(result.result)
    }
    return prunedResult;
}

const getBasic = async (handles) => {
    var h = "";
    for (let i of handles) {
        h = h + i + ";";
    }
    const endpoint = `https://codeforces.com/api/user.info?handles=${h}&checkHstoricHandles=false`;

    var prunedResult = [];
    const response = await fetchData(endpoint);
    response.result.forEach((user) => {
        prunedResult.push({
            maxrating: user.maxRating,
            rating: user.rating,
            maxrank: user.maxRank,
            rank: user.rank,
            handle: user.handle,
        });
    });
    return prunedResult;
};

const useFetchCF = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                // const solves = await getSolves(endpoint);
                // const contests = await getContests(endpoint);
                // const basic = await getBasic(endpoint)
                // for(let user of basic){
                //     user['solves'] = solves[user.handle];
                //     user['contests'] = contests[user.handle];
                // }

                const basic = [
                    {
                      "maxrating": 1217,
                      "rating": 1217,
                      "maxrank": "pupil",
                      "rank": "pupil",
                      "handle": "CF_Soumyajit",
                      "solves": 214,
                      "contests": 27
                    },
                    {
                      "maxrating": 1017,
                      "rating": 1217,
                      "maxrank": "pupil",
                      "rank": "pupil",
                      "handle": "CF_Soumyajit",
                      "solves": 214,
                      "contests": 27
                    },
                    {
                      "maxrating": 1631,
                      "rating": 1631,
                      "maxrank": "expert",
                      "rank": "expert",
                      "handle": "SD125",
                      "solves": 74,
                      "contests": 9
                    }
                  ]

                setData(basic.sort((a,b)=>a.maxrating - b.maxrating));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return { data, loading, error };
};

export default useFetchCF;
