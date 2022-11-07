import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink, CSVDownload } from "react-csv";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const rootUrl = "https://bio-digester-server.herokuapp.com";

const SingleUnit = (props) => {
    const [currSerialRes, setCurrSerialRes] = useState({});
    const [allSerialRes, setAllSerialRes] = useState([]);

    const csvData = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
      ];

    let excelData = [];
      

    useEffect(() => {
        axios.get(`${rootUrl}/get-latest/1`)    
            .then(res => {      
                console.log('Response rec from server');
                console.log(res.data);
                let latestRes = res.data.data;
                latestRes = latestRes.reverse();
                setCurrSerialRes(latestRes[0]);
            })      

        axios.get(`${rootUrl}/get-data/1`)    
            .then(res => {      
                console.log('Response rec from server');
                console.log(res.data.data);
                let all = res.data.data;
                all = all.reverse();
                setAllSerialRes(all);
                
                excelData.push(Object.keys(JSON.parse(JSON.stringify(all[0]))));
                excelData.push(Object.values(JSON.parse(JSON.stringify(all[0]))));

                // all.map((a) => {
                //     excelData.push(Object.values(JSON.parse(JSON.stringify(a))));
                // })
                console.log('final array for csv : ', excelData);
                excelData = excelData[1].slice(0,10);
            })      
    }, []);

    return (
        <>
            <Container fixed>
                <h1> Dashboard for Bio-digester Data Acquisition</h1>
            </Container>
            <Container fixed>

            <Grid container style={{marginBottom: '10px'}} spacing={2}>
                <Grid item xs={6}>
                    <div className="container" >
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                        Date </td>
                                    <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                        {currSerialRes.date}</td>

                                    <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                        Time  </td>
                                    <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                    {currSerialRes.time}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Grid>
            </Grid>

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
                                    <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                        Energy </td>
                                    <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                    {currSerialRes.energy}</td>
                                </tr>

                                <tr>
                                    <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                        Flow Rate </td>
                                    <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                    {currSerialRes.flow}</td>
                                </tr>

                                <tr>
                                    <td style={{backgroundColor: "#00FFFF", color: "black"}} >
                                        Flow Volume</td>
                                    <td  style={{backgroundColor: "rgb(228, 58, 58)", color: "white"}} >
                                    {currSerialRes.flowVolume}</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* MODBUS  TABLE */}
                    </div>
                </Grid>
            </Grid>

            <CSVLink  filename={"bio-digester.csv"} data={allSerialRes}>Download me</CSVLink>


            </Container>
        </>
    );
}

export default SingleUnit;