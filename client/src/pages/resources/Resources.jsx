import { React, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import "./Resources.css";
import ResourceCard from "../../components/resourceCard/resourceCard";

const Resources = () => {
    return (
        <div className="resources">
            <div className="heading gradient-text">Resources</div>
            <div className="content">
                Discover a comprehensive collection of learning resources tailored for competitive programming
                enthusiasts. Access a variety of questions, study materials, and practice problems designed to enhance
                your coding skills and help you excel in CP competitions.
            </div>
            <div className="list">
                <ResourceCard
                    session={0}
                    text={""}
                    sheetLink={"https://docs.google.com/document/d/1aHA1rGATnrAG0l2J6NlR981OSo3V41vx/edit?usp=sharing&ouid=117739622112221879547&rtpof=true&sd=true"}
                    heading={"Introduction"}
                    datetime={"19th May, 6-8pm IST"}
                    extraLinks={{"CP setup @Sublime Text":"https://youtu.be/Zlx7gmt3lBU?si=2FdGVLUkTBLIqiAv"}}
                />
                <ResourceCard
                    session={1}
                    text={""}
                    sheetLink={"https://docs.google.com/document/d/1UQzq2ujIzM2iBNiz-Tw0uSAPqdlVPgUt/edit?usp=sharing&ouid=117739622112221879547&rtpof=true&sd=true"}
                    heading={"Arrays (Part I)"}
                    datetime={"1st June, 6 - 8 pm IST"}
                    extraLinks={{"none": ""}}
                />
                <ResourceCard
                    session={2}
                    text={""}
                    sheetLink={"https://docs.google.com/document/d/1RyWq6UrPh5ovv_T_Jkvc5SJ125s2TC-1/edit?usp=sharing&ouid=117739622112221879547&rtpof=true&sd=true"}
                    heading={"Arrays Part II"}
                    datetime={"8th June, 6-8pm IST"}
                    extraLinks={{"Sliding window playlist": "https://youtube.com/playlist?list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&si=oiwfh88Ux7f-YsBe"}}
                />
                <ResourceCard
                    session={3}
                    text={""}
                    sheetLink={""}
                    heading={"Arrays Part III"}
                    datetime={"15th June, 6-8pm IST"}
                    extraLinks={null}
                />
                <ResourceCard
                    session={4}
                    text={""}
                    sheetLink={""}
                    heading={"Strings"}
                    datetime={"22nd June, 6-8pm IST"}
                    extraLinks={null}
                />
                <ResourceCard
                    session={5}
                    text={""}
                    sheetLink={""}
                    heading={"Bit Manipulation"}
                    datetime={"27th June, 6-8pm IST"}
                    extraLinks={null}
                />
                <ResourceCard
                    session={""}
                    text={"Miscellaneous questions from topics discussed so far"}
                    sheetLink={""}
                    heading={"Practical Session"}
                    datetime={"4th July, 6-8pm IST"}
                    extraLinks={null}
                />
            </div>
        </div>
    );
};

export default Resources;
