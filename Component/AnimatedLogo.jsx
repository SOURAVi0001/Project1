import { useEffect, useState } from "react";
import styles from "./AnimatedLogo.module.css";
import logo from "./logo.png";
import bgImage from "./bg-image.jpg"; // Import background image

function AnimatedLogo() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={styles.logoContainer}
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className={styles.logo}>
                <img src={logo} alt="KT20 Canada Logo" />
            </div>
            <div className={styles.logoName}>
                <h2>KT20 Canada</h2>
            </div>
        </div>
    );
}

export default AnimatedLogo;