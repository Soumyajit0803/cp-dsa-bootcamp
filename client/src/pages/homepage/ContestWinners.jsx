import React from "react";
import "./ContestWinners.css";
import { Button } from "@mui/material";
import { Sendicon } from "../../../public/assets/svgvectors";
import { Link } from "react-router-dom";

function WinCard({ name, handle, rank, position, grank, crank, score }) {
    const col =
        position == "position1" ? "rgb(255, 221, 2)" : position == "position2" ? "hsl(0, 0%, 75%)" : "hsl(0, 52%, 51%)";
    const pos1 = position == "position1" ? "pos1" : "";

    return (
        <div className={`lcard ${pos1}`} style={{ borderColor: col }}>
            <div className={`badge ${position}`}>{crank}</div>
            <div className={`badgeback`} style={{ backgroundColor: col }}></div>
            <div className={`name ${position}-name`}>{name}</div>
            <a href={`https://codeforces.com/profile/${handle}`}>
                <div className={`handle ${rank}`}>{handle}</div>
            </a>
            <div className="contestdt">
                <div className="grank">
                    <div className="field">Global Rank</div>
                    <div className="value" style={{ color: `var(--text-gradient-2)` }}>
                        {grank}
                    </div>
                </div>
                <div className="score">
                    <div className="field">Points</div>
                    <div className="value" style={{ color: `var(--text-gradient-1)` }}>
                        {score}
                    </div>
                </div>
            </div>
            <div className={`${position}-base`}></div>
        </div>
    );
}

export default function ContestWinners() {
    return (
        <div className="contestwin">
            <div className="heading">
                <span className="main gradient-text">Hall Of Fame</span>
                <h2>
                    Contest Winners of{" "}
                    <a href={`https://codeforces.com/contest/${2027}`} aria-label="contest link">
                        <span className="w-gradient-text">Codeforces Round 982 Div 2</span>
                    </a>
                </h2>
            </div>
            <div className="lbox">
                <WinCard
                    name={"Abhijit Karmakar"}
                    handle={"abhijit07cf"}
                    position={"position2"}
                    rank={"pupil"}
                    grank={5099}
                    crank={"2nd"}
                    score={1342}
                />
                <WinCard
                    name={"Satyam Yadav"}
                    handle={"Satyamyadav77512"}
                    position={"position1"}
                    rank={"pupil"}
                    grank={4803}
                    crank={"1st"}
                    score={1368}
                />
                <WinCard
                    name={"Prithiraj Biswas"}
                    handle={"Prithiraj069"}
                    position={"position3"}
                    rank={"newbie"}
                    grank={6162}
                    crank={"3rd"}
                    score={1244}
                />
            </div>
            <Link to={"/contest"}>
                <Button
                    sx={{
                        color: "white",
                        fontWeight: 500,
                        textDecoration: "none",
                        fontSize: "1rem",
                        animation: "wiggle 1s linear infinite",
                        animationDuration: "5s",
                        marginTop: "2rem",
                        // px: "1rem"
                    }}
                    endIcon={<Sendicon color="#fff" cls={"button-icon"} />}
                    color="primary"
                    variant="contained"
                    target="_blank"
                >
                    More Contest Results
                </Button>
            </Link>
        </div>
    );
}
