import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink, CSVDownload } from "react-csv";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// const rootUrl = "https://bio-digester-monitor.onrender.com";
const rootUrl = "https://bio-digester-monitor.ml";
// const rootUrl = "http://ec2-13-234-255-254.ap-south-1.compute.amazonaws.com";

const SingleUnit = (props) => {
    const [currSerialRes, setCurrSerialRes] = useState({});
    const [allSerialRes, setAllSerialRes] = useState([]);

    useEffect(() => {

        console.log("-------------> Root url ----> ", rootUrl);

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

        let intervalID = setInterval(() => {

            axios.get(`${rootUrl}/get-latest/1`)    
            .then(res => {      
                console.log('Response rec from server');
                console.log(res.data);
                let latestRes = res.data.data;
                latestRes = latestRes.reverse();
                setCurrSerialRes(latestRes[0]);
            }) ;
        
        }, 5000);
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
                            {/* DATE TIME TABLE */}
                            <table style={{width : "80%"}}  className="table">
                                <tbody>
                                    <tr className="date-time-row">
                                        <td style={{color: "black"}} >
                                            DATE </td>
                                        <td  style={{color: "white", backgroundColor: "rgb(45, 203, 123)"}} >
                                            {currSerialRes.serverDate}</td>

                                        <td style={{color: "black"}} >
                                            TIME  </td>
                                        <td  style={{color: "white", backgroundColor: "rgb(45, 203, 123)"}} >
                                        {currSerialRes.serverTime}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* DATE TIME TABLE */}
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
                                        <td colSpan={2}  className="table-heading" >
                                            TEMPRATURE</td>
                                    </tr>
                                    <tr>
                                        <td style={{color: "black"}} >
                                            Temp 1</td>
                                        <td  style={{color: "black"}} >
                                            {currSerialRes.temp1}</td>
                                    </tr>

                                    <tr>
                                        <td style={{color: "black"}} >
                                            Temp 2</td>
                                        <td  style={{color: "black"}} >
                                            {currSerialRes.temp2}</td>
                                    </tr>

                                    <tr>
                                        <td style={{color: "black"}} >
                                            Temp 3</td>
                                        <td  style={{color: "black"}} >
                                            {currSerialRes.temp3}</td>
                                    </tr>

                                    <tr>
                                        <td style={{color: "black"}} >
                                            Temp 4</td>
                                        <td  style={{color: "black"}} >
                                            {currSerialRes.temp4}</td>
                                    </tr>

                                    <tr>
                                        <td style={{color: "black"}} >
                                            Temp 5</td>
                                        <td  style={{color: "black"}} >
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
                                        <td colSpan={2}  className="table-heading" >
                                            PH VALUE</td>
                                    </tr>
                                    <tr>
                                        <td style={{color: "black"}} >
                                            pH 1</td>
                                        <td  style={{color: "black"}} >
                                        {currSerialRes.ph1}</td>
                                    </tr>

                                    <tr>
                                        <td style={{color: "black"}} >
                                            pH 2</td>
                                        <td  style={{color: "black"}} >
                                            {currSerialRes.ph2}</td>
                                    </tr>

                                    <tr>
                                        <td style={{color: "black"}} >
                                            pH 3</td>
                                        <td  style={{color: "black"}} >
                                            {currSerialRes.ph3}</td>
                                    </tr>

                                    <tr>
                                        <td style={{color: "black"}} >
                                            pH 4</td>
                                        <td  style={{color: "black"}} >
                                            {currSerialRes.ph4}</td>
                                    </tr>

                                    <tr>
                                        <td style={{color: "black"}} >
                                            pH 5</td>
                                        <td  style={{color: "black"}} >
                                            {currSerialRes.ph5}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* PH TABLE */}
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div className="container" >
                            {/* FLOW  TABLE */}
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td colSpan={2}  className="table-heading" >
                                            FLOW METER</td>
                                    </tr>
                                    <tr>
                                        <td style={{color: "black"}}>
                                            Flow Rate </td>
                                        <td  style={{color: "black"}} >
                                        {currSerialRes.flow} LPM</td>
                                    </tr>

                                    <tr>
                                        <td style={{color: "black"}}>
                                            Flow Volume</td>
                                        <td  style={{color: "black"}} >
                                        {currSerialRes.flowVolume} L</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* FLOW  TABLE */}
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div className="container" >
                            {/* MODBUS  TABLE */}
                            <table className="table">
                                <tbody>
                                    {/* <tr>
                                        <td colSpan={2}  className="table-heading" >
                                            ENERGY METER</td>
                                    </tr> */}
                                    
                                    <tr>
                                        <td style={{color: "black"}} >
                                            Energy </td>
                                        <td  style={{color: "black"}} >
                                        {currSerialRes.energy} KWH</td>
                                    </tr>
                                    <tr>
                                        <td style={{color: "black"}} >
                                            Humidity </td>
                                        <td  style={{color: "black"}} >
                                        {currSerialRes.rh}  % </td>
                                    </tr>
                                    <tr>
                                        <td style={{color: "black"}} >
                                            Temp 6 </td>
                                        <td  style={{color: "black"}} >
                                        {currSerialRes.temp6}  </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* MODBUS  TABLE */}
                        </div>
                    </Grid>
                </Grid>

                <Container fixed style={{marginLeft: '-25px'}}>
                    <h2> Download Historical Data</h2>
                </Container>

                {/* CSV DOWNLAOAD BUTTON */}
                <Grid style={{marginTop: '-20px', marginLeft: '-10px'}} container spacing={0}>
                    <Grid item xs={6}>
                        <Button className="csv-link"   style={{ margin: '10px', minWidth: '300px' }}variant="contained"><CSVLink  filename={"bio-digester.csv"} data={allSerialRes}>DOWNLOAD LAST 30 DAYS</CSVLink></Button>
                    </Grid>
                    {/* <Grid item xs={6}></Grid> */}
                    {/* <Grid item xs={6}>
                        <Button className="csv-link"  style={{ margin: '10px', minWidth: '300px' }}variant="contained"><CSVLink  filename={"bio-digester.csv"} data={allSerialRes}>DOWNLOAD LAST 7 DAYS</CSVLink></Button>
                    </Grid> */}
                </Grid>
            </Container>
        </>
    );
}

export default SingleUnit;