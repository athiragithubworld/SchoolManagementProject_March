import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import LoadingPage from "./components/LoadingPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TimeTable from "./components/TimeTableCopy1";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>
      {/* <LoadingPage /> */}
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      {/* <TimeTable/> */}
      {/* <h1>Header</h1> */}
      <MainComponent />
    </>
  );
}

export default App;
