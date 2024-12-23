import React from "react";
import "./ContestWinners.css";
import { Button, Avatar } from "@mui/material";
import { Sendicon } from "../../../public/assets/svgvectors";
import { Link } from "react-router-dom";
import useFetchContestWinners from "../../hooks/useFetchContestWinners";

function WinCard({ name, handle, avatar, position, grank, crank, score }) {
    const col =
        position == "position1" ? "rgb(255, 221, 2)" : position == "position2" ? "hsl(0, 0%, 75%)" : "hsl(0, 52%, 51%)";
    const pos1 = position == "position1" ? "pos1" : "";

    return (
        <div className={`lcard ${pos1}`} style={{ borderColor: col }}>
            <div className={`badge ${position}`}>{crank}</div>
            <div className={`badgeback`} style={{ backgroundColor: col }}></div>
            <div className={`name ${position}-name`}>{name}</div>
            <a href={`https://codeforces.com/profile/${handle}`}>
                <div style={{ display: "flex", color: "grey", textDecoration: "none", gap: "3px" }}>
                    <Avatar src={avatar} sx={{ width: 20, height: 20 }}>
                        {handle[0].toUpperCase()}
                    </Avatar>{" "}
                    {handle}
                </div>
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
    const { data, loading, error } = useFetchContestWinners();

    return (data && (
            <div className="contestwin">
                <div className="heading">
                    <span className="main gradient-text">Hall Of Fame</span>
                    <h2>
                        Contest Winners of{" "}
                        <a href={`https://codeforces.com/contest/${data.ID}`} aria-label="contest link" target="_blank">
                            <span className="w-gradient-text">{data.name}</span>
                        </a>
                    </h2>
                </div>
                <div className="lbox">
                    {data.rank2 && (
                        <WinCard
                            name={data.rank2.name}
                            handle={data.rank2.handle}
                            position={"position2"}
                            avatar={data.rank2.avatar}
                            grank={data.rank2.rank}
                            crank={"2nd"}
                            score={data.rank2.points}
                        />
                    )}
                    {data.rank1 && (
                        <WinCard
                            name={data.rank1.name}
                            handle={data.rank1.handle}
                            position={"position1"}
                            avatar={data.rank1.avatar}
                            grank={data.rank1.rank}
                            crank={"1st"}
                            score={data.rank1.points}
                        />
                    )}
                    {data.rank3 && (
                        <WinCard
                            name={data.rank3.name}
                            handle={data.rank3.handle}
                            position={"position3"}
                            avatar={data.rank3.avatar}
                            grank={data.rank3.rank}
                            crank={"3rd"}
                            score={data.rank3.points}
                        />
                    )}
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
        )
    );
}