import React from "react";
import banner from "../../assets/banner.png";
import NameCard from "../../components/NameCard/NameCard";
import "./home.css";
import {Button} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const Home = () => {
    return (
        <div className="home">
            <Introduction />
            <MeetTheTeam />
        </div>
    );
};

function Introduction() {
    return (
        <div className="intro">
            <div className="info">
                <div className="heading">
                    This summer,
                    <br />
                    increase your rating
                    <br />
                    <span className="gradient-text">like never before</span>
                </div>
                <div className="content">
                Unlock your potential and skyrocket your programming skills with our intensive DSA Bootcamp. Join a community of passionate learners and seasoned instructors dedicated to your success.
                </div>
                <Button
                    sx={{
                        border: "1px solid green",
                        color: "white",
                        fontWeight: 600,
                        textDecoration: "none",
                        marginTop: "1.5rem",
                        fontSize: "1rem",          
                    }}
                    endIcon = { <SendIcon />}
                    color="primary"
                    variant="contained"
                >
                    Register Now
                </Button>
            </div>
            <div className="banner">
                <img src={banner} alt="banner img" />
            </div>
        </div>
    );
}

function MeetTheTeam() {
    return (
        <div className="team">
            <div className="heading">
                Meet our awesome
                <br />
                <span className="gradient-text">Mentors</span>
            </div>
            <div className="teams-list">
                <NameCard
                    name={"Samyajit Das"}
                    rating={"Expert"}
                    byline={
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Anim"
                    }
                    profilepic={"../../public/assets/profilepic/samyajit_das.jpg"}
                />
                <NameCard
                    name={"Suraj Kashyap"}
                    rating={"Specialist"}
                    byline={
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Anim"
                    }
                    profilepic={"../../public/assets/profilepic/samyajit_das.jpg"}
                />
                <NameCard
                    name={"Hanzala Shariq"}
                    rating={"Specialist"}
                    byline={
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Anim"
                    }
                    profilepic={"../../public/assets/profilepic/samyajit_das.jpg"}
                />
                <NameCard
                    name={"Mohak Singh"}
                    rating={"Specialist"}
                    byline={
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Anim"
                    }
                    profilepic={"../../public/assets/profilepic/samyajit_das.jpg"}
                />
            </div>
        </div>
    );
}

export default Home;
