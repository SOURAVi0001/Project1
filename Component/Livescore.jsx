import React, { useState, useEffect } from "react";
import styles from "./Livescore.module.css";

function Livescore() {
  const [score, setScore] = useState({
    team1: {
      name: "India",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
      runs: 145,
      wickets: 4,
      overs: "17.3",
    },
    team2: {
      name: "Australia",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/Flag_of_Australia.svg",
    },
    striker: { name: "Virat Kohli", runs: 45, balls: 30 },
    nonStriker: { name: "MS Dhoni", runs: 32, balls: 25 },
    bowler: { 
      name: "Jasprit Bumrah", 
      overs: "3.3", 
      maidens: 1,
      wickets: 2, 
      runs: 21, 
      economy: "6.0",
      strikeRate: "10.5"
    },
    currentOver: ["1", "4", "W", "0", "WD", "6", "1", "NB", "2", "0"],
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Live Cricket Score</h1>

      {/* Team Score Display */}
      <div className={styles.scoreboard}>
        <div className={styles.teamInfo}>
          <img src={score.team1.logo} alt="Team 1" className={styles.teamLogo} />
          <span className={styles.teamName}>{score.team1.name}</span>
        </div>
        <div className={styles.scoreDisplay}>
          <span className={styles.mainScore}>{score.team1.runs}/{score.team1.wickets}</span>
          <span className={styles.overs}>({score.team1.overs} overs)</span>
        </div>
        <div className={styles.teamInfo}>
          <img src={score.team2.logo} alt="Team 2" className={styles.teamLogo} />
          <span className={styles.teamName}>{score.team2.name}</span>
        </div>
      </div>

      {/* Batsman and Bowler Stats */}
      <div className={styles.playerStats}>
        <div className={styles.batsmanBox}>
          <h3>🏏 Batsmen</h3>
          <table className={styles.batsmanTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Runs</th>
                <th>Balls</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⚡ {score.striker.name}</td>
                <td>{score.striker.runs}</td>
                <td>{score.striker.balls}</td>
              </tr>
              <tr>
                <td>🏏 {score.nonStriker.name}</td>
                <td>{score.nonStriker.runs}</td>
                <td>{score.nonStriker.balls}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bowler Section - Redesigned */}
        <div className={styles.bowlerBox}>
          <h3>🎯 Bowler</h3>
          <div className={styles.bowlerCard}>
            <p className={styles.bowlerName}>{score.bowler.name}</p>
            <div className={styles.bowlerStats}>
              <span><strong>O:</strong> {score.bowler.overs}</span>
              <span><strong>M:</strong> {score.bowler.maidens}</span>
              <span><strong>W:</strong> {score.bowler.wickets}</span>
              <span><strong>R:</strong> {score.bowler.runs}</span>
            </div>
            <div className={styles.bowlerExtraStats}>
              <span><strong>Eco:</strong> {score.bowler.economy}</span>
              <span><strong>SR:</strong> {score.bowler.strikeRate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ball Representation */}
      <div className={styles.currentOver}>
        {score.currentOver.map((ball, index) => (
          <div key={index} className={`${styles.ball} ${ball === "W" ? styles.wicket : ball === "WD" ? styles.wide : ball === "NB" ? styles.noBall : styles.run}`}>
            {ball}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Livescore;