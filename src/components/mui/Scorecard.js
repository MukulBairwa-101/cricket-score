import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import teamlogodefault from "../../Assets/teamlogodefault.png";

import { formatDateTime } from "../../services/util";

let scorecard = {
  cursor: "pointer",
  boxShadow: "none",
  border: "0.3px solid #eeeeee",
  borderRadius: "20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const Scorecard = ({ item, isLive }) => {
  console.log(item, "item");

  const [scheduleStart, setScheduleStart] = useState("");

  useEffect(() => {
    let date = formatDateTime(item?.dateTimeGMT);
    setScheduleStart(date);
  }, []);

  return (
    <Card sx={scorecard}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item?.teamInfo?.map((t, idx) => {
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: idx === 1 ? "row-reverse" : "",
                  }}
                >
                  <Box sx={{ maxWidth: "50px" }}>
                    <img
                      src={t?.img ? t?.img : teamlogodefault}
                      style={{ borderRadius: "50%", width: "100%" }}
                    />
                  </Box>

                  <Typography mx={2}>{t?.shortname}</Typography>
                </Box>
                {idx === 0 ? <Typography>V/S</Typography> : null}
              </>
            );
          })}
        </Box>
        <Box>
          {!isLive ? (
            <Typography
              sx={{ color: "#b0bec5", fontWeight: 600, textAlign: "center" }}
              my={2}
            >
              {item?.name}
            </Typography>
          ) : null}
        </Box>
      </CardContent>{" "}
      <CardContent>
        {isLive ? (
          <Box>
            <Box>
              <Typography>{item?.name}</Typography>
              <Typography sx={{ color: "#e57373" }} my={2}>
                {item?.status}
              </Typography>
            </Box>

            <Box>
              {item?.score?.map((sc) => {
                return (
                  <Box
                    sx={{
                      textAlign: sc?.inning.includes(item?.teams[0])
                        ? "left"
                        : "right",
                    }}
                  >
                    <Typography>
                      {sc?.r}/{sc?.w}{" "}
                    </Typography>
                    <Typography>{sc?.o} Overs </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "5px",
              borderRadius: "20px",
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
              {item?.venue}
            </Typography>
            <Typography>{scheduleStart}</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default Scorecard;
