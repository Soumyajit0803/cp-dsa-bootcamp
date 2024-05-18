import React from "react";
import codeiiest_gdsc from "../../assets/Codeiiest-GDSCiiest.png";
import "./footer.css";

function Person({ name, role }) {
    return (
        <div className="person">
            <div className="name">{name}</div>
            <div className="role">{role}</div>
        </div>
    );
}

function Footer() {
    return (
        <div className="footer">
            <div className="main">
                <div className="logo-icons">
                    <img src={codeiiest_gdsc} alt="" srcset="" />
                </div>
            </div>
            <div className="contact">
                <div className="heading">Contact</div>
                <div className="name-list">
                    <Person name="Ankita Tripathi" role="Poster Designing" />
                    <Person name="Ankita Tripathi" role="Poster Designing" />
                    <Person name="Ankita Tripathi" role="Poster Designing" />
                    <Person name="Ankita Tripathi" role="Poster Designing" />
                    <Person name="Ankita Tripathi" role="Poster Designing" />
                    <Person name="Ankita Tripathi" role="Poster Designing" />
                    <Person name="Ankita Tripathi" role="Poster Designing" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
