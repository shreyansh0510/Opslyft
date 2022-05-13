import React, { useState, useEffect } from "react";
import "./GraphData.css";
import { Bar, defaults } from "react-chartjs-2";

defaults.global.legend.position = "bottom";

const url = "https://disease.sh/v3/covid-19/historical/all?lastdays=7";

function GraphData() {
  // const [sevenDays, setSevenDays] = useState({});
  const [active, setActive] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [recovered, setRecovered] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          // setSevenDays(data);
          setActive(data.cases);
          setDeaths(data.deaths);
          setRecovered(data.recovered);
        });
    };
    getData();
  }, []);

  return (
    <>
      <div className="graphDataClass">
        <div className="graphheading">Last seven days data:</div>
        <Bar
          data={{
            labels: Object.keys(active),
            datasets: [
              {
                label: "Active",
                data: Object.values(active),
                backgroundColor: [
                  "rgba(227, 14, 0  , 0.5)",
                  "rgba(227, 14, 0  , 0.5)",
                  "rgba(227, 14, 0  , 0.5)",
                  "rgba(227, 14, 0  , 0.5)",
                  "rgba(227, 14, 0  , 0.5)",
                  "rgba(227, 14, 0  , 0.5)",
                  "rgba(227, 14, 0  , 0.5)",
                ],
                borderColor: [
                  "rgba(227, 14, 0  , 1)",
                  "rgba(227, 14, 0  , 1)",
                  "rgba(227, 14, 0  , 1)",
                  "rgba(227, 14, 0  , 1)",
                  "rgba(227, 14, 0  , 1)",
                  "rgba(227, 14, 0  , 1)",
                  "rgba(227, 14, 0  , 1)",
                ],
                borderWidth: 1.5,
              },
              {
                label: "Recovered",
                // data: Object.values(recovered),
                // NOTE : NO DATA IN API FOR RECOVERED SO, I'VE GIVEN STATIC HARD CODED VALUES
                data: [
                  "313811025",
                  "51873916",
                  "415596105",
                  "307423636",
                  "403851025",
                  "313811025",
                  "117423736",
                ],
                backgroundColor: [
                  "rgba(69, 229, 0 , 0.5)",
                  "rgba(69, 229, 0 , 0.5)",
                  "rgba(69, 229, 0 , 0.5)",
                  "rgba(69, 229, 0 , 0.5)",
                  "rgba(69, 229, 0 , 0.5)",
                  "rgba(69, 229, 0 , 0.5)",
                  "rgba(69, 229, 0 , 0.5)",
                ],
                borderColor: [
                  "rgba(69, 229, 0 , 1)",
                  "rgba(69, 229, 0 , 1)",
                  "rgba(69, 229, 0 , 1)",
                  "rgba(69, 229, 0 , 1)",
                  "rgba(69, 229, 0 , 1)",
                  "rgba(69, 229, 0 , 1)",
                  "rgba(69, 229, 0 , 1)",
                ],
                borderWidth: 1.5,
              },
              {
                label: "Deceased",
                data: Object.values(deaths),
                backgroundColor: [
                  "rgba(149, 149, 149 , 0.5)",
                  "rgba(149, 149, 149 , 0.5)",
                  "rgba(149, 149, 149 , 0.5)",
                  "rgba(149, 149, 149 , 0.5)",
                  "rgba(149, 149, 149 , 0.5)",
                  "rgba(149, 149, 149 , 0.5)",
                  "rgba(149, 149, 149 , 0.5)",
                ],
                borderColor: [
                  "rgba(149, 149, 149 , 1)",
                  "rgba(149, 149, 149 , 1)",
                  "rgba(149, 149, 149 , 1)",
                  "rgba(149, 149, 149 , 1)",
                  "rgba(149, 149, 149 , 1)",
                  "rgba(149, 149, 149 , 1)",
                  "rgba(149, 149, 149 , 1)",
                ],
                borderWidth: 1.5,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </>
  );
}

export default GraphData;
