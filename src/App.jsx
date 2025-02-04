import React from "react";
import Navbar from "../Component/Nav.jsx";
import Sliding from "../Component/Sliding.jsx";
import AnimatedLogo from "../Component/AnimatedLogo";
import Playerlist from "../Component/Playerlist";
import Login from "../Component/Login.jsx";
import Gallery from "../Component/Gallery.jsx";
import Upcoming from "../Component/Upcoming.jsx";
import Footer from "../Component/Footer.jsx";
import LiveAndPoll from "../Component/LiveAndPoll.jsx";  // ✅ Importing LiveAndPoll
import "./App.css";

function App() {
  return (
    <div className="container">
      <AnimatedLogo />
      <Navbar />

      <div id="home">
        <Sliding />
      </div>

      {/* ✅ Replacing Livescore & Polling with LiveAndPoll for proper alignment */}
      <div id="live-section">
        <LiveAndPoll />
      </div>

      <div id="upcoming">
        <Upcoming />
      </div>

      <div id="playerlist">
        <Playerlist />
      </div>

      {/* <div id="login">
        <Login />
      </div> */}

      <div id="gallery">
        <Gallery />
      </div>
      
      <Footer/>
      

      
    </div>
  );
}

export default App;