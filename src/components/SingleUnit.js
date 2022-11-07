import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink, CSVDownload } from "react-csv";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const rootUrl = "https://bio-digester-server.herokuapp.com";

const SingleUnit = (props) => {
    const [currSerialRes, setCurrSerialRes] = useState({});
    const [allSerialRes, setAllSerialRes] = useState([]);

    useEffect(() => {
        // GET LATEST 3 SERIAL RESPONSES FOR DASHBOARD
        axios.get(`${rootUrl}/get-latest/1`)    
            .then(res => {      
                console.log('Response rec from server');
                console.log(res.data);
                let latestRes = res.data.data;
                latestRes = latestRes.reverse();
                setCurrSerialRes(latestRes[0]);
            })      
        
        // GET ALL SERIAL RESPONSES FOR CSV DOWNLOAD
        axios.get(`${rootUrl}/get-data/1`)    
            .then(res => {      
                console.log('Response rec from server');
                console.log(res.data.data);
                let allSerialResponses = res.data.data;
                allSerialResponses = allSerialResponses.reverse();
                setAllSerialRes(allSerialResponses);
            })      
    }, []);

    return (
        <>
            <Container fixed>
                <h1> Dashboard for Bio-digester Data Acquisition</h1>
            </Container>

            {/* BODY CONTAINER */}
            <Container fixed>
                {/* DATE TIME COONTAINER */}
                <Grid container style={{marginBottom: '10px'}} spacing={2}>
                    <Grid item xs={6}>
                        <div className="container" >
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            Date </td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                            {currSerialRes.serverDate}</td>

                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            Time  </td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                        {currSerialRes.serverTime}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Grid>
                </Grid>
                {/* DATE TIME COONTAINER */}

                {/* TEMP & PH CONTAINER */}
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className="container" >
                            {/* TEMP TABLE */}
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            Temp 1</td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                            {currSerialRes.temp1}</td>
                                    </tr>

                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            Temp 2</td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                            {currSerialRes.temp2}</td>
                                    </tr>

                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            Temp 3</td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                            {currSerialRes.temp3}</td>
                                    </tr>

                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            Temp 4</td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                            {currSerialRes.temp4}</td>
                                    </tr>

                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            Temp 5</td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                            {currSerialRes.temp5}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* TEMP TABLE */}
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="container" >
                            {/* PH TABLE */}
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            pH 1</td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                        {currSerialRes.ph1}</td>
                                    </tr>

                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            pH 2</td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                            {currSerialRes.ph2}</td>
                                    </tr>

                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            pH 3</td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                            {currSerialRes.ph3}</td>
                                    </tr>

                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            pH 4</td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                            {currSerialRes.ph4}</td>
                                    </tr>

                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            pH 5</td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                            {currSerialRes.ph5}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* PH TABLE */}
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div className="container" >
                            {/* MODBUS  TABLE */}
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "Gray"}} >
                                            Energy </td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                        {currSerialRes.energy} KWH</td>
                                    </tr>

                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            Flow Rate </td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                        {currSerialRes.flow} LPM</td>
                                    </tr>

                                    <tr>
                                        <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                            Flow Volume</td>
                                        <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                        {currSerialRes.flowVolume} L</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* MODBUS  TABLE */}
                        </div>
                    </Grid>
                </Grid>

                {/* CSV DOWNLAOAD BUTTON */}
                <CSVLink  filename={"bio-digester.csv"} data={allSerialRes}>Download me</CSVLink>
            </Container>
        </>
    );
}

export default SingleUnit;