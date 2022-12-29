import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

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



const rootUrl = process.env.REACT_APP_ROOT_URL;



const AllUnit = (props) => {

    const [units, setUnits] = useState([]);

    const navigate  = useNavigate();

    useEffect(() => {
        // GET ALL UNITS
        axios.get(`${rootUrl}/get-units`)
            .then(res => {
                console.log('Response rec from server');
                console.log(res.data.data);
                setUnits(res.data.data);
            })
    }, []);

    return (
        <>
            <SideBar />
            <Container style={{marginLeft: "135px"}}>
                <Header  />

                <Grid container spacing={2}>
                {units.map(unit => (
                    <Grid  key={unit["_id"]} item>
                        <Card sx={{ width: 275, backgroundColor: "#cfe7ef", padding: "10px" }}>
                            <CardContent>
                                <Typography variant="h5" component="div"> UNIT {unit["_id"]} </Typography>
                                <Divider style={{paddingTop: "10px"}}/>
                                <Typography style={{paddingTop: "10px", fontSize: "17px"}} variant="body2">
                                Unit Id: {unit["_id"]}
                                <br />
                                Time : {unit["serverTime"]}
                                <br />
                                Date : {unit["serverDate"]}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => navigate(`/unit/${unit["_id"]}`)} size="large" variant="contained">Details</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                </Grid>

                {/* <Card sx={{ width: 275, backgroundColor: "#cfe7ef", padding: "10px" }}>
                    <CardContent>
                        <Typography variant="h5" component="div"> UNIT 01 </Typography>
                        <Divider style={{paddingTop: "10px"}}/>
                        <Typography style={{paddingTop: "10px", fontSize: "17px"}} variant="body2">
                        Unit Id: 1
                        <br />
                        Time : 18:00:00
                        <br />
                        Date : 18:00:00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" variant="contained">Details</Button>
                    </CardActions>
                </Card> */}
                
            </Container>
        </>
    )
}

export default AllUnit;