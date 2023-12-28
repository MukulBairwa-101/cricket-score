import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Scorecard from "./mui/Scorecard";

import { apiConfig } from "../config/apiConfig";
import { setUpcomingMatches } from "../store/slices/Appslice";
import useHelper from "../Api/useHelper";

const UpcomingMatches = () => {
  const { request, response } = useHelper();

  const dispatch = useDispatch();

  const upcomingMatches = useSelector(
    (state) => state.stateContainer.upcomingMatches
  );

  useEffect(() => {
    request("GET", apiConfig.upcomingMatches);
  }, []);

  useEffect(() => {
    if (response) {
      dispatch(setUpcomingMatches(response.data));
    }
  }, [response]);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {upcomingMatches &&
          upcomingMatches.map((m, index) => {
            return (
              <Col key={index}>
                <Scorecard item={m} isLive={false} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default UpcomingMatches;
