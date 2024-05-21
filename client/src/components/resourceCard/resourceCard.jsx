import React from "react";
import "./resourceCard.css";
import { Button } from "@mui/material";
import { Practice } from "../../../public/assets/svgvectors";

export default function ResourceCard({ session, heading, text, sheetLink, extraLinks, datetime }) {
    return (
        <div className="resource-card">
            <div className="heading">
                {session!=="" && (
                    <div style={{ color: "#6e8491", fontWeight: "500", fontSize: "1rem" }}>Session {session}</div>
                )}
                {heading}
                <div className="datetime">{datetime}</div>
            </div>

            {text && <div className="content">{text}</div>}
            <Button
                sx={{
                    color: "white",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "1rem",
                    position: "relative",
                }}
                endIcon={<Practice color="#fff" cls={"button-icon"} />}
                color="primary"
                variant="contained"
                href={sheetLink}
                target="_blank"
                className={sheetLink ? "" : "disabled"}
            >
                Practice Sheet
            </Button>
            <div className="extra-heading">Extra Links</div>
            <div className="links">
                {extraLinks &&
                    Object.keys(extraLinks).map((link, i) => {
                        return (
                            <Button key={i} className={"table-swap"} size="large" href={extraLinks[link]} target="_blank">
                                {link}
                            </Button>
                        );
                    })}
                {!extraLinks && (
                    <Button className={"table-swap"} size="large" href={""} target="_blank" disabled>
                        Coming Soon...
                    </Button>
                )}
            </div>
        </div>
    );
}
