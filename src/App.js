import React, { useState, useEffect } from "react";
import "./App.css";

import CardDisplay from "./Stats/CardDisplay";
import CallIcon from "@mui/icons-material/Call";
import TableData from "./Table/TableData";
import GridOnIcon from "@mui/icons-material/GridOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import GraphData from "./Graph/GraphData";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";

function App() {
  const [records, setRecords] = useState({
    userData: "",
  });

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRecords({ userData: data });
      });
  }, []);

  if (!sessionStorage.getItem("userData")) {
    return (
      <>
        <div className="app">
          <div className="failureMsg">
            Sorry, login first to acess dashboard 👨‍💻
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="app">
          <CardDisplay />
          <div className="reactTabs">
            <Tabs>
              <TabList>
                <Tab>
                  <GridOnIcon style={{ color: "var(--secondary-color)" }} />
                </Tab>
                <Tab>
                  <BarChartIcon style={{ color: "var(--secondary-color)" }} />
                </Tab>
              </TabList>
              <TabPanel>
                <TableData />
              </TabPanel>
              <TabPanel>
                <GraphData />
              </TabPanel>
            </Tabs>
          </div>
          <div className="chaticon">
            <CallIcon />
            <span>Get Consulted</span>
          </div>
        </div>
      </>
    );
  }
}

export default App;
