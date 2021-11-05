import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col } from "reactstrap";
import "./App.css";
import styled from "styled-components";
export const BASE_URL = "https://api.nasa.gov/planetary/apod";
export const API_KEY = "DEMO_KEY";

const NasaImg = styled.img`
  max-height: 400px;
  max-width: 600px;
`;
const Card = styled.img`



`
function App() {
  const [picOfDay, setPicOfDay] = useState([]);

  const colorStyling = {
    backgroundColor: "black",
    color: "beige",
  };

  const text = {
    marginLeft: "10%",
    marginRight: "10%",
    paddingBottom: "5rem",
    color: "teal",
  };

  useEffect(() => {
    const getPicOfDay = () => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
          console.log(res);
          setPicOfDay(res.data);
        })

        .catch((err) => {
          console.log(err);
        });
    };
    getPicOfDay();
  }, []);

  return (
    <div className="App">
      <Card style={colorStyling}>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h1>Nasa Photo Of The Day!</h1>
          <NasaImg src={picOfDay.url} alt="Newly Discovered Space Anomaly" />

          <div className="text">
            <h2>{picOfDay.title}</h2>
            <h3>{picOfDay.date}</h3>
            <p style={text}>{picOfDay.explanation}</p>
          </div>
        </Col>
      </Card>
    </div>
  );
}

export default App;
