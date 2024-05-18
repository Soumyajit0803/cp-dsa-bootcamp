import React from "react";
import banner from "../../assets/banner.png";
import NameCard from "../../components/NameCard/NameCard";
import "./home.css";
import codeiiest_gdsc from '../../assets/Codeiiest-GDSCiiest.png'
import {Button} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const Home = () => {
    return (
        <div className="home">
            <Introduction />
            <About />
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
            <div className="content">
            Get ready ready to turbocharge your skills with our awesome mentors! With their expert guidance, you'll master Data Structures and Algorithms while having an amazing Competitive Programming experience. Get inspired, tackle challenges, and elevate your coding game to new heights!
            </div>
            <div className="teams-list">
                <NameCard
                    name={"Samyajit Das"}
                    cf_rating={"Expert"}
                    cc_rating={4}
                    byline={"Solving problems faster than you can say 'syntax error'"}
                    profilepic={"./assets/profilepic/samyajit_das.jpg"}
                    cf_handle={"SD125"}
                    cc_handle={"SamyajitDas"}
                />
                <NameCard
                    name={"Suraj Kashyap"}
                    cf_rating={"Specialist"}
                    cc_rating={4}
                    byline={"Python coder with a knack for problem solving CP. "}
                    profilepic={"../../public/assets/profilepic/Suraj_Kashyap.jpeg"}
                    cf_handle={"SD125"}
                    cc_handle={"SamyajitDas"}
                />
                <NameCard
                    name={"Hanzala Shariq"}
                    cf_rating={"Specialist"}
                    cc_rating={4}
                    byline={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Anim"}
                    profilepic={"../../public/assets/profilepic/samyajit_das.jpg"}
                    cf_handle={"SD125"}
                    cc_handle={"SamyajitDas"}
                />
                <NameCard
                    name={"Mohak Singh"}
                    cf_rating={"Specialist"}
                    cc_rating={3}
                    byline={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Anim"}
                    profilepic={"../../public/assets/profilepic/Mohak_Singh.jpeg"}
                    cf_handle={"SD125"}
                    cc_handle={"SamyajitDas"}
                />
            </div>
        </div>
    );
}

function About() {
    return (
        <div className="about">
            <div className="heading">
                About the <span className="gradient-text">Program</span>
            </div>
            <div className="content">
                Join us for an exciting Summer Bootcamp on Data Structures & Algorithms (DSA) and Competitive
                Programming (CP) organized by CODEIIEST and GDSC, IIEST Shibpur! Enhance your coding skills with
                hands-on learning, tackle challenging problems, and engage in collaborative community learning. Enjoy
                interactive sessions, thrilling coding challenges, and a fun, engaging experience. Don't miss this
                golden opportunity to be productive and stay ahead of the curve this summer! 🌟🚀
            </div>
            <div className="presented-by">
                <img src={codeiiest_gdsc} alt={""} srcset="" />
            </div>
        </div>
    );
}

export default Home;
