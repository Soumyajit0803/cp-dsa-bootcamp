import {
    IconButton,
    Menu,
    MenuItem,
    AppBar,
    Box,
    Typography,
    useMediaQuery,
    useTheme,
    Button,
    ButtonGroup,
} from "@mui/material";
import { useState } from "react";
// import Menuicon from "@mui/icons-material/Menu";
import { Menuicon } from "../../../public/assets/svgvectors";
import "./Header.css";

import { Link, NavLink } from "react-router-dom";

const Menubutton = () => {
    const [anchorElm, setAnchorElm] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setAnchorElm(null);
        setOpen(false);
    };
    const handleClick = (e) => {
        setAnchorElm(e.currentTarget);
        setOpen(true);
    };

    return (
        <Box sx={{ paddingRight: 1 }}>
            <IconButton onClick={handleClick} className="icon-button" aria-label="delete" size="large">
                <Menuicon cls={"icon-buttons"} color={"#fff"} />
            </IconButton>
            <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
                <NavLink style={{ textDecoration: "none" }} to="/leaderboard">
                    <MenuItem sx={{ textDecoration: "none", color: "black" }} onClick={handleClose}>
                        Leaderboard
                    </MenuItem>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="/contest">
                    <MenuItem sx={{ textDecoration: "none", color: "black" }} onClick={handleClose}>
                        Contest
                    </MenuItem>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="/resources">
                    <MenuItem sx={{ textDecoration: "none", color: "black" }} onClick={handleClose}>
                        Resources{" "}
                    </MenuItem>
                </NavLink>
            </Menu>
        </Box>
    );
};

const HeaderTabs = () => {
    return (
        <ButtonGroup sx={{ textDecoration: "none", marginRight: 1 }}>
            <NavLink className="navlink" to="/leaderboard">
                <Button
                    sx={{
                        border: "0",
                        color: "white",
                        fontWeight: 600,
                        textDecoration: "none",
                    }}
                    color="inherit"
                >
                    Leaderboard
                </Button>
            </NavLink>
            <NavLink className="navlink" to="/contest">
                <Button
                    sx={{
                        border: 0,
                        color: "white",
                        backgroundColor: "inherit",
                        fontWeight: 600,
                        textDecoration: "none",
                    }}
                    color="inherit"
                >
                    Contest
                </Button>
            </NavLink>
            <NavLink className="navlink" to="/resources">
                <Button
                    sx={{
                        border: 0,
                        color: "white",
                        backgroundColor: "none",
                        fontWeight: 600,
                        textDecoration: "none",
                    }}
                    color="inherit"
                >
                    Resources
                </Button>
            </NavLink>
        </ButtonGroup>
    );
};

const Header = () => {
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down(800));
    return (
        <div>
            <AppBar
                sx={{
                    backgroundColor: "var(--headercolor)",
                    // backdropFilter: "blur(10px)",
                    // py: 0.5,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
                >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: 2,
                        minHeight: "60px",
                    }}
                >
                    <Link style={{ textDecoration: "none", display: "flex", alignItems: "center" }} to="/">

                        <Typography
                            variant="h5"
                            sx={{
                                color: "white",
                                fontWeight: 600,
                            }}
                        >
                            CP/DSA Bootcamp
                        </Typography>
                    </Link>
                </Box>
                {mobileView ? <Menubutton /> : <HeaderTabs />}
            </AppBar>
        </div>
    );
};

export default Header;
