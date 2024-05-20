// src/hooks/useFetchCF.js
import { useState, useEffect } from "react";
import { fetchData } from "../api/apiservice";
<<<<<<< HEAD
=======
import useFetchCF from "./useFetchCF";
>>>>>>> 7abd3cedb63ec249c7fbc977ae42a9a218b68a0c

const getContest = async (handles, id) => {
    var handleSep = "";
    for (let i of handles) {
        handleSep = handleSep + i + ";";
    }
    const endpoint = `https://codeforces.com/api/contest.standings?contestId=${id}&asManager=false&handles=${handleSep}`;

    const response = await fetchData(endpoint);

    const questions = [];
    for (let problem of response.result.problems) {
        questions.push({
            id: problem.index,
            name: problem.name,
            points: problem.points || 1,
        });
    }

    const participants = [];

    for (let person of response.result.rows) {
        var personHandle = person.party.members[0].handle;
        participants.push({
            handle: personHandle,
            rank: person.rank,
            points: person.points,
            penalty: person.penalty,
            successfulHackCount: person.successfulHackCount,
            unsuccessfulHackCount: person.unsuccessfulHackCount,
            problemResults: person.problemResults,
        });
    }

    const prunedResult = {
        contest: {
            id: response.result.contest.id,
            name: response.result.contest.name,
            problems: questions,
            rows: participants,
        },
    };
<<<<<<< HEAD
    return prunedResult;
};

const INTERVAL = 1 * 1000;

=======

    // console.log(JSON.stringify(prunedResult, null, 2));
    return prunedResult;
};

>>>>>>> 7abd3cedb63ec249c7fbc977ae42a9a218b68a0c
const useFetchCFcontest = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

<<<<<<< HEAD
    const lastLoadCF = parseInt(localStorage.getItem("Contestload"));
    const cacheAvailable = lastLoadCF !== null;
    // console.log("Last loading attempt at: " + lastLoadCF);

    const currLoad = new Date().getTime();

    const callAPI = async (handles, id) => {
        setLoading(true);
        if (lastLoadCF + INTERVAL > currLoad && cacheAvailable) {
            const cache = localStorage.getItem("Contestdata");
            setData(JSON.parse(cache));
            console.log("Too many requests. Data cached");
            setLoading(false);
        } else {
            try {
                const basic = await getContest(handles, id);
                setData(basic);

                console.log(JSON.stringify(basic, null, 2));

                localStorage.setItem("Contestdata", JSON.stringify(basic));
                localStorage.setItem("Contestload", JSON.stringify(currLoad));
            } catch (err) {
                console.log("Error has been encountered");
                console.log("CACHING");
                console.log(err);
                if (!cacheAvailable) {
                    setError(err);
                } else {
                    const cache = localStorage.getItem("Contestdata");
                    setData(JSON.parse(cache));
                    console.log("Caching data saved at: ");
                }
            } finally {
                setLoading(false);
            }
=======
    const callAPI = async (handles, id) => {
        setLoading(true);

        try {
            const basic = await getContest(handles, id);
            setData(basic);
            setError(null);
            // console.log(JSON.stringify(basic, null, 2));
        } catch (err) {
            console.log("Error has been encountered");
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);
>>>>>>> 7abd3cedb63ec249c7fbc977ae42a9a218b68a0c
        }
    };

    return { data, loading, error, callAPI };
};

export default useFetchCFcontest;
