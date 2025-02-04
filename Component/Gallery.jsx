import React, { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: "https://static.toiimg.com/thumb/msid-97036006,width-1280,height-720,resizemode-4/97036006.jpg", alt: "Cricket Match" },
    { id: 2, src: "https://cdn.shopify.com/s/files/1/0278/4565/6649/files/WhatsApp_Image_2023-09-17_at_21.50.17.webp?v=1694969476" },
    { id: 3, src: "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/08/02144310/all-Indian-cricketer-name.jpg" },
    { id: 4, src: "https://i3.wp.com/img.mensxp.com/media/content/2022/Nov/Few-Retirements-After-Indias-T20WC-Exit1200_636cfef0885db.jpeg?strip=all", alt: "Cricket Team" }
  ];

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}>Image Gallery</h2>
      <div className={styles.imageGrid}>
        {images.map((image) => (
          <div key={image.id} className={styles.imageCard} onClick={() => setSelectedImage(image)}>
            <img src={image.src} alt={image.alt} className={styles.gridImage} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.imageModal} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.alt} className={styles.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;