import React, { useState, useEffect } from "react";
import axios from "axios";

import Grid from '@mui/material/Grid'
import { Container } from "@mui/system";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Header from "./Header";
import SideBar from "./SideBar";



const rootUrl = "https://bio-digester-monitor.ml";



const AllUnit = (props) => {


    return (
        <>
            <SideBar />
            <Container style={{marginLeft: "135px"}}>
                <Header  />

                <Card sx={{ width: 275, backgroundColor: "#cfe7ef", padding: "10px" }}>
                    <CardContent>
                        <Typography variant="h5" component="div"> UNIT 01 </Typography>
                        <Divider style={{paddingTop: "10px"}}/>
                        <Typography style={{paddingTop: "10px", fontSize: "17px"}} variant="body2">
                        Unit Id: 1
                        <br />
                        Time : 18:00:00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" variant="contained">Details</Button>
                    </CardActions>
                </Card>
                
            </Container>
        </>
    )
}

export default AllUnit;