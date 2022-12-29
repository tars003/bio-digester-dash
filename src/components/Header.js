import React from "react";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const Header = (props) => {
    return (
        <Grid container >
            <Grid item xs={3} >
                <img className="logo" src="/logo.jpg" />
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center" }}>
                <h1> Dashboard for Bio-digester Data Acquisition</h1>
            </Grid>

            <Grid item xs={3} >
                <img className="logo-drdo" src="/drdo-logo1.jpg" />
            </Grid>
        </Grid>
    )
}

export default Header;