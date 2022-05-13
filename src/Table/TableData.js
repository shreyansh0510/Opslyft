import React, { useEffect, useState } from "react";
import "./TableData.css";

const url = "https://disease.sh/v3/covid-19/countries";

function TableData() {
  const [countries, SetCountries] = useState([]);
  const [filteredCountries, SetFilteredCountries] = useState([]);

  const handleChange = (event) => {
    let keyword = event.target.value;
    var output = countries.filter((item) => {
      return item.country.toLowerCase().includes(keyword.toLowerCase());
    });
    SetFilteredCountries(output);
    // if (output.length > 0) {
    //   // document.getElementById("msg").style.visibility = "hidden";
    // } else {
    //   document.getElementById("msg").innerHTML = "No data found";
    // }
  };

  const handleContinent = (event) => {
    let keyword = event.target.value;
    var output = countries.filter((item) => {
      return item.continent.toLowerCase().includes(keyword.toLowerCase());
    });
    SetFilteredCountries(output);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        SetCountries(data);
        SetFilteredCountries(data);
      });
  }, []);

  return (
    <>
      <div className="tableClass">
        <div className="filterHeading">Query Filters:</div>
        <div className="continentSearch">
          <span>Search by Continent :</span>
          &nbsp;
          <br />
          <select onChange={handleContinent}>
            <option value={""}>Select Continent</option>
            <option value={"Europe"}>Europe</option>
            <option value={"Asia"}>Asia</option>
            <option value={"Africa"}>Africa</option>
            <option value={"North America"}>North America</option>
            <option value={"South America"}>South America</option>
            <option value={"Australia-Oceania"}>Australia-Oceania</option>
          </select>
        </div>
        <div className="countrySearch">
          <span>Search by Country :</span>
          &nbsp;
          <input
            type="text"
            placeholder="Enter Country name"
            onChange={handleChange}
          />
        </div>
        <div className="countryTable">
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deceased</th>
              </tr>
            </thead>
            <tbody className="tbody" id="msg">
              {filteredCountries.map((items, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={items.countryInfo.flag} alt="flag" />
                      &nbsp; &nbsp;
                      {items.country}
                    </td>
                    <td>{items.active}</td>
                    <td>{items.deaths}</td>
                    <td>{items.recovered}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableData;
