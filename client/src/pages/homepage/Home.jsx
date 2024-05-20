import React from "react";
import banner from "../../assets/banner.png";
import NameCard from "../../components/NameCard/NameCard";
import "./home.css";
import codeiiest_gdsc from "../../assets/Codeiiest-GDSCiiest.png";
import { Button, Box } from "@mui/material";
import { Meeting, Sendicon } from "../../../public/assets/svgvectors";

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
                    boost your coding skills
                    <br />
                    <span className="gradient-text">like never before</span>
                </div>
                <div className="content">
                    Unlock your potential and skyrocket your contest ratings with our intensive DSA Bootcamp. Join a
                    community of passionate learners and seasoned instructors dedicated to your success.
                </div>
                <Box className="button-group">
                    <Button
                        sx={{
                            color: "white",
                            fontWeight: 600,
                            textDecoration: "none",
                            fontSize: "1rem",
                        }}
                        endIcon={<Sendicon color="#fff" cls={"button-icon"}/>}
                        color="primary"
                        variant="contained"
                        href="https://forms.gle/WH9q332ETaD8ea2N8"
                        target="_blank"
                    >
                        Register Now
                    </Button>
                    {/* <Button
                        sx={{
                            color: "white",
                            fontWeight: 600,
                            textDecoration: "none",
                            fontSize: "1rem",
                        }}
                        endIcon={<Meeting color="#fff" cls={"button-icon"}/>}
                        variant="contained"
                        href="https://chat.whatsapp.com/GjffQq9LHdw8oLxfYqtJlM"
                        target="_blank"
                    >
                        Join Whatsapp Group
                    </Button> */}
                </Box>
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
                Get ready ready to turbocharge your skills with our awesome mentors! With their expert guidance, you'll
                master Data Structures and Algorithms while having an amazing Competitive Programming experience. Get
                inspired, tackle challenges, and elevate your coding game to new heights!
            </div>
            <div className="teams-list">
                <NameCard
                    name={"Samyajit Das"}
                    cf_rating={"Expert"}
                    cc_rating={4}
                    byline={"Solving problems faster than you can say 'syntax error'"}
                    profilepic={"/assets/profilepic/samyajit_das.jpg"}
                    cf_handle={"SD125"}
                    cc_handle={"SamyajitDas"}
                    linkedin={"https://www.linkedin.com/in/samyajit-das/"}
                />
                <NameCard
                    name={"Suraj Kashyap"}
                    cf_rating={"Specialist"}
                    cc_rating={4}
                    byline={"In CP, the journey is as important as the destination."}
                    profilepic={"/assets/profilepic/Suraj_Kashyap.jpeg"}
                    cf_handle={"Surajk21"}
                    cc_handle={"Surajk21"}
                    linkedin={"https://www.linkedin.com/in/kashyapsuraj/"}
                />
                <NameCard
                    name={"Hanzala Sharique"}
                    cf_rating={"Specialist"}
                    cc_rating={4}
                    byline={"Time Limit Exceeded: A hint you're one step closer to breakthrough."}
                    profilepic={"/assets/profilepic/Hanzala_Shariq.jpeg"}
                    cf_handle={"BurnerAce"}
                    cc_handle={"hanzalashariqu"}
                    linkedin={"https://www.linkedin.com/in/hanzala-sharique-944b69286/"}
                />
                <NameCard
                    name={"Mohak Singh"}
                    cf_rating={"Specialist"}
                    cc_rating={3}
                    byline={"Intuition in coding is like a GPS without signal: A Wild Guess!"}
                    profilepic={"/assets/profilepic/Mohak_Singh.jpeg"}
                    cf_handle={"singhmohak1604"}
                    cc_handle={"mohak06"}
                    linkedin={"https://www.linkedin.com/in/mohak-singh-572745252/"}
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
                <img src={codeiiest_gdsc} alt={""} />
            </div>
        </div>
    );
}

export default Home;
