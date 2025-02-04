import React from 'react';
import styles from './Upcoming.module.css';

const Upcoming = () => {
  return (
    <div className={styles.nextMatchWrap}>
      <div className={styles.cardTop}>
      <h2>Upcoming Match</h2>
        <div className={styles.slideWrapLatest}>
          <div className={styles.matchFlex}>
            <div className={styles.team}>
            
              <div className={styles.teamNameScoreLatest}>
              
                <h6 className={styles.theName}>Team 1</h6>
                <img
                  src="https://indiadialingai.com/kt20/wp-content/uploads/2024/07/team2-3.png"
                  alt="Team Two Logo"
                  className={styles.teamLogo}
                />
              </div>
            </div>
            <div className={styles.vs}>
              <div className={styles.live}>VS</div>
              
            </div>
            <div className={styles.team}>
              <div className={styles.teamNameScoreLatest}>
                <h6 className={styles.theName}>Team 2</h6>
                <img
                  src="https://indiadialingai.com/kt20/wp-content/uploads/2024/07/team4-3.png"
                  alt="Team Four Logo"
                  className={styles.teamLogo}
                />
              </div>
            </div>
          </div>
        </div>
        {/* The bottom card section is commented out */}
        {/* <div className={styles.cardBottom}>
          <div className={styles.locationWrapper}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>Lorem Ipsum is simply dummy text</p>
          </div>
          <a href="https://indiadialingai.com/kt20/match-schedule/" className={styles.themeBtn}>
            Book Now<i className="fa fa-hand-pointer-o"></i>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Upcoming;