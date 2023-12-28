import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Scorecard from "./mui/Scorecard";

import { setCurrentMatches } from "../store/slices/Appslice";
import { apiConfig } from "../config/apiConfig";
import useHelper from "../Api/useHelper";

const Livescores = () => {
  const { request, response } = useHelper();

  const dispatch = useDispatch();

  const currentmatches = useSelector(
    (state) => state.stateContainer.currentMatches
  );

  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    request("GET", apiConfig.currentMatches);
  }, []);

  useEffect(() => {
    if (response) {
      dispatch(setCurrentMatches(response.data));
    }
  }, [response]);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {currentmatches &&
          currentmatches.map((m, index) => {
            return (
              <Col key={index}>
                <Scorecard item={m} isLive={true} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Livescores;
