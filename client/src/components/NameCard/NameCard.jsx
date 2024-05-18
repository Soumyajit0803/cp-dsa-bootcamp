import React from "react";
import { IconButton } from "@mui/material";
import "./NameCard.css";
import cf from "../../assets/cf.webp";
import leetcode from "../../assets/leetcode.png";
import { Leetcode, Codechef, Codeforces, Linkedin } from "../../../public/assets/svgvectors";

function NameCard({ profilepic, name, cf_rating, cc_rating, cf_handle, cc_handle, byline, linkedin }) {
    return (
        <div className="namecard">
            <div className="profilepic">
                <img src={profilepic} alt="" />
            </div>
            <div className="name">{name}</div>
            <div className="flexing">
                <a href={`https://codeforces.com/profile/${cf_handle}`}>
                    <div className={cf_rating.toLowerCase()}>
                        <img src={cf} className="cf-img" />
                        {cf_rating}
                    </div>
                </a>
                <a href={`https://www.codechef.com/users/${cc_handle}`}>
                    <div className={`cc-${cc_rating}`} style={{ lineHeight: "1.22em" }}>
                        <Codechef cls={"cf-iconbutton"} color={"#fff"} />
                        {` ${cc_rating}★`}
                    </div>
                </a>
            </div>
            <div className="byline">{byline}</div>
            <div className="cp-profile">
                <IconButton className="icon-button" aria-label="delete" size="large" href={linkedin} target="_blank">
                    <Linkedin cls={"cf-iconbutton"} color={"#9f9f9f"} />
                </IconButton>
            </div>
        </div>
    );
}

export default NameCard;
