import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import { Typography } from "@mui/material";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import useHelper from "../Api/useHelper";
import { apiConfig } from "../config/apiConfig";
import { setSearchedPlayers } from "../store/slices/Appslice";

const SearchScreen = () => {
  const { request, response } = useHelper();

  const dispatch = useDispatch();

  const searchItems = useSelector(
    (state) => state.stateContainer.searchedPlayers
  );

  const [searchText, setSearchText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (response) {
      dispatch(setSearchedPlayers(response.data));
    }
  }, [response]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText) {
      setIsSubmitted(true);
    }

    setTimeout(() => {
      request("GET", apiConfig.searchPlayers, {
        key: "search",
        value: searchText,
        status: true,
      });
    }, 3000);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form inline style={{ width: "60%" }}>
        <Row className="justify-content-center my-2">
          <Col xs={12} sm={8}>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2 w-100"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Col>
          <Col xs={12} sm={4} className="text-center mt-2 mt-sm-0">
            <Button
              variant="primary"
              type="submit"
              style={{ width: "80%" }}
              onClick={handleSearch}
            >
              {"Search"}
            </Button>
          </Col>
        </Row>
        <Row
          className="justify-content-start "
          style={{
            overflowY: response ? "scroll" : "none",
            maxHeight: "700px",
          }}
        >
          {searchItems.length ? (
            searchItems?.map((si, index) => (
              <Typography
                py={4}
                key={si?.id}
                sx={{
                  borderBottom:
                    index === searchItems.length - 1
                      ? "none"
                      : ".2px solid #ededed",
                }}
              >
                {si?.name} - {si?.country}
              </Typography>
            ))
          ) : isSubmitted ? (
            response ? (
              <Typography sx={{ textAlign: "center" }} py={4}>
                {"No results found"}
              </Typography>
            ) : (
              <Typography sx={{ textAlign: "center" }} py={4}>
                {"Loading"}
              </Typography>
            )
          ) : null}
        </Row>
      </Form>
    </div>
  );
};

export default SearchScreen;
