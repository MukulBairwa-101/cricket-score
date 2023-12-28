import * as React from "react";
import { useNavigate } from "react-router-dom";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function CustomizedTabs() {
  const handleSelect = (selectedKey) => {
    navigate(`/${selectedKey}`);
  };
  const navigate = useNavigate();

  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
      onSelect={handleSelect}
    >
      <Tab eventKey="currentscores" title="Current Scores" />
      <Tab eventKey="upcomingmatches" title="Upcoming Matches" />
      <Tab eventKey="playersearch" title="Player Search" />
    </Tabs>
  );
}
