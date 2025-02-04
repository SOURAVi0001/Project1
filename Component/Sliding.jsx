import { useState, useEffect, useRef } from "react";
import styles from "./Sliding.module.css";

const images = [
  { type: "image", src: "https://images.forbesindia.com/media/images/2023/Oct/img_220739_cricketinolympics.jpg" },
  { type: "image", src: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ugvcvyuorglkafijaz4x" },
  { type: "image", src: "https://static.toiimg.com/thumb/msid-97036006,width-1280,height-720,resizemode-4/97036006.jpg" },
  { type: "image", src: "https://cms-image-bucket-production-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com/images/8/5/5/0/46870558-3-eng-GB/Cropped-1700503521AP23323313076525.jpg" },
  { type: "video", src: "https://www.youtube.com/embed/dhoP-tdDs5Y" },
];

function Sliding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, autoSlide]);

  useEffect(() => {
    if (images[currentIndex].type === "video") {
      setAutoSlide(false); // Pause sliding on video
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setAutoSlide(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setAutoSlide(true);
  };

  const handleVideoPlay = () => {
    setAutoSlide(false); // Pause when video starts
  };

  const handleVideoClose = () => {
    setAutoSlide(true); // Resume auto-slide when video is closed
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((media, index) => (
          <div key={index} className={styles.slide}>
            {media.type === "image" ? (
              <img src={media.src} alt={`slide-${index}`} />
            ) : (
              <div className={styles.videoContainer}>
                <iframe
                  ref={videoRef}
                  className={styles.video}
                  src={`${media.src}?enablejsapi=1`}
                  title="video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  onPlay={handleVideoPlay}
                />
                <button className={styles.closeButton} onClick={handleVideoClose}>✖</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={prevSlide}>❮</button>
      <button className={styles.next} onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Sliding;