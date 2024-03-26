import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./App.css";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const tabsData = await response.json();
        setTabs(tabsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {tabs.map((item, index) => (
            <button
              key={index}
              className={`job-btn ${index === selectedTab && "active-btn"}`}
              onClick={() => setSelectedTab(index)}>
              {item.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{tabs[selectedTab]?.title}</h3>
          <h4>{tabs[selectedTab]?.company}</h4>
          <p className="job-date">{tabs[selectedTab]?.dates}</p>
          <div className="job-desc">
            <ul className="job-desc">
              {tabs[selectedTab]?.duties.map((duty, index) => (
                <>
                  <FaAngleDoubleRight className="job-icon" />
                  <li key={index} className="duty-item">
                    {duty}
                  </li>
                </>
              ))}
            </ul>
          </div >
          <button className="btn">More Info</button>
        </article>
      </div>
    </section>
  );
};

export default App;