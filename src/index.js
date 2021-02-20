import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./styles.css";

App.propTypes = {
  initialCount: PropTypes.number
};

function App({ initialCount }) {
  const [darkMode, setDarkMode] = useState(false);
  const [workorders, setWorkOrders] = useState([]);

  useEffect(() => {
    console.log("THE FIRST RENDER");
    const localStorageDarkMode = localStorage.getItem("darkMode");

    if (localStorageDarkMode === "true") setDarkMode(true);
  }, []); // empty array

  useEffect(() => {
    console.log("darkmode changes");

    if (darkMode) {
      document.body.classList.add("isDark");
    } else {
      document.body.classList.remove("isDark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return <div></div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App initialCount={0} />, rootElement);
